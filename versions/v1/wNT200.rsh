"reach 0.1";

const MAX_DECIMALS = 256; // decimals fits in UInt8

const TokenMeta = Struct([
  ["name", Bytes(32)], // name
  ["symbol", Bytes(8)], // symbol
  ["decimals", UInt], // number of decimals
  ["totalSupply", UInt256], // total supply
]);

const MintParams = Object({
  name: Bytes(32), // name
  symbol: Bytes(8), // symbol
  decimals: UInt, // number of decimals
});

const KeyInfo = Struct([
  ["votekey", Bytes(32)],
  ["selkey", Bytes(32)],
  ["spkey", Bytes(64)],
  ["votefst", UInt],
  ["votelst", UInt],
  ["votekd", UInt],
]);

const MKeyInfo = Maybe(KeyInfo);

export const NT200 = () =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });

    const State = Struct([
      ...Struct.fields(TokenMeta),
      ["zeroAddress", Address],
      ["manager", Address],
      ["tokenAmount", UInt],
      ["registered", Bool],
      ["keyInfo", MKeyInfo],
      ["closed", Bool],
    ]);

    const Params = Object({
      zeroAddress: Address, // zero address
      meta: MintParams, // token meta
    });

    const D = Participant("Deployer", {
      params: Params, // deployer params
      ready: Fun([Contract], Null), // token ready
    });

    const A = API({
      arc200_transfer: Fun([Address, UInt256], Bool), // tranfer from this to address
      arc200_transferFrom: Fun([Address, Address, UInt256], Bool), // transfer from address to address
      arc200_approve: Fun([Address, UInt256], Bool), // approve address to spend this
      createBalanceBox: Fun([Address], Bool), // create balance box
      deleteBalanceBox: Fun([Address], Bool), // delete balance box if zero
      deleteAllowanceBox: Fun([Address, Address], Bool), // delete allowance box if zero
      deposit: Fun([UInt], UInt256),
      withdraw: Fun([UInt], UInt256),
      touch: Fun([], UInt), // touch this contract
      grant: Fun([Address], Null), // grant address to be manager
      register: Fun([Bytes(32), Bytes(32), Bytes(64), UInt, UInt, UInt], Bool),
      deregister: Fun([], Bool),
      destroy: Fun([], Null), // destroy this contract
    });

    const V = View({
      arc200_name: Fun([], Bytes(32)), // get name
      arc200_symbol: Fun([], Bytes(8)), // get symbol
      arc200_decimals: Fun([], UInt), // get decimals
      arc200_totalSupply: Fun([], UInt256), // get total supply
      arc200_balanceOf: Fun([Address], UInt256), // get balance of address
      arc200_allowance: Fun([Address, Address], UInt256), // get allowance of address to spend this
      hasBalance: Fun([Address], Bool), // has balance box
      hasAllowance: Fun([Address, Address], Bool), // has allowance box
      circulatingSupply: Fun([], UInt256), // circulating supply
      state: Fun([], State), // get state
      manager: Fun([], Address), // get manager
    });

    const N = Events({
      arc200_Transfer: [Address, Address, UInt256],
      arc200_Approval: [Address, Address, UInt256],
      e_register: [KeyInfo],
      e_votekey: [Bytes(32)],
      e_selkey: [Bytes(32)],
      e_spkey: [Bytes(64)],
      e_votefst: [UInt],
      e_votelst: [UInt],
      e_votekd: [UInt],
      e_deregister: [KeyInfo],
    });

    init();

    D.only(() => {
      const { zeroAddress, meta } = declassify(interact.params);
    });
    D.publish(zeroAddress, meta).check(() => {
      check(
        meta.decimals <= MAX_DECIMALS,
        "ARC200: Decimals must be less than 19"
      );
    });

    const balances = new Map(UInt256);
    const allowances = new Map(Tuple(Address, Address), UInt256);

    const manager = D;
    const totalSupply = UInt256.max;

    balances[getAddress()] = totalSupply;
    balances[zeroAddress] = UInt256(0);

    N.arc200_Transfer(zeroAddress, getAddress(), totalSupply);
    D.interact.ready(getContract());

    V.arc200_name.set(() => meta.name);
    V.arc200_symbol.set(() => meta.symbol);
    V.arc200_decimals.set(() => meta.decimals);
    V.arc200_totalSupply.set(() => totalSupply);

    const initialState = {
      ...meta,
      totalSupply,
      zeroAddress,
      manager,
      tokenAmount: 0,
      registered: false,
      keyInfo: MKeyInfo.None(),
      closed: false,
    };

    const [s] = parallelReduce([initialState])
      .define(() => {
        const balanceOf = (owner) => {
          const m_bal = balances[owner];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_balanceOf.set(balanceOf);
        const allowance = (owner, spender) => {
          const m_bal = allowances[[owner, spender]];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_allowance.set(allowance);
        V.hasBalance.set((addr) => isSome(balances[addr]));
        V.hasAllowance.set((owner, spender) =>
          isSome(allowances[[owner, spender]])
        );
        const state = () => State.fromObject(s);
        V.state.set(state);
        const circulatingSupply = () => UInt256(s.tokenAmount);
        V.circulatingSupply.set(circulatingSupply);
        const manager_ = () => s.manager;
        V.manager.set(manager_);
      })
      .invariant(implies(!s.closed, balance() == s.tokenAmount))
      .invariant(implies(s.closed, balance() == 0))
      .while(!s.closed)
      .define(() => {
        const transfer_ = (from_, to_, value_) => {
          assert(from_ != to_, "ARC200: Transfer to self");
          balances[from_] = balanceOf(from_) - value_;
          balances[to_] = balanceOf(to_) + value_;
          N.arc200_Transfer(from_, to_, value_);
        };
        const approve_ = (owner_, spender_, value_) => {
          allowances[[owner_, spender_]] = value_;
          N.arc200_Approval(owner_, spender_, value_);
        };
        const transferFrom = (spender_, from_, to_, value_) => {
          transfer_(from_, to_, value_);
          const allowance__ = allowance(from_, spender_) - value_;
          allowances[[from_, spender_]] = allowance__;
          N.arc200_Approval(from_, spender_, allowance__);
        };
      })
      .define(() => {
        const chkTransfer = (from_, to_, value_) => {
          check(from_ != to_, "ARC200: Transfer to self");
          check(
            balanceOf(from_) >= value_,
            "ARC200: Transfer amount must not be greater than balance"
          );
        };
      })
      // api: transfer
      // - transfer from this to address
      // + may transfer to zero address (burn) if zero address burn enabled
      .api_(A.arc200_transfer, (to_, value_) => {
        chkTransfer(this, to_, value_);
        return [
          (k) => {
            k(true);
            transfer_(this, to_, value_);
            return [s];
          },
        ];
      })
      .define(() => {
        const chkTransferFrom = (spender_, from_, to_, value_) => {
          check(from_ != to_, "ARC200: Transfer to self");
          check(
            balanceOf(from_) >= value_,
            "ARC200: Amount must not be greater than balance"
          );
          check(
            allowance(from_, spender_) >= value_,
            "ARC200: Amount must not be greater than allowance"
          );
        };
      })
      // api: transferFrom
      // - transfer from address to address
      // + may not transfer to and from zero address
      // + requires allowance from spender to this
      .api_(A.arc200_transferFrom, (from_, to_, value_) => {
        chkTransferFrom(this, from_, to_, value_);
        return [
          (k) => {
            transferFrom(this, from_, to_, value_);
            k(true);
            return [s];
          },
        ];
      })
      .define(() => {
        const chkApprove_ = (owner_, spender_, value_) => {
          check(owner_ != zeroAddress, "ARC200: Approve this to zero address");
          check(spender_ != zeroAddress, "ARC200: Approve to zero address");
        };
      })
      // api: approve
      // - approve address to spend this
      // + may not approve zero address
      // + may not approve this if zero address
      .api_(A.arc200_approve, (spender_, value_) => {
        chkApprove_(this, spender_, value_);
        return [
          (k) => {
            approve_(this, spender_, value_);
            k(true);
            return [s];
          },
        ];
      })
      .api_(A.deposit, (value_) => {
        chkTransfer(getAddress(), this, UInt256(value_));
        return [
          value_,
          (k) => {
            transfer_(getAddress(), this, UInt256(value_));
            k(balanceOf(this))
            return [
              {
                ...s,
                tokenAmount: s.tokenAmount + value_,
              },
            ];
          },
        ];
      })
      // api: withdraw
      // - withdraw wrapped network token balance
      .api_(A.withdraw, (value_) => {
        check(value_ <= s.tokenAmount, "ARC200: Withdraw amount too large");
        chkTransferFrom(getAddress(), this, getAddress(), UInt256(value_));
        return [
          (k) => {
            transferFrom(getAddress(), this, getAddress(), UInt256(value_));
            transfer(value_).to(this);
            k(balanceOf(this))
            return [
              {
                ...s,
                tokenAmount: s.tokenAmount - value_,
              },
            ];
          },
        ];
      })
      // api: createBalanceBox
      // - create balance box
      .api_(A.createBalanceBox, (addr) => {
        check(isNone(balances[addr]), "ARC200: Balance box already exists");
        return [
          (k) => {
            balances[addr] = UInt256(0);
            k(true);
            return [s];
          },
        ];
      })
      // api: deleteBalanceBox
      // - delete balance box if zero
      // + requires address not zero address
      // + requires balance box to exist
      // + requires balance box to be zero or zero address balance box to be total supply
      .api_(A.deleteBalanceBox, (addr) => {
        check(
          addr != zeroAddress,
          "ARC200: Delete balance box to zero address"
        );
        check(isSome(balances[addr]), "ARC200: Balance box not found");
        check(balanceOf(addr) == UInt256(0), "ARC200: Balance box not empty");
        return [
          (k) => {
            delete balances[addr];
            k(true);
            return [s];
          },
        ];
      })
      // api: deleteAllowanceBox
      // - delete allowance box if zero
      // + requires allowance box to exist
      // + requires allowance box to be zero or zero address balance box to be total supply
      .api_(A.deleteAllowanceBox, (owner, spender) => {
        check(
          isSome(allowances[[owner, spender]]),
          "ARC200: Allowance box not found"
        );
        check(
          allowance(owner, spender) == UInt256(0),
          "ARC200: Allowance box not empty"
        );
        return [
          (k) => {
            delete allowances[[owner, spender]];
            k(true);
            return [s];
          },
        ];
      })
      .api_(A.register, (votekey, selkey, spkey, votefst, votelst, votekd) => {
        check(this === s.manager, "ARC200: Only manager can grant");
        return [
          1000,
          (k) => {
            k(true);
            const ki = KeyInfo.fromObject({
              votekey,
              selkey,
              spkey,
              votefst,
              votelst,
              votekd,
            });
            N.e_register(ki);
            N.e_votekey(votekey);
            N.e_selkey(selkey);
            N.e_spkey(spkey);
            N.e_votefst(votefst);
            N.e_votelst(votelst);
            N.e_votekd(votekd);
            // register_online
            transfer(1000).to(this);
            return [{ ...s, registered: true, keyInfo: MKeyInfo.Some(ki) }];
          },
        ];
      })
      .api_(A.deregister, () => {
        check(this === s.manager, "ARC200: Only manager can grant");
        check(s.registered, "Must be registered");
        check(!isNone(s.keyInfo), "Must have key info");
        return [
          1000,
          (k) => {
            const ki = s.keyInfo;
            switch (ki) {
              case Some:
                k(true);
                N.e_deregister(ki);
                // register_offline
                transfer(1000).to(this);
                return [{ ...s, registered: false, keyInfo: MKeyInfo.None() }];
              case None: // impossible
                k(false);
                return [s];
            }
          },
        ];
      })
      // api: touch
      // - touch this contract
      // + does nothing but flushes excess fees to manager
      .api_(A.touch, () => {
        return [
          (k) => {
            const f1 = getUntrackedFunds();
            transfer(f1).to(s.manager);
            k(f1);
            return [s]
          },
        ];
      })
      // api: grant
      // - grant address to be manager
      // + may not grant zero address
      .api_(A.grant, (addr) => {
        check(addr != zeroAddress, "ARC200: Grant zero address");
        check(addr != s.manager, "ARC200: Grant to manager")
        check(this === s.manager, "ARC200: Only manager can grant");
        return [
          (k) => {
            k(null);
            return [{ ...s, manager: addr }];
          },
        ];
      })
      // api: destroy
      // - destroy this contract
      // + requires zero address balance box to be total supply
      // + deletes last balance box, zero address balance box
      // + exits loop and closes contract
      .api_(A.destroy, () => {
        check(this === s.manager, "ARC200: Only manager can grant");
        check(
          isSome(balances[zeroAddress]),
          "ARC200: Zero address balance box not found"
        );
        return [
          (k) => {
            delete balances[zeroAddress];
            delete balances[getAddress()]; 
            transfer(s.tokenAmount).to(s.manager);
            k(null);
            return [{ ...s, closed: true }];
          },
        ];
      });
    commit();
    exit();
  });

export const wNT200 = NT200();
