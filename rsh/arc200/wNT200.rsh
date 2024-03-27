"reach 0.1";

// INTERFACE SELECTORS

// INTERFACE_SELECTOR_ARC200 c7bea040
// arc200_transfer(address,uint256)bool da7025b9
// arc200_transferFrom(address,address,uint256)bool 4a968f8f
// arc200_approve(address,uint256)bool b5422125
// arc200_name()byte[32] 657d13ec
// arc200_symbol()byte[8] b6ae1a25
// arc200_decimals()uint8 84ec13d5
// arc200_totalSupply()uint256 ec996041
// arc200_balanceOf(address)uint256 82e573c4
// arc200_allowance(address,address)uint256 bbb319f3
// arc200_Transfer(address,address,uint256) 7983c35c
// arc200_Approval(address,address,uint256) 1969f865
const INTERFACE_SELECTOR_ARC200 = "0xc7bea040";

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

const hasBoxOp = Data({
  Balance: Address,
  Allowance: Tuple(Address, Address),
});

const MintParams = Object({
  name: Bytes(32),
  symbol: Bytes(8),
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

    const supportedInterfaces = [Bytes.fromHex(INTERFACE_SELECTOR_ARC200)];

    const State = Struct([
      ["tokenAmount", UInt],
      ["registered", Bool],
      ["keyInfo", MKeyInfo],
    ]);

    const Params = Object({
      zeroAddress: Address, // zero address
      meta: MintParams, // token meta params
    });

    const D = Participant("Deployer", {
      params: Params, // deployer params
      ready: Fun([Contract], Null), // token ready
    });

    const A = API({
      arc200_transfer: Fun([Address, UInt256], Bool), // tranfer from this to address
      arc200_transferFrom: Fun([Address, Address, UInt256], Bool), // transfer from address to address
      arc200_approve: Fun([Address, UInt256], Bool), // approve address to spend this
      // boxes
      createBalanceBox: Fun([Address], Bool), // create balance box
      createAllowanceBox: Fun([Address, Address], Bool), // create allowance box
      // wrapped network token
      deposit: Fun([UInt], UInt256),
      withdraw: Fun([UInt], UInt256),
      // manager
      grant: Fun([Address], Null), // grant address to be manager
      // participation
      register: Fun([Bytes(32), Bytes(32), Bytes(64), UInt, UInt, UInt], Bool),
      deregister: Fun([], Bool),
      // anybody
      touch: Fun([], UInt), // touch this contract
      nop: Fun([], Null), // ()Null
    });

    const V = View({
      arc200_name: Fun([], Bytes(32)), // get name
      arc200_symbol: Fun([], Bytes(8)), // get symbol
      arc200_decimals: Fun([], UInt), // get decimals
      arc200_totalSupply: Fun([], UInt256), // get total supply
      arc200_balanceOf: Fun([Address], UInt256), // get balance of address
      arc200_allowance: Fun([Address, Address], UInt256), // get allowance of address to spend this
      circulatingSupply: Fun([], UInt256), // circulating supply
      state: Fun([], State), // get state
      manager: Fun([], Address), // get manager
      hasBox: Fun([hasBoxOp], Bool),
      // ARC73 Supported View
      supportsInterface: Fun([Bytes(4)], Bool),
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
    D.publish(zeroAddress, meta);

    const balances = new Map(UInt256);
    const allowances = new Map(Tuple(Address, Address), UInt256);

    const manager = D;
    const totalSupply = UInt256.max;
    const decimals = 6;

    balances[getAddress()] = totalSupply;
    balances[zeroAddress] = UInt256(0);

    N.arc200_Transfer(zeroAddress, getAddress(), totalSupply);
    D.interact.ready(getContract());

    V.arc200_name.set(() => meta.name);
    V.arc200_symbol.set(() => meta.symbol);
    V.arc200_decimals.set(() => decimals);
    V.arc200_totalSupply.set(() => totalSupply);

    const initialState = {
      manager,
      tokenAmount: 0,
      registered: false,
      keyInfo: MKeyInfo.None(),
    };

    const [s] = parallelReduce([initialState])
      .define(() => {
        const balanceOf = (owner) => {
          const m_bal = balances[owner];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_balanceOf.set(balanceOf);
        V.hasBox.set((op) => {
          switch (op) {
            case Balance:
              return isSome(balances[op]);
            case Allowance:
              return isSome(allowances[op]);
          }
        });
        const allowance = (owner, spender) => {
          const m_bal = allowances[[owner, spender]];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_allowance.set(allowance);
        const state = () => State.fromObject(s);
        V.state.set(state);
        const circulatingSupply = () => UInt256(s.tokenAmount);
        V.circulatingSupply.set(circulatingSupply);
        const manager_ = () => s.manager;
        V.manager.set(manager_);
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
      })
      .invariant(balance() == s.tokenAmount)
      .while(true)
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
      // api: transfer (arc200)
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
      // api: transferFrom (arc200)
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
      // api: approve (arc200)
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
      // api: deposit
      // - deposit wrapped network token balance
      .api_(A.deposit, (value_) => {
        chkTransfer(getAddress(), this, UInt256(value_));
        return [
          value_,
          (k) => {
            transfer_(getAddress(), this, UInt256(value_));
            k(balanceOf(this));
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
        chkTransfer(this, getAddress(), UInt256(value_));
        return [
          (k) => {
            transfer_(this, getAddress(), UInt256(value_)); // transfer from sender to app (wrapped network token)
            transfer(value_).to(this); // transfer from app to sender (network token)
            k(balanceOf(this));
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
      // api: createAllowanceBox
      // - create allowance box
      .api_(A.createAllowanceBox, (owner, spender) => {
        check(
          isNone(allowances[[owner, spender]]),
          "ARC200: Allowance box already exists"
        );
        return [
          (k) => {
            allowances[[owner, spender]] = UInt256(0);
            k(true);
            return [s];
          },
        ];
      })
      // api: register
      // - register for voting
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
      // api: deregister
      // - deregister from voting
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
            return [s];
          },
        ];
      })
      // api: nop
      // - no operation
      .api_(A.nop, () => {
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // api: grant
      // - grant address to be manager
      // + may not grant zero address
      .api_(A.grant, (addr) => {
        check(addr != zeroAddress, "ARC200: Grant zero address");
        check(addr != s.manager, "ARC200: Grant to manager");
        check(this === s.manager, "ARC200: Only manager can grant");
        return [
          (k) => {
            k(null);
            return [{ ...s, manager: addr }];
          },
        ];
      });
    commit();
    exit();
  });

export const wNT200 = NT200();
