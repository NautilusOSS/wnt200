// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['votekey', ctc2], ['selkey', ctc2], ['spkey', ctc3], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  return {
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1],
    e_deregister: [ctc5],
    e_register: [ctc5],
    e_selkey: [ctc2],
    e_spkey: [ctc3],
    e_votefst: [ctc4],
    e_votekd: [ctc4],
    e_votekey: [ctc2],
    e_votelst: [ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Object({
    name: ctc1,
    symbol: ctc2
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Struct([['votekey', ctc1], ['selkey', ctc1], ['spkey', ctc5], ['votefst', ctc6], ['votelst', ctc6], ['votekd', ctc6]]);
  const ctc8 = stdlib.T_Data({
    None: ctc4,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    keyInfo: ctc8,
    manager: ctc0,
    registered: ctc9,
    tokenAmount: ctc6
    });
  const ctc11 = stdlib.T_UInt256;
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc13 = stdlib.T_Data({
    Allowance: ctc12,
    Balance: ctc0
    });
  const ctc14 = stdlib.T_Struct([['tokenAmount', ctc6], ['registered', ctc9], ['keyInfo', ctc8]]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc16 = stdlib.T_Data({
    None: ctc4,
    Some: ctc11
    });
  const map0_ctc = ctc16;
  
  const map1_ctc = ctc16;
  
  
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async (_v2496, _v2497 ) => {
          const v2496 = stdlib.protect(ctc0, _v2496, null);
          const v2497 = stdlib.protect(ctc0, _v2497, null);
        
        const v2498 = [v2496, v2497];
        const v2499 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v2498, ctc11), null);
        const v2500 = stdlib.fromSome(v2499, stdlib.checkedBigNumberify('./wNT200.rsh:163:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2500;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async (_v2479 ) => {
          const v2479 = stdlib.protect(ctc0, _v2479, null);
        
        const v2480 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2479, ctc11), null);
        const v2481 = stdlib.fromSome(v2480, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2481;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./wNT200.rsh:126:22:decimal', stdlib.UInt_max, '6');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        const v2467 = v2459.name;
        
        return v2467;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        const v2468 = v2459.symbol;
        
        return v2468;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _circulatingSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        const v2506 = v2471.tokenAmount;
        const v2507 = stdlib.cast("UInt", "UInt256", v2506, false, true);
        
        return v2507;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBox = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async (_v2482 ) => {
          const v2482 = stdlib.protect(ctc13, _v2482, null);
        
        let v2487;
        switch (v2482[0]) {
          case 'Allowance': {
            const v2488 = v2482[1];
            const v2489 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v2488, ctc11), null);
            const v2490 = {
              None: 0,
              Some: 1
              }[v2489[0]];
            const v2491 = stdlib.eq(v2490, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v2487 = v2491;
            
            break;
            }
          case 'Balance': {
            const v2492 = v2482[1];
            const v2493 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2492, ctc11), null);
            const v2494 = {
              None: 0,
              Some: 1
              }[v2493[0]];
            const v2495 = stdlib.eq(v2494, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v2487 = v2495;
            
            break;
            }
          }
        
        return v2487;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        const v2508 = v2471.manager;
        
        return v2508;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async () => {
        
        const v2501 = v2471.tokenAmount;
        const v2502 = v2471.registered;
        const v2503 = v2471.keyInfo;
        const v2504 = {
          keyInfo: v2503,
          registered: v2502,
          tokenAmount: v2501
          };
        
        return v2504;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2458, v2459, v2462, v2469, v2471, v2475] = svs;
      return (await ((async (_v2509 ) => {
          const v2509 = stdlib.protect(ctc15, _v2509, null);
        
        const v2510 = stdlib.bytesFromHex("0xc7bea040");
        const v2512 = stdlib.digest([ctc15], [v2510]);
        const v2513 = stdlib.digest([ctc15], [v2509]);
        const v2514 = stdlib.digestEq(v2512, v2513);
        
        return v2514;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc11
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc11
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc6
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc1
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc2
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc11
        },
      circulatingSupply: {
        decode: _circulatingSupply,
        dom: [],
        rng: ctc11
        },
      hasBox: {
        decode: _hasBox,
        dom: [ctc13],
        rng: ctc9
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc14
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc15],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc3, ctc0, ctc8, ctc10, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    name: ctc3,
    symbol: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    meta: ctc5,
    zeroAddress: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc15, ctc12, ctc12, ctc12]);
  const ctc17 = stdlib.T_Data({
    arc200_approve0_211: ctc8,
    arc200_transfer0_211: ctc8,
    arc200_transferFrom0_211: ctc9,
    createAllowanceBox0_211: ctc10,
    createBalanceBox0_211: ctc11,
    deposit0_211: ctc13,
    deregister0_211: ctc14,
    grant0_211: ctc11,
    nop0_211: ctc14,
    register0_211: ctc16,
    touch0_211: ctc14,
    withdraw0_211: ctc13
    });
  const ctc18 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v2448 = stdlib.protect(ctc7, interact.params, 'for Deployer\'s interact field params');
  const v2449 = v2448.meta;
  const v2450 = v2448.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2450, v2449],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./wNT200.rsh:119:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:119:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2458, v2459], secs: v2461, time: v2460, didSend: v37, from: v2457 } = txn1;
      
      ;
      const v2462 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc6, v2462, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc6, v2458, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:129:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2464 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      const v2465 = await ctc.getContractInfo();
      
      const v2469 = ['None', null];
      const v2470 = {
        keyInfo: v2469,
        manager: v2457,
        registered: false,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2471 = v2470;
      const v2472 = v2460;
      const v2475 = stdlib.checkedBigNumberify('./wNT200.rsh:114:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v2458, v2459], secs: v2461, time: v2460, didSend: v37, from: v2457 } = txn1;
  ;
  const v2462 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc6, v2462, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc6, v2458, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:129:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2464 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  const v2465 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2465), {
    at: './wNT200.rsh:132:21:application',
    fs: ['at ./wNT200.rsh:132:21:application call to [unknown function] (defined at: ./wNT200.rsh:132:21:function exp)', 'at ./wNT200.rsh:132:21:application call to "liftedInteract" (defined at: ./wNT200.rsh:132:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2469 = ['None', null];
  const v2470 = {
    keyInfo: v2469,
    manager: v2457,
    registered: false,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2471 = v2470;
  let v2472 = v2460;
  let v2475 = stdlib.checkedBigNumberify('./wNT200.rsh:114:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn3;
    switch (v2813[0]) {
      case 'arc200_approve0_211': {
        const v2816 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v2865 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '0')];
        const v2866 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '1')];
        const v2868 = stdlib.addressEq(v2812, v2458);
        const v2869 = v2868 ? false : true;
        stdlib.assert(v2869, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:256:15:application call to [unknown function] (defined at: ./wNT200.rsh:256:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v2871 = stdlib.addressEq(v2865, v2458);
        const v2872 = v2871 ? false : true;
        stdlib.assert(v2872, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:246:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:256:15:application call to [unknown function] (defined at: ./wNT200.rsh:256:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v2876 = [v2812, v2865];
        await stdlib.mapSet(map1, ctc10, v2876, ctc1, v2866);
        null;
        const v2878 = true;
        await txn3.getOutput('arc200_approve', 'v2878', ctc18, v2878);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_211': {
        const v3229 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v3301 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '0')];
        const v3302 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '1')];
        const v3304 = stdlib.addressEq(v2812, v3301);
        const v3305 = v3304 ? false : true;
        stdlib.assert(v3305, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:209:15:application call to [unknown function] (defined at: ./wNT200.rsh:209:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v3307 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2812, ctc1), null);
        const v3308 = stdlib.fromSome(v3307, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3309 = stdlib.ge256(v3308, v3302);
        stdlib.assert(v3309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:209:15:application call to [unknown function] (defined at: ./wNT200.rsh:209:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v3313 = true;
        await txn3.getOutput('arc200_transfer', 'v3313', ctc18, v3313);
        const v3325 = stdlib.safeSub256(v3308, v3302);
        await stdlib.mapSet(map0, ctc6, v2812, ctc1, v3325);
        const v3326 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3301, ctc1), null);
        const v3327 = stdlib.fromSome(v3326, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3328 = stdlib.safeAdd256(v3327, v3302);
        await stdlib.mapSet(map0, ctc6, v3301, ctc1, v3328);
        null;
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_211': {
        const v3642 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v3745 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '0')];
        const v3746 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '1')];
        const v3747 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '2')];
        const v3749 = stdlib.addressEq(v3745, v3746);
        const v3750 = v3749 ? false : true;
        stdlib.assert(v3750, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:218:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v3752 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3745, ctc1), null);
        const v3753 = stdlib.fromSome(v3752, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3754 = stdlib.ge256(v3753, v3747);
        stdlib.assert(v3754, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:219:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v3756 = [v3745, v2812];
        const v3757 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v3756, ctc1), null);
        const v3758 = stdlib.fromSome(v3757, stdlib.checkedBigNumberify('./wNT200.rsh:163:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3759 = stdlib.ge256(v3758, v3747);
        stdlib.assert(v3759, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:223:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v3768 = stdlib.safeSub256(v3753, v3747);
        await stdlib.mapSet(map0, ctc6, v3745, ctc1, v3768);
        const v3769 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3746, ctc1), null);
        const v3770 = stdlib.fromSome(v3769, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3771 = stdlib.safeAdd256(v3770, v3747);
        await stdlib.mapSet(map0, ctc6, v3746, ctc1, v3771);
        null;
        const v3776 = stdlib.safeSub256(v3758, v3747);
        await stdlib.mapSet(map1, ctc10, v3756, ctc1, v3776);
        null;
        const v3779 = true;
        await txn3.getOutput('arc200_transferFrom', 'v3779', ctc18, v3779);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createAllowanceBox0_211': {
        const v4055 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v4203 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '0')];
        const v4204 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '1')];
        const v4205 = [v4203, v4204];
        const v4206 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v4205, ctc1), null);
        const v4207 = {
          None: 0,
          Some: 1
          }[v4206[0]];
        const v4208 = stdlib.eq(v4207, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4208, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:315:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:320:15:application call to [unknown function] (defined at: ./wNT200.rsh:320:15:function exp)'],
          msg: 'ARC200: Allowance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc10, v4205, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:321:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4213 = true;
        await txn3.getOutput('createAllowanceBox', 'v4213', ctc18, v4213);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createBalanceBox0_211': {
        const v4468 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v4636 = v4468[stdlib.checkedBigNumberify('./wNT200.rsh:302:12:spread', stdlib.UInt_max, '0')];
        const v4637 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4636, ctc1), null);
        const v4638 = {
          None: 0,
          Some: 1
          }[v4637[0]];
        const v4639 = stdlib.eq(v4638, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4639, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:305:15:application call to [unknown function] (defined at: ./wNT200.rsh:305:15:function exp)'],
          msg: 'ARC200: Balance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc6, v4636, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:306:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4642 = true;
        await txn3.getOutput('createBalanceBox', 'v4642', ctc18, v4642);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deposit0_211': {
        const v4881 = v2813[1];
        undefined /* setApiDetails */;
        const v4891 = v4881[stdlib.checkedBigNumberify('./wNT200.rsh:265:12:spread', stdlib.UInt_max, '0')];
        const v4893 = stdlib.cast("UInt", "UInt256", v4891, false, true);
        const v4895 = stdlib.addressEq(v2462, v2812);
        const v4896 = v4895 ? false : true;
        stdlib.assert(v4896, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v4898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2462, ctc1), null);
        const v4899 = stdlib.fromSome(v4898, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4900 = stdlib.ge256(v4899, v4893);
        stdlib.assert(v4900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v4928 = stdlib.add(v2475, v4891);
        ;
        const v5082 = stdlib.safeSub256(v4899, v4893);
        await stdlib.mapSet(map0, ctc6, v2462, ctc1, v5082);
        const v5083 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2812, ctc1), null);
        const v5084 = stdlib.fromSome(v5083, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5085 = stdlib.safeAdd256(v5084, v4893);
        await stdlib.mapSet(map0, ctc6, v2812, ctc1, v5085);
        null;
        const v5088 = v5085;
        await txn3.getOutput('deposit', 'v5088', ctc1, v5088);
        const v5095 = v2471.keyInfo;
        const v5096 = v2471.manager;
        const v5097 = v2471.registered;
        const v5098 = v2471.tokenAmount;
        const v5100 = stdlib.safeAdd(v5098, v4891);
        const v5101 = {
          keyInfo: v5095,
          manager: v5096,
          registered: v5097,
          tokenAmount: v5100
          };
        const cv2471 = v5101;
        const cv2472 = v2814;
        const cv2475 = v4928;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deregister0_211': {
        const v5294 = v2813[1];
        undefined /* setApiDetails */;
        const v5316 = v2471.manager;
        const v5317 = stdlib.addressEq(v2812, v5316);
        stdlib.assert(v5317, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:359:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v5319 = v2471.registered;
        stdlib.assert(v5319, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:360:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'Must be registered',
          who: 'Deployer'
          });
        const v5321 = v2471.keyInfo;
        const v5322 = {
          None: 0,
          Some: 1
          }[v5321[0]];
        const v5323 = stdlib.eq(v5322, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v5324 = v5323 ? false : true;
        stdlib.assert(v5324, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:361:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'Must have key info',
          who: 'Deployer'
          });
        const v5341 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:363:11:decimal', stdlib.UInt_max, '1000'));
        ;
        switch (v5321[0]) {
          case 'None': {
            const v5529 = v5321[1];
            const v5530 = false;
            await txn3.getOutput('deregister', 'v5530', ctc18, v5530);
            const cv2471 = v2471;
            const cv2472 = v2814;
            const cv2475 = v5341;
            
            v2471 = cv2471;
            v2472 = cv2472;
            v2475 = cv2475;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v5539 = v5321[1];
            const v5540 = true;
            await txn3.getOutput('deregister', 'v5540', ctc18, v5540);
            null;
            const v5555 = stdlib.sub(v5341, stdlib.checkedBigNumberify('./wNT200.rsh:371:26:decimal', stdlib.UInt_max, '1000'));
            ;
            const v5559 = v2471.tokenAmount;
            const v5561 = {
              keyInfo: v2469,
              manager: v5316,
              registered: false,
              tokenAmount: v5559
              };
            const cv2471 = v5561;
            const cv2472 = v2814;
            const cv2475 = v5555;
            
            v2471 = cv2471;
            v2472 = cv2472;
            v2475 = cv2475;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'grant0_211': {
        const v5707 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v5979 = v5707[stdlib.checkedBigNumberify('./wNT200.rsh:406:12:spread', stdlib.UInt_max, '0')];
        const v5980 = stdlib.addressEq(v5979, v2458);
        const v5981 = v5980 ? false : true;
        stdlib.assert(v5981, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:407:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
          msg: 'ARC200: Grant zero address',
          who: 'Deployer'
          });
        const v5983 = v2471.manager;
        const v5984 = stdlib.addressEq(v5979, v5983);
        const v5985 = v5984 ? false : true;
        stdlib.assert(v5985, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:408:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
          msg: 'ARC200: Grant to manager',
          who: 'Deployer'
          });
        const v5988 = stdlib.addressEq(v2812, v5983);
        stdlib.assert(v5988, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:409:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v5991 = null;
        await txn3.getOutput('grant', 'v5991', ctc0, v5991);
        const v5998 = v2471.keyInfo;
        const v6000 = v2471.registered;
        const v6001 = v2471.tokenAmount;
        const v6002 = {
          keyInfo: v5998,
          manager: v5979,
          registered: v6000,
          tokenAmount: v6001
          };
        const cv2471 = v6002;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_211': {
        const v6120 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v6419 = null;
        await txn3.getOutput('nop', 'v6419', ctc0, v6419);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v2475;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'register0_211': {
        const v6533 = v2813[1];
        undefined /* setApiDetails */;
        const v6574 = v2471.manager;
        const v6575 = stdlib.addressEq(v2812, v6574);
        stdlib.assert(v6575, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:330:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:329:76:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v6580 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:332:11:decimal', stdlib.UInt_max, '1000'));
        ;
        const v6840 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '0')];
        const v6841 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '1')];
        const v6842 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '2')];
        const v6843 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '3')];
        const v6844 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '4')];
        const v6845 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '5')];
        const v6855 = true;
        await txn3.getOutput('register', 'v6855', ctc18, v6855);
        const v6867 = {
          selkey: v6841,
          spkey: v6842,
          votefst: v6843,
          votekd: v6845,
          votekey: v6840,
          votelst: v6844
          };
        null;
        null;
        null;
        null;
        null;
        null;
        null;
        const v6871 = stdlib.sub(v6580, stdlib.checkedBigNumberify('./wNT200.rsh:351:22:decimal', stdlib.UInt_max, '1000'));
        ;
        const v6875 = v2471.tokenAmount;
        const v6877 = ['Some', v6867];
        const v6878 = {
          keyInfo: v6877,
          manager: v6574,
          registered: true,
          tokenAmount: v6875
          };
        const cv2471 = v6878;
        const cv2472 = v2814;
        const cv2475 = v6871;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_211': {
        const v6946 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v7298 = (stdlib.le(await ctc.getBalance(), v2475) ? stdlib.checkedBigNumberify('./wNT200.rsh:386:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2475));
        const v7299 = stdlib.safeAdd(v7298, v2475);
        const v7300 = v2471.manager;
        const v7304 = stdlib.sub(v7299, v7298);
        ;
        await txn3.getOutput('touch', 'v7298', ctc12, v7298);
        const cv2471 = v2471;
        const cv2472 = v2814;
        const cv2475 = v7304;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_211': {
        const v7359 = v2813[1];
        undefined /* setApiDetails */;
        ;
        const v7725 = v7359[stdlib.checkedBigNumberify('./wNT200.rsh:283:12:spread', stdlib.UInt_max, '0')];
        const v7726 = v2471.tokenAmount;
        const v7727 = stdlib.le(v7725, v7726);
        stdlib.assert(v7727, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:284:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
          msg: 'ARC200: Withdraw amount too large',
          who: 'Deployer'
          });
        const v7730 = stdlib.cast("UInt", "UInt256", v7725, false, true);
        const v7732 = stdlib.addressEq(v2812, v2462);
        const v7733 = v7732 ? false : true;
        stdlib.assert(v7733, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v7735 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2812, ctc1), null);
        const v7736 = stdlib.fromSome(v7735, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7737 = stdlib.ge256(v7736, v7730);
        stdlib.assert(v7737, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v7746 = stdlib.safeSub256(v7736, v7730);
        await stdlib.mapSet(map0, ctc6, v2812, ctc1, v7746);
        const v7747 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2462, ctc1), null);
        const v7748 = stdlib.fromSome(v7747, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7749 = stdlib.safeAdd256(v7748, v7730);
        await stdlib.mapSet(map0, ctc6, v2462, ctc1, v7749);
        null;
        const v7754 = stdlib.sub(v2475, v7725);
        ;
        const v7755 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2812, ctc1), null);
        const v7756 = stdlib.fromSome(v7755, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await txn3.getOutput('withdraw', 'v7756', ctc1, v7756);
        const v7763 = v2471.keyInfo;
        const v7764 = v2471.manager;
        const v7765 = v2471.registered;
        const v7768 = stdlib.safeSub(v7726, v7725);
        const v7769 = {
          keyInfo: v7763,
          manager: v7764,
          registered: v7765,
          tokenAmount: v7768
          };
        const cv2471 = v7769;
        const cv2472 = v2814;
        const cv2475 = v7754;
        
        v2471 = cv2471;
        v2472 = cv2472;
        v2475 = cv2475;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _arc200_approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc13,
    arc200_transfer0_211: ctc13,
    arc200_transferFrom0_211: ctc14,
    createAllowanceBox0_211: ctc15,
    createBalanceBox0_211: ctc16,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc16,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2572 = ctc.selfAddress();
  const v2574 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:253:50:application call to [unknown function] (defined at: ./wNT200.rsh:253:50:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_approve0_211" (defined at: ./wNT200.rsh:253:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v2575 = v2574[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2580 = stdlib.addressEq(v2572, v2458);
  const v2581 = v2580 ? false : true;
  stdlib.assert(v2581, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:253:50:application call to [unknown function] (defined at: ./wNT200.rsh:253:50:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_approve0_211" (defined at: ./wNT200.rsh:253:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v2583 = stdlib.addressEq(v2575, v2458);
  const v2584 = v2583 ? false : true;
  stdlib.assert(v2584, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:246:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:253:50:application call to [unknown function] (defined at: ./wNT200.rsh:253:50:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_approve0_211" (defined at: ./wNT200.rsh:253:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v2593 = ['arc200_approve0_211', v2574];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2593],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:253:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v2865 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '0')];
          const v2866 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '1')];
          const v2876 = [v2812, v2865];
          await stdlib.simMapSet(sim_r, 1, ctc15, v2876, ctc1, v2866);
          null;
          const v2878 = true;
          const v2879 = await txn1.getOutput('arc200_approve', 'v2878', ctc11, v2878);
          
          const v11206 = v2471;
          const v11208 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v2865 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '0')];
      const v2866 = v2816[stdlib.checkedBigNumberify('./wNT200.rsh:253:12:spread', stdlib.UInt_max, '1')];
      const v2868 = stdlib.addressEq(v2812, v2458);
      const v2869 = v2868 ? false : true;
      stdlib.assert(v2869, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:256:15:application call to [unknown function] (defined at: ./wNT200.rsh:256:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v2871 = stdlib.addressEq(v2865, v2458);
      const v2872 = v2871 ? false : true;
      stdlib.assert(v2872, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:246:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:254:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:244:56:function exp)', 'at ./wNT200.rsh:256:15:application call to [unknown function] (defined at: ./wNT200.rsh:256:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v2876 = [v2812, v2865];
      await stdlib.mapSet(map1, ctc15, v2876, ctc1, v2866);
      null;
      const v2878 = true;
      const v2879 = await txn1.getOutput('arc200_approve', 'v2878', ctc11, v2878);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v2816, v2879), {
          at: './wNT200.rsh:253:13:application',
          fs: ['at ./wNT200.rsh:253:13:application call to [unknown function] (defined at: ./wNT200.rsh:253:13:function exp)', 'at ./wNT200.rsh:258:14:application call to "k" (defined at: ./wNT200.rsh:256:15:function exp)', 'at ./wNT200.rsh:256:15:application call to [unknown function] (defined at: ./wNT200.rsh:256:15:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v11206 = v2471;
      const v11208 = v2475;
      return;
      
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc13,
    arc200_transfer0_211: ctc13,
    arc200_transferFrom0_211: ctc14,
    createAllowanceBox0_211: ctc15,
    createBalanceBox0_211: ctc16,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc16,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2515 = ctc.selfAddress();
  const v2517 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:206:46:application call to [unknown function] (defined at: ./wNT200.rsh:206:46:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transfer0_211" (defined at: ./wNT200.rsh:206:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v2518 = v2517[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2519 = v2517[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2523 = stdlib.addressEq(v2515, v2518);
  const v2524 = v2523 ? false : true;
  stdlib.assert(v2524, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:206:46:application call to [unknown function] (defined at: ./wNT200.rsh:206:46:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transfer0_211" (defined at: ./wNT200.rsh:206:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transfer'
    });
  const v2526 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2515, ctc1), null);
  const v2527 = stdlib.fromSome(v2526, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2528 = stdlib.ge256(v2527, v2519);
  stdlib.assert(v2528, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:206:46:application call to [unknown function] (defined at: ./wNT200.rsh:206:46:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transfer0_211" (defined at: ./wNT200.rsh:206:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v2537 = ['arc200_transfer0_211', v2517];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2537],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:206:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v3301 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '0')];
          const v3302 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '1')];
          const v3307 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2812, ctc1), null);
          const v3308 = stdlib.fromSome(v3307, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3313 = true;
          const v3314 = await txn1.getOutput('arc200_transfer', 'v3313', ctc11, v3313);
          
          const v3325 = stdlib.safeSub256(v3308, v3302);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2812, ctc1, v3325);
          const v3326 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3301, ctc1), null);
          const v3327 = stdlib.fromSome(v3326, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3328 = stdlib.safeAdd256(v3327, v3302);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3301, ctc1, v3328);
          null;
          const v11248 = v2471;
          const v11250 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v3301 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '0')];
      const v3302 = v3229[stdlib.checkedBigNumberify('./wNT200.rsh:206:12:spread', stdlib.UInt_max, '1')];
      const v3304 = stdlib.addressEq(v2812, v3301);
      const v3305 = v3304 ? false : true;
      stdlib.assert(v3305, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:209:15:application call to [unknown function] (defined at: ./wNT200.rsh:209:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transfer'
        });
      const v3307 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2812, ctc1), null);
      const v3308 = stdlib.fromSome(v3307, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3309 = stdlib.ge256(v3308, v3302);
      stdlib.assert(v3309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:207:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:209:15:application call to [unknown function] (defined at: ./wNT200.rsh:209:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v3313 = true;
      const v3314 = await txn1.getOutput('arc200_transfer', 'v3313', ctc11, v3313);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v3229, v3314), {
          at: './wNT200.rsh:206:13:application',
          fs: ['at ./wNT200.rsh:206:13:application call to [unknown function] (defined at: ./wNT200.rsh:206:13:function exp)', 'at ./wNT200.rsh:210:14:application call to "k" (defined at: ./wNT200.rsh:209:15:function exp)', 'at ./wNT200.rsh:209:15:application call to [unknown function] (defined at: ./wNT200.rsh:209:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v3325 = stdlib.safeSub256(v3308, v3302);
      await stdlib.mapSet(map0, ctc3, v2812, ctc1, v3325);
      const v3326 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3301, ctc1), null);
      const v3327 = stdlib.fromSome(v3326, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3328 = stdlib.safeAdd256(v3327, v3302);
      await stdlib.mapSet(map0, ctc3, v3301, ctc1, v3328);
      null;
      const v11248 = v2471;
      const v11250 = v2475;
      return;
      
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc15,
    arc200_transfer0_211: ctc15,
    arc200_transferFrom0_211: ctc13,
    createAllowanceBox0_211: ctc14,
    createBalanceBox0_211: ctc16,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc16,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2539 = ctc.selfAddress();
  const v2541 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:233:57:application call to [unknown function] (defined at: ./wNT200.rsh:233:57:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transferFrom0_211" (defined at: ./wNT200.rsh:233:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v2542 = v2541[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2543 = v2541[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2544 = v2541[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2549 = stdlib.addressEq(v2542, v2543);
  const v2550 = v2549 ? false : true;
  stdlib.assert(v2550, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:218:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:233:57:application call to [unknown function] (defined at: ./wNT200.rsh:233:57:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transferFrom0_211" (defined at: ./wNT200.rsh:233:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transferFrom'
    });
  const v2552 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2542, ctc1), null);
  const v2553 = stdlib.fromSome(v2552, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2554 = stdlib.ge256(v2553, v2544);
  stdlib.assert(v2554, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:219:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:233:57:application call to [unknown function] (defined at: ./wNT200.rsh:233:57:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transferFrom0_211" (defined at: ./wNT200.rsh:233:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v2556 = [v2542, v2539];
  const v2557 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v2556, ctc1), null);
  const v2558 = stdlib.fromSome(v2557, stdlib.checkedBigNumberify('./wNT200.rsh:163:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2559 = stdlib.ge256(v2558, v2544);
  stdlib.assert(v2559, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:223:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:233:57:application call to [unknown function] (defined at: ./wNT200.rsh:233:57:function exp)', 'at ./wNT200.rsh:146:31:application call to "runarc200_transferFrom0_211" (defined at: ./wNT200.rsh:233:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v2570 = ['arc200_transferFrom0_211', v2541];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2570],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:233:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v3745 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '0')];
          const v3746 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '1')];
          const v3747 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '2')];
          const v3752 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3745, ctc1), null);
          const v3753 = stdlib.fromSome(v3752, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3756 = [v3745, v2812];
          const v3757 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v3756, ctc1), null);
          const v3758 = stdlib.fromSome(v3757, stdlib.checkedBigNumberify('./wNT200.rsh:163:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3768 = stdlib.safeSub256(v3753, v3747);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3745, ctc1, v3768);
          const v3769 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3746, ctc1), null);
          const v3770 = stdlib.fromSome(v3769, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3771 = stdlib.safeAdd256(v3770, v3747);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3746, ctc1, v3771);
          null;
          const v3776 = stdlib.safeSub256(v3758, v3747);
          await stdlib.simMapSet(sim_r, 1, ctc14, v3756, ctc1, v3776);
          null;
          const v3779 = true;
          const v3780 = await txn1.getOutput('arc200_transferFrom', 'v3779', ctc11, v3779);
          
          const v11290 = v2471;
          const v11292 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v3745 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '0')];
      const v3746 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '1')];
      const v3747 = v3642[stdlib.checkedBigNumberify('./wNT200.rsh:233:12:spread', stdlib.UInt_max, '2')];
      const v3749 = stdlib.addressEq(v3745, v3746);
      const v3750 = v3749 ? false : true;
      stdlib.assert(v3750, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:218:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transferFrom'
        });
      const v3752 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3745, ctc1), null);
      const v3753 = stdlib.fromSome(v3752, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3754 = stdlib.ge256(v3753, v3747);
      stdlib.assert(v3754, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:219:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v3756 = [v3745, v2812];
      const v3757 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3756, ctc1), null);
      const v3758 = stdlib.fromSome(v3757, stdlib.checkedBigNumberify('./wNT200.rsh:163:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3759 = stdlib.ge256(v3758, v3747);
      stdlib.assert(v3759, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:223:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:234:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:217:64:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v3768 = stdlib.safeSub256(v3753, v3747);
      await stdlib.mapSet(map0, ctc3, v3745, ctc1, v3768);
      const v3769 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3746, ctc1), null);
      const v3770 = stdlib.fromSome(v3769, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3771 = stdlib.safeAdd256(v3770, v3747);
      await stdlib.mapSet(map0, ctc3, v3746, ctc1, v3771);
      null;
      const v3776 = stdlib.safeSub256(v3758, v3747);
      await stdlib.mapSet(map1, ctc14, v3756, ctc1, v3776);
      null;
      const v3779 = true;
      const v3780 = await txn1.getOutput('arc200_transferFrom', 'v3779', ctc11, v3779);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v3642, v3780), {
          at: './wNT200.rsh:233:13:application',
          fs: ['at ./wNT200.rsh:233:13:application call to [unknown function] (defined at: ./wNT200.rsh:233:13:function exp)', 'at ./wNT200.rsh:238:14:application call to "k" (defined at: ./wNT200.rsh:236:15:function exp)', 'at ./wNT200.rsh:236:15:application call to [unknown function] (defined at: ./wNT200.rsh:236:15:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v11290 = v2471;
      const v11292 = v2475;
      return;
      
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createAllowanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createAllowanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createAllowanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc13,
    createBalanceBox0_211: ctc16,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc16,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2660 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:314:52:application call to [unknown function] (defined at: ./wNT200.rsh:314:52:function exp)', 'at ./wNT200.rsh:146:31:application call to "runcreateAllowanceBox0_211" (defined at: ./wNT200.rsh:314:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'createAllowanceBox'
    });
  const v2661 = v2660[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2662 = v2660[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2665 = [v2661, v2662];
  const v2666 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2665, ctc1), null);
  const v2667 = {
    None: 0,
    Some: 1
    }[v2666[0]];
  const v2668 = stdlib.eq(v2667, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2668, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:315:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:314:52:application call to [unknown function] (defined at: ./wNT200.rsh:314:52:function exp)', 'at ./wNT200.rsh:146:31:application call to "runcreateAllowanceBox0_211" (defined at: ./wNT200.rsh:314:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Allowance box already exists',
    who: 'createAllowanceBox'
    });
  const v2677 = ['createAllowanceBox0_211', v2660];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2677],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:314:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createAllowanceBox"
            });
          ;
          const v4203 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '0')];
          const v4204 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '1')];
          const v4205 = [v4203, v4204];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v4205, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc13, v4205, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:321:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4213 = true;
          const v4214 = await txn1.getOutput('createAllowanceBox', 'v4213', ctc11, v4213);
          
          const v11332 = v2471;
          const v11334 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v4203 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '0')];
      const v4204 = v4055[stdlib.checkedBigNumberify('./wNT200.rsh:314:12:spread', stdlib.UInt_max, '1')];
      const v4205 = [v4203, v4204];
      const v4206 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v4205, ctc1), null);
      const v4207 = {
        None: 0,
        Some: 1
        }[v4206[0]];
      const v4208 = stdlib.eq(v4207, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4208, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:315:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:320:15:application call to [unknown function] (defined at: ./wNT200.rsh:320:15:function exp)'],
        msg: 'ARC200: Allowance box already exists',
        who: 'createAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc13, v4205, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:321:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4213 = true;
      const v4214 = await txn1.getOutput('createAllowanceBox', 'v4213', ctc11, v4213);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v4055, v4214), {
          at: './wNT200.rsh:314:13:application',
          fs: ['at ./wNT200.rsh:314:13:application call to [unknown function] (defined at: ./wNT200.rsh:314:13:function exp)', 'at ./wNT200.rsh:322:14:application call to "k" (defined at: ./wNT200.rsh:320:15:function exp)', 'at ./wNT200.rsh:320:15:application call to [unknown function] (defined at: ./wNT200.rsh:320:15:function exp)'],
          msg: 'out',
          who: 'createAllowanceBox'
          });
        }
      else {
        }
      
      const v11332 = v2471;
      const v11334 = v2475;
      return;
      
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createBalanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc13,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc13,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2644 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:302:40:application call to [unknown function] (defined at: ./wNT200.rsh:302:40:function exp)', 'at ./wNT200.rsh:146:31:application call to "runcreateBalanceBox0_211" (defined at: ./wNT200.rsh:302:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'createBalanceBox'
    });
  const v2645 = v2644[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2645, ctc1), null);
  const v2648 = {
    None: 0,
    Some: 1
    }[v2647[0]];
  const v2649 = stdlib.eq(v2648, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2649, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:302:40:application call to [unknown function] (defined at: ./wNT200.rsh:302:40:function exp)', 'at ./wNT200.rsh:146:31:application call to "runcreateBalanceBox0_211" (defined at: ./wNT200.rsh:302:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Balance box already exists',
    who: 'createBalanceBox'
    });
  const v2656 = ['createBalanceBox0_211', v2644];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2656],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:302:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createBalanceBox"
            });
          ;
          const v4636 = v4468[stdlib.checkedBigNumberify('./wNT200.rsh:302:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4636, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4636, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:306:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4642 = true;
          const v4643 = await txn1.getOutput('createBalanceBox', 'v4642', ctc11, v4642);
          
          const v11374 = v2471;
          const v11376 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v4636 = v4468[stdlib.checkedBigNumberify('./wNT200.rsh:302:12:spread', stdlib.UInt_max, '0')];
      const v4637 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4636, ctc1), null);
      const v4638 = {
        None: 0,
        Some: 1
        }[v4637[0]];
      const v4639 = stdlib.eq(v4638, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4639, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:305:15:application call to [unknown function] (defined at: ./wNT200.rsh:305:15:function exp)'],
        msg: 'ARC200: Balance box already exists',
        who: 'createBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v4636, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:306:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4642 = true;
      const v4643 = await txn1.getOutput('createBalanceBox', 'v4642', ctc11, v4642);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v4468, v4643), {
          at: './wNT200.rsh:302:13:application',
          fs: ['at ./wNT200.rsh:302:13:application call to [unknown function] (defined at: ./wNT200.rsh:302:13:function exp)', 'at ./wNT200.rsh:307:14:application call to "k" (defined at: ./wNT200.rsh:305:15:function exp)', 'at ./wNT200.rsh:305:15:application call to [unknown function] (defined at: ./wNT200.rsh:305:15:function exp)'],
          msg: 'out',
          who: 'createBalanceBox'
          });
        }
      else {
        }
      
      const v11374 = v2471;
      const v11376 = v2475;
      return;
      
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc13,
    deregister0_211: ctc18,
    grant0_211: ctc17,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2595 = ctc.selfAddress();
  const v2597 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to "rundeposit0_211" (defined at: ./wNT200.rsh:265:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v2598 = v2597[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2601 = stdlib.cast("UInt", "UInt256", v2598, false, true);
  const v2603 = stdlib.addressEq(v2462, v2595);
  const v2604 = v2603 ? false : true;
  stdlib.assert(v2604, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to "rundeposit0_211" (defined at: ./wNT200.rsh:265:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'deposit'
    });
  const v2606 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2462, ctc1), null);
  const v2607 = stdlib.fromSome(v2606, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2608 = stdlib.ge256(v2607, v2601);
  stdlib.assert(v2608, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to "rundeposit0_211" (defined at: ./wNT200.rsh:265:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'deposit'
    });
  const v2615 = ['deposit0_211', v2597];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2615],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v2598, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v4891 = v4881[stdlib.checkedBigNumberify('./wNT200.rsh:265:12:spread', stdlib.UInt_max, '0')];
          const v4893 = stdlib.cast("UInt", "UInt256", v4891, false, true);
          const v4898 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2462, ctc1), null);
          const v4899 = stdlib.fromSome(v4898, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4928 = stdlib.add(v2475, v4891);
          sim_r.txns.push({
            amt: v4891,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5082 = stdlib.safeSub256(v4899, v4893);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2462, ctc1, v5082);
          const v5083 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2812, ctc1), null);
          const v5084 = stdlib.fromSome(v5083, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5085 = stdlib.safeAdd256(v5084, v4893);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2812, ctc1, v5085);
          null;
          const v5088 = v5085;
          const v5089 = await txn1.getOutput('deposit', 'v5088', ctc1, v5088);
          
          const v5095 = v2471.keyInfo;
          const v5096 = v2471.manager;
          const v5097 = v2471.registered;
          const v5098 = v2471.tokenAmount;
          const v5100 = stdlib.safeAdd(v5098, v4891);
          const v5101 = {
            keyInfo: v5095,
            manager: v5096,
            registered: v5097,
            tokenAmount: v5100
            };
          const v11416 = v5101;
          const v11418 = v4928;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      undefined /* setApiDetails */;
      const v4891 = v4881[stdlib.checkedBigNumberify('./wNT200.rsh:265:12:spread', stdlib.UInt_max, '0')];
      const v4893 = stdlib.cast("UInt", "UInt256", v4891, false, true);
      const v4895 = stdlib.addressEq(v2462, v2812);
      const v4896 = v4895 ? false : true;
      stdlib.assert(v4896, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'deposit'
        });
      const v4898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2462, ctc1), null);
      const v4899 = stdlib.fromSome(v4898, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4900 = stdlib.ge256(v4899, v4893);
      stdlib.assert(v4900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:266:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:265:33:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:265:33:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'deposit'
        });
      const v4928 = stdlib.add(v2475, v4891);
      ;
      const v5082 = stdlib.safeSub256(v4899, v4893);
      await stdlib.mapSet(map0, ctc3, v2462, ctc1, v5082);
      const v5083 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2812, ctc1), null);
      const v5084 = stdlib.fromSome(v5083, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5085 = stdlib.safeAdd256(v5084, v4893);
      await stdlib.mapSet(map0, ctc3, v2812, ctc1, v5085);
      null;
      const v5088 = v5085;
      const v5089 = await txn1.getOutput('deposit', 'v5088', ctc1, v5088);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v4881, v5089), {
          at: './wNT200.rsh:265:13:application',
          fs: ['at ./wNT200.rsh:265:13:application call to [unknown function] (defined at: ./wNT200.rsh:265:13:function exp)', 'at ./wNT200.rsh:271:14:application call to "k" (defined at: ./wNT200.rsh:269:15:function exp)', 'at ./wNT200.rsh:269:15:application call to [unknown function] (defined at: ./wNT200.rsh:269:15:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v5095 = v2471.keyInfo;
      const v5096 = v2471.manager;
      const v5097 = v2471.registered;
      const v5098 = v2471.tokenAmount;
      const v5100 = stdlib.safeAdd(v5098, v4891);
      const v5101 = {
        keyInfo: v5095,
        manager: v5096,
        registered: v5097,
        tokenAmount: v5100
        };
      const v11416 = v5101;
      const v11418 = v4928;
      return;
      
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deregister3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc8]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc18,
    deregister0_211: ctc13,
    grant0_211: ctc17,
    nop0_211: ctc13,
    register0_211: ctc19,
    touch0_211: ctc13,
    withdraw0_211: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2714 = ctc.selfAddress();
  const v2716 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to "runderegister0_211" (defined at: ./wNT200.rsh:358:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'deregister'
    });
  const v2717 = v2471.manager;
  const v2718 = stdlib.addressEq(v2714, v2717);
  stdlib.assert(v2718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:359:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to "runderegister0_211" (defined at: ./wNT200.rsh:358:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'deregister'
    });
  const v2720 = v2471.registered;
  stdlib.assert(v2720, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:360:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to "runderegister0_211" (defined at: ./wNT200.rsh:358:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'Must be registered',
    who: 'deregister'
    });
  const v2722 = v2471.keyInfo;
  const v2723 = {
    None: 0,
    Some: 1
    }[v2722[0]];
  const v2724 = stdlib.eq(v2723, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  const v2725 = v2724 ? false : true;
  stdlib.assert(v2725, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:361:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to "runderegister0_211" (defined at: ./wNT200.rsh:358:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'Must have key info',
    who: 'deregister'
    });
  const v2730 = ['deregister0_211', v2716];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2730],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:363:11:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deregister"
            });
          const v5316 = v2471.manager;
          const v5321 = v2471.keyInfo;
          const v5341 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:363:11:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./wNT200.rsh:363:11:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v5321[0]) {
            case 'None': {
              const v5529 = v5321[1];
              const v5530 = false;
              const v5531 = await txn1.getOutput('deregister', 'v5530', ctc11, v5530);
              
              const v11458 = v2471;
              const v11460 = v5341;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v5539 = v5321[1];
              const v5540 = true;
              const v5541 = await txn1.getOutput('deregister', 'v5540', ctc11, v5540);
              
              null;
              const v5555 = stdlib.sub(v5341, stdlib.checkedBigNumberify('./wNT200.rsh:371:26:decimal', stdlib.UInt_max, '1000'));
              sim_r.txns.push({
                kind: 'from',
                to: v2812,
                tok: undefined /* Nothing */
                });
              const v5559 = v2471.tokenAmount;
              const v5561 = {
                keyInfo: v2469,
                manager: v5316,
                registered: false,
                tokenAmount: v5559
                };
              const v11461 = v5561;
              const v11463 = v5555;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      undefined /* setApiDetails */;
      const v5316 = v2471.manager;
      const v5317 = stdlib.addressEq(v2812, v5316);
      stdlib.assert(v5317, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:359:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'deregister'
        });
      const v5319 = v2471.registered;
      stdlib.assert(v5319, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:360:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'Must be registered',
        who: 'deregister'
        });
      const v5321 = v2471.keyInfo;
      const v5322 = {
        None: 0,
        Some: 1
        }[v5321[0]];
      const v5323 = stdlib.eq(v5322, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      const v5324 = v5323 ? false : true;
      stdlib.assert(v5324, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:361:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:358:30:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:358:30:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'Must have key info',
        who: 'deregister'
        });
      const v5341 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:363:11:decimal', stdlib.UInt_max, '1000'));
      ;
      switch (v5321[0]) {
        case 'None': {
          const v5529 = v5321[1];
          const v5530 = false;
          const v5531 = await txn1.getOutput('deregister', 'v5530', ctc11, v5530);
          if (v1673) {
            stdlib.protect(ctc0, await interact.out(v5294, v5531), {
              at: './wNT200.rsh:358:13:application',
              fs: ['at ./wNT200.rsh:358:13:application call to [unknown function] (defined at: ./wNT200.rsh:358:13:function exp)', 'at ./wNT200.rsh:374:18:application call to "k" (defined at: ./wNT200.rsh:364:15:function exp)', 'at ./wNT200.rsh:364:15:application call to [unknown function] (defined at: ./wNT200.rsh:364:15:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          const v11458 = v2471;
          const v11460 = v5341;
          return;
          
          break;
          }
        case 'Some': {
          const v5539 = v5321[1];
          const v5540 = true;
          const v5541 = await txn1.getOutput('deregister', 'v5540', ctc11, v5540);
          if (v1673) {
            stdlib.protect(ctc0, await interact.out(v5294, v5541), {
              at: './wNT200.rsh:358:13:application',
              fs: ['at ./wNT200.rsh:358:13:application call to [unknown function] (defined at: ./wNT200.rsh:358:13:function exp)', 'at ./wNT200.rsh:368:18:application call to "k" (defined at: ./wNT200.rsh:364:15:function exp)', 'at ./wNT200.rsh:364:15:application call to [unknown function] (defined at: ./wNT200.rsh:364:15:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          null;
          const v5555 = stdlib.sub(v5341, stdlib.checkedBigNumberify('./wNT200.rsh:371:26:decimal', stdlib.UInt_max, '1000'));
          ;
          const v5559 = v2471.tokenAmount;
          const v5561 = {
            keyInfo: v2469,
            manager: v5316,
            registered: false,
            tokenAmount: v5559
            };
          const v11461 = v5561;
          const v11463 = v5555;
          return;
          
          break;
          }
        }
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc13,
    deposit0_211: ctc17,
    deregister0_211: ctc18,
    grant0_211: ctc13,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2748 = ctc.selfAddress();
  const v2750 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:406:29:application call to [unknown function] (defined at: ./wNT200.rsh:406:29:function exp)', 'at ./wNT200.rsh:146:31:application call to "rungrant0_211" (defined at: ./wNT200.rsh:406:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2751 = v2750[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2753 = stdlib.addressEq(v2751, v2458);
  const v2754 = v2753 ? false : true;
  stdlib.assert(v2754, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:407:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:406:29:application call to [unknown function] (defined at: ./wNT200.rsh:406:29:function exp)', 'at ./wNT200.rsh:146:31:application call to "rungrant0_211" (defined at: ./wNT200.rsh:406:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Grant zero address',
    who: 'grant'
    });
  const v2756 = v2471.manager;
  const v2757 = stdlib.addressEq(v2751, v2756);
  const v2758 = v2757 ? false : true;
  stdlib.assert(v2758, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:408:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:406:29:application call to [unknown function] (defined at: ./wNT200.rsh:406:29:function exp)', 'at ./wNT200.rsh:146:31:application call to "rungrant0_211" (defined at: ./wNT200.rsh:406:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Grant to manager',
    who: 'grant'
    });
  const v2761 = stdlib.addressEq(v2748, v2756);
  stdlib.assert(v2761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:409:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:406:29:application call to [unknown function] (defined at: ./wNT200.rsh:406:29:function exp)', 'at ./wNT200.rsh:146:31:application call to "rungrant0_211" (defined at: ./wNT200.rsh:406:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'grant'
    });
  const v2768 = ['grant0_211', v2750];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2768],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:406:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v5979 = v5707[stdlib.checkedBigNumberify('./wNT200.rsh:406:12:spread', stdlib.UInt_max, '0')];
          const v5991 = null;
          const v5992 = await txn1.getOutput('grant', 'v5991', ctc0, v5991);
          
          const v5998 = v2471.keyInfo;
          const v6000 = v2471.registered;
          const v6001 = v2471.tokenAmount;
          const v6002 = {
            keyInfo: v5998,
            manager: v5979,
            registered: v6000,
            tokenAmount: v6001
            };
          const v11503 = v6002;
          const v11505 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v5979 = v5707[stdlib.checkedBigNumberify('./wNT200.rsh:406:12:spread', stdlib.UInt_max, '0')];
      const v5980 = stdlib.addressEq(v5979, v2458);
      const v5981 = v5980 ? false : true;
      stdlib.assert(v5981, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:407:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
        msg: 'ARC200: Grant zero address',
        who: 'grant'
        });
      const v5983 = v2471.manager;
      const v5984 = stdlib.addressEq(v5979, v5983);
      const v5985 = v5984 ? false : true;
      stdlib.assert(v5985, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:408:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
        msg: 'ARC200: Grant to manager',
        who: 'grant'
        });
      const v5988 = stdlib.addressEq(v2812, v5983);
      stdlib.assert(v5988, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:409:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'grant'
        });
      const v5991 = null;
      const v5992 = await txn1.getOutput('grant', 'v5991', ctc0, v5991);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v5707, v5992), {
          at: './wNT200.rsh:406:13:application',
          fs: ['at ./wNT200.rsh:406:13:application call to [unknown function] (defined at: ./wNT200.rsh:406:13:function exp)', 'at ./wNT200.rsh:412:14:application call to "k" (defined at: ./wNT200.rsh:411:15:function exp)', 'at ./wNT200.rsh:411:15:application call to [unknown function] (defined at: ./wNT200.rsh:411:15:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v5998 = v2471.keyInfo;
      const v6000 = v2471.registered;
      const v6001 = v2471.tokenAmount;
      const v6002 = {
        keyInfo: v5998,
        manager: v5979,
        registered: v6000,
        tokenAmount: v6001
        };
      const v11503 = v6002;
      const v11505 = v2475;
      return;
      
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc8]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc18,
    deregister0_211: ctc13,
    grant0_211: ctc17,
    nop0_211: ctc13,
    register0_211: ctc19,
    touch0_211: ctc13,
    withdraw0_211: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2742 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:395:23:application call to [unknown function] (defined at: ./wNT200.rsh:395:23:function exp)', 'at ./wNT200.rsh:146:31:application call to "runnop0_211" (defined at: ./wNT200.rsh:395:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v2746 = ['nop0_211', v2742];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2746],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:395:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v6419 = null;
          const v6420 = await txn1.getOutput('nop', 'v6419', ctc0, v6419);
          
          const v11545 = v2471;
          const v11547 = v2475;
          sim_r.isHalt = false;
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v6419 = null;
      const v6420 = await txn1.getOutput('nop', 'v6419', ctc0, v6419);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v6120, v6420), {
          at: './wNT200.rsh:395:13:application',
          fs: ['at ./wNT200.rsh:395:13:application call to [unknown function] (defined at: ./wNT200.rsh:395:13:function exp)', 'at ./wNT200.rsh:398:14:application call to "k" (defined at: ./wNT200.rsh:397:15:function exp)', 'at ./wNT200.rsh:397:15:application call to [unknown function] (defined at: ./wNT200.rsh:397:15:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v11545 = v2471;
      const v11547 = v2475;
      return;
      
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc8]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc18,
    deregister0_211: ctc19,
    grant0_211: ctc17,
    nop0_211: ctc19,
    register0_211: ctc13,
    touch0_211: ctc19,
    withdraw0_211: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2679 = ctc.selfAddress();
  const v2681 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:329:76:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to "runregister0_211" (defined at: ./wNT200.rsh:329:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v2694 = v2471.manager;
  const v2695 = stdlib.addressEq(v2679, v2694);
  stdlib.assert(v2695, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:330:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:329:76:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to "runregister0_211" (defined at: ./wNT200.rsh:329:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'register'
    });
  const v2712 = ['register0_211', v2681];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2712],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:332:11:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v6574 = v2471.manager;
          const v6580 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:332:11:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./wNT200.rsh:332:11:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6840 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '0')];
          const v6841 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '1')];
          const v6842 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '2')];
          const v6843 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '3')];
          const v6844 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '4')];
          const v6845 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '5')];
          const v6855 = true;
          const v6856 = await txn1.getOutput('register', 'v6855', ctc11, v6855);
          
          const v6867 = {
            selkey: v6841,
            spkey: v6842,
            votefst: v6843,
            votekd: v6845,
            votekey: v6840,
            votelst: v6844
            };
          null;
          null;
          null;
          null;
          null;
          null;
          null;
          const v6871 = stdlib.sub(v6580, stdlib.checkedBigNumberify('./wNT200.rsh:351:22:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            kind: 'from',
            to: v2812,
            tok: undefined /* Nothing */
            });
          const v6875 = v2471.tokenAmount;
          const v6877 = ['Some', v6867];
          const v6878 = {
            keyInfo: v6877,
            manager: v6574,
            registered: true,
            tokenAmount: v6875
            };
          const v11587 = v6878;
          const v11589 = v6871;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      undefined /* setApiDetails */;
      const v6574 = v2471.manager;
      const v6575 = stdlib.addressEq(v2812, v6574);
      stdlib.assert(v6575, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:330:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:329:76:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:329:76:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'register'
        });
      const v6580 = stdlib.add(v2475, stdlib.checkedBigNumberify('./wNT200.rsh:332:11:decimal', stdlib.UInt_max, '1000'));
      ;
      const v6840 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '0')];
      const v6841 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '1')];
      const v6842 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '2')];
      const v6843 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '3')];
      const v6844 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '4')];
      const v6845 = v6533[stdlib.checkedBigNumberify('./wNT200.rsh:329:12:spread', stdlib.UInt_max, '5')];
      const v6855 = true;
      const v6856 = await txn1.getOutput('register', 'v6855', ctc11, v6855);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v6533, v6856), {
          at: './wNT200.rsh:329:13:application',
          fs: ['at ./wNT200.rsh:329:13:application call to [unknown function] (defined at: ./wNT200.rsh:329:13:function exp)', 'at ./wNT200.rsh:334:14:application call to "k" (defined at: ./wNT200.rsh:333:15:function exp)', 'at ./wNT200.rsh:333:15:application call to [unknown function] (defined at: ./wNT200.rsh:333:15:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v6867 = {
        selkey: v6841,
        spkey: v6842,
        votefst: v6843,
        votekd: v6845,
        votekey: v6840,
        votelst: v6844
        };
      null;
      null;
      null;
      null;
      null;
      null;
      null;
      const v6871 = stdlib.sub(v6580, stdlib.checkedBigNumberify('./wNT200.rsh:351:22:decimal', stdlib.UInt_max, '1000'));
      ;
      const v6875 = v2471.tokenAmount;
      const v6877 = ['Some', v6867];
      const v6878 = {
        keyInfo: v6877,
        manager: v6574,
        registered: true,
        tokenAmount: v6875
        };
      const v11587 = v6878;
      const v11589 = v6871;
      return;
      
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc8]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc18,
    deregister0_211: ctc13,
    grant0_211: ctc17,
    nop0_211: ctc13,
    register0_211: ctc19,
    touch0_211: ctc13,
    withdraw0_211: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2734 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:383:25:application call to [unknown function] (defined at: ./wNT200.rsh:383:25:function exp)', 'at ./wNT200.rsh:146:31:application call to "runtouch0_211" (defined at: ./wNT200.rsh:383:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2738 = ['touch0_211', v2734];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2738],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:383:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v7298 = (stdlib.le(await ctc.getBalance(), v2475) ? stdlib.checkedBigNumberify('./wNT200.rsh:386:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2475));
          const v7299 = stdlib.safeAdd(v7298, v2475);
          const v7300 = v2471.manager;
          const v7304 = stdlib.sub(v7299, v7298);
          sim_r.txns.push({
            kind: 'from',
            to: v7300,
            tok: undefined /* Nothing */
            });
          const v7305 = await txn1.getOutput('touch', 'v7298', ctc8, v7298);
          
          const v11629 = v2471;
          const v11631 = v7304;
          sim_r.isHalt = false;
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v7298 = (stdlib.le(await ctc.getBalance(), v2475) ? stdlib.checkedBigNumberify('./wNT200.rsh:386:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2475));
      const v7299 = stdlib.safeAdd(v7298, v2475);
      const v7300 = v2471.manager;
      const v7304 = stdlib.sub(v7299, v7298);
      ;
      const v7305 = await txn1.getOutput('touch', 'v7298', ctc8, v7298);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v6946, v7305), {
          at: './wNT200.rsh:383:13:application',
          fs: ['at ./wNT200.rsh:383:13:application call to [unknown function] (defined at: ./wNT200.rsh:383:13:function exp)', 'at ./wNT200.rsh:388:14:application call to "k" (defined at: ./wNT200.rsh:385:15:function exp)', 'at ./wNT200.rsh:385:15:application call to [unknown function] (defined at: ./wNT200.rsh:385:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v11629 = v2471;
      const v11631 = v7304;
      return;
      
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['votekey', ctc4], ['selkey', ctc4], ['spkey', ctc7], ['votefst', ctc8], ['votelst', ctc8], ['votekd', ctc8]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11,
    tokenAmount: ctc8
    });
  const ctc13 = stdlib.T_Tuple([ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc4, ctc7, ctc8, ctc8, ctc8]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_211: ctc14,
    arc200_transfer0_211: ctc14,
    arc200_transferFrom0_211: ctc15,
    createAllowanceBox0_211: ctc16,
    createBalanceBox0_211: ctc17,
    deposit0_211: ctc13,
    deregister0_211: ctc18,
    grant0_211: ctc17,
    nop0_211: ctc18,
    register0_211: ctc19,
    touch0_211: ctc18,
    withdraw0_211: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2458, v2459, v2462, v2469, v2471, v2475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8]);
  const v2617 = ctc.selfAddress();
  const v2619 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:283:34:application call to [unknown function] (defined at: ./wNT200.rsh:283:34:function exp)', 'at ./wNT200.rsh:146:31:application call to "runwithdraw0_211" (defined at: ./wNT200.rsh:283:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v2620 = v2619[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2622 = v2471.tokenAmount;
  const v2623 = stdlib.le(v2620, v2622);
  stdlib.assert(v2623, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:284:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:283:34:application call to [unknown function] (defined at: ./wNT200.rsh:283:34:function exp)', 'at ./wNT200.rsh:146:31:application call to "runwithdraw0_211" (defined at: ./wNT200.rsh:283:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Withdraw amount too large',
    who: 'withdraw'
    });
  const v2626 = stdlib.cast("UInt", "UInt256", v2620, false, true);
  const v2628 = stdlib.addressEq(v2617, v2462);
  const v2629 = v2628 ? false : true;
  stdlib.assert(v2629, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:283:34:application call to [unknown function] (defined at: ./wNT200.rsh:283:34:function exp)', 'at ./wNT200.rsh:146:31:application call to "runwithdraw0_211" (defined at: ./wNT200.rsh:283:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'withdraw'
    });
  const v2631 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2617, ctc1), null);
  const v2632 = stdlib.fromSome(v2631, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2633 = stdlib.ge256(v2632, v2626);
  stdlib.assert(v2633, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:283:34:application call to [unknown function] (defined at: ./wNT200.rsh:283:34:function exp)', 'at ./wNT200.rsh:146:31:application call to "runwithdraw0_211" (defined at: ./wNT200.rsh:283:12:function exp)', 'at ./wNT200.rsh:146:31:application call to [unknown function] (defined at: ./wNT200.rsh:146:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'withdraw'
    });
  const v2640 = ['withdraw0_211', v2619];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2462, v2469, v2471, v2475, v2640],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:283:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
      
      switch (v2813[0]) {
        case 'arc200_approve0_211': {
          const v2816 = v2813[1];
          
          break;
          }
        case 'arc200_transfer0_211': {
          const v3229 = v2813[1];
          
          break;
          }
        case 'arc200_transferFrom0_211': {
          const v3642 = v2813[1];
          
          break;
          }
        case 'createAllowanceBox0_211': {
          const v4055 = v2813[1];
          
          break;
          }
        case 'createBalanceBox0_211': {
          const v4468 = v2813[1];
          
          break;
          }
        case 'deposit0_211': {
          const v4881 = v2813[1];
          
          break;
          }
        case 'deregister0_211': {
          const v5294 = v2813[1];
          
          break;
          }
        case 'grant0_211': {
          const v5707 = v2813[1];
          
          break;
          }
        case 'nop0_211': {
          const v6120 = v2813[1];
          
          break;
          }
        case 'register0_211': {
          const v6533 = v2813[1];
          
          break;
          }
        case 'touch0_211': {
          const v6946 = v2813[1];
          
          break;
          }
        case 'withdraw0_211': {
          const v7359 = v2813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v7725 = v7359[stdlib.checkedBigNumberify('./wNT200.rsh:283:12:spread', stdlib.UInt_max, '0')];
          const v7726 = v2471.tokenAmount;
          const v7730 = stdlib.cast("UInt", "UInt256", v7725, false, true);
          const v7735 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2812, ctc1), null);
          const v7736 = stdlib.fromSome(v7735, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7746 = stdlib.safeSub256(v7736, v7730);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2812, ctc1, v7746);
          const v7747 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2462, ctc1), null);
          const v7748 = stdlib.fromSome(v7747, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7749 = stdlib.safeAdd256(v7748, v7730);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2462, ctc1, v7749);
          null;
          const v7754 = stdlib.sub(v2475, v7725);
          sim_r.txns.push({
            kind: 'from',
            to: v2812,
            tok: undefined /* Nothing */
            });
          const v7755 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2812, ctc1), null);
          const v7756 = stdlib.fromSome(v7755, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7757 = await txn1.getOutput('withdraw', 'v7756', ctc1, v7756);
          
          const v7763 = v2471.keyInfo;
          const v7764 = v2471.manager;
          const v7765 = v2471.registered;
          const v7768 = stdlib.safeSub(v7726, v7725);
          const v7769 = {
            keyInfo: v7763,
            manager: v7764,
            registered: v7765,
            tokenAmount: v7768
            };
          const v11671 = v7769;
          const v11673 = v7754;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc3, ctc10, ctc12, ctc8, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v2813], secs: v2815, time: v2814, didSend: v1673, from: v2812 } = txn1;
  switch (v2813[0]) {
    case 'arc200_approve0_211': {
      const v2816 = v2813[1];
      return;
      break;
      }
    case 'arc200_transfer0_211': {
      const v3229 = v2813[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_211': {
      const v3642 = v2813[1];
      return;
      break;
      }
    case 'createAllowanceBox0_211': {
      const v4055 = v2813[1];
      return;
      break;
      }
    case 'createBalanceBox0_211': {
      const v4468 = v2813[1];
      return;
      break;
      }
    case 'deposit0_211': {
      const v4881 = v2813[1];
      return;
      break;
      }
    case 'deregister0_211': {
      const v5294 = v2813[1];
      return;
      break;
      }
    case 'grant0_211': {
      const v5707 = v2813[1];
      return;
      break;
      }
    case 'nop0_211': {
      const v6120 = v2813[1];
      return;
      break;
      }
    case 'register0_211': {
      const v6533 = v2813[1];
      return;
      break;
      }
    case 'touch0_211': {
      const v6946 = v2813[1];
      return;
      break;
      }
    case 'withdraw0_211': {
      const v7359 = v2813[1];
      undefined /* setApiDetails */;
      ;
      const v7725 = v7359[stdlib.checkedBigNumberify('./wNT200.rsh:283:12:spread', stdlib.UInt_max, '0')];
      const v7726 = v2471.tokenAmount;
      const v7727 = stdlib.le(v7725, v7726);
      stdlib.assert(v7727, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:284:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
        msg: 'ARC200: Withdraw amount too large',
        who: 'withdraw'
        });
      const v7730 = stdlib.cast("UInt", "UInt256", v7725, false, true);
      const v7732 = stdlib.addressEq(v2812, v2462);
      const v7733 = v7732 ? false : true;
      stdlib.assert(v7733, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:196:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'withdraw'
        });
      const v7735 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2812, ctc1), null);
      const v7736 = stdlib.fromSome(v7735, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7737 = stdlib.ge256(v7736, v7730);
      stdlib.assert(v7737, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:197:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:285:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:195:50:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'withdraw'
        });
      const v7746 = stdlib.safeSub256(v7736, v7730);
      await stdlib.mapSet(map0, ctc3, v2812, ctc1, v7746);
      const v7747 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2462, ctc1), null);
      const v7748 = stdlib.fromSome(v7747, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7749 = stdlib.safeAdd256(v7748, v7730);
      await stdlib.mapSet(map0, ctc3, v2462, ctc1, v7749);
      null;
      const v7754 = stdlib.sub(v2475, v7725);
      ;
      const v7755 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2812, ctc1), null);
      const v7756 = stdlib.fromSome(v7755, stdlib.checkedBigNumberify('./wNT200.rsh:150:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7757 = await txn1.getOutput('withdraw', 'v7756', ctc1, v7756);
      if (v1673) {
        stdlib.protect(ctc0, await interact.out(v7359, v7757), {
          at: './wNT200.rsh:283:13:application',
          fs: ['at ./wNT200.rsh:283:13:application call to [unknown function] (defined at: ./wNT200.rsh:283:13:function exp)', 'at ./wNT200.rsh:290:14:application call to "k" (defined at: ./wNT200.rsh:287:15:function exp)', 'at ./wNT200.rsh:287:15:application call to [unknown function] (defined at: ./wNT200.rsh:287:15:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v7763 = v2471.keyInfo;
      const v7764 = v2471.manager;
      const v7765 = v2471.registered;
      const v7768 = stdlib.safeSub(v7726, v7725);
      const v7769 = {
        keyInfo: v7763,
        manager: v7764,
        registered: v7765,
        tokenAmount: v7768
        };
      const v11671 = v7769;
      const v11673 = v7754;
      return;
      
      break;
      }
    }
  
  
  };
export async function arc200_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _createAllowanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _createBalanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deposit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deregister(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deregister expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deregister expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deregister3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _nop3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,(byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `createAllowanceBox(address,address)byte`, `createBalanceBox(address)byte`, `deposit(uint64)uint256`, `deregister()byte`, `grant(address)void`, `nop()void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `touch()uint64`, `withdraw(uint64)uint256`],
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `circulatingSupply()uint256`, `hasBox((byte,byte[64]))byte`, `manager()address`, `state()(uint64,byte,(byte,byte[152]))`, `supportsInterface(byte[4])byte`],
    sigs: [`_reachp_0((uint64,address,(byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `circulatingSupply()uint256`, `createAllowanceBox(address,address)byte`, `createBalanceBox(address)byte`, `deposit(uint64)uint256`, `deregister()byte`, `grant(address)void`, `hasBox((byte,byte[64]))byte`, `manager()address`, `nop()void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `state()(uint64,byte,(byte,byte[152]))`, `supportsInterface(byte[4])byte`, `touch()uint64`, `withdraw(uint64)uint256`]
    },
  GlobalNumByteSlice: 5,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSAOAAEDCNTeAegHxNsBGJABWLoBeAUCJgkBAAAIAAAAAAAAAAEBAQR5g8NcAQIBAyD//////////////////////////////////////////wQZafhlMRhBC2UpZEkiWzUBJVs1AihkK2RQJwVkUCcGZFCCGQQCIyZ8BLVCISUELX18KgQ8KlehBFAuU0QEUh4tYQRTWcTFBFh1n6IEhOwT1QRlIlHRBGV9E+wEZdjoCQRnQ0AxBGjPmM4EefWwjQSC3Ry6BILlc8QEo1nkdQS2rholBLuzGfMESpaPjwTXYQFSBOyZYEEE2nAluQT7brVzNhoAjhkLHQrFCwgKjAp6DHYLMQxMCtoMcwrdCyYMSQyuCykLBQrSCxUK4Aq4CuYMTwrjCvgMfgA0C1cAIDUNNAtXICA1DDEANBQTRDQNNBQTRCEGKjEANA1QUAE0DIgMmCcIMQBQNA1QNAxQsCM1C4AIAAAAAAAACz40CxZRBwhQsDQLgQeQFlEHCDUEMgY1DzQUNBNQNBJQNBFQNBBQNA4WUCQyBjUCNQEoSwFXAH9nK0sBV39/ZycFSwFX/n9nJwZMgf0CgU5YZyk0ARY0AhZQZzEZIhJEiAyWNANAAAqABBUffHU0BFCwI0M0C1cAIDUNNAtXICA1DDEANA0TRDIDKTIDKDEAUIgL4ogL+Ek1FTQMp0QjNQuACAAAAAAAAAzxNAsWUQcIULA0C4EHkBZRBwg1BCEEKDEAUDQVNAyhiAv1iAuyIQQoNA1QMgMpMgMoNA1QiAuViAurNAygiAvXiAuUJwQxAFA0DVA0DFCwMgY1D0L/GTQLVwAgNRU0C1cgIDUNNAtXQCA1DDQVNA0TRDIDKTIDKDQVUIgLT4gLZUk1FzQMp0Q0FTEAUDUWMgMpMgMqNBZQAYgLMYgLR0k1CzQMp0QhBCg0FVA0FzQMoYgLZIgLISEEKDQNUDIDKTIDKDQNUIgLBIgLGjQMoIgLRogLAycENBVQNA1QNAxQsDQLNAyhiAsvNQ0hBio0FlABNA2ICuEnCDQVUDEAUDQNULAjNQuACAAAAAAAAA7DNAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/kY0C1cAIDQLVyAgUDUMKTIDKjQMUAGICosiVSISRCEGKjQMUAEyA4gKhSM1C4AIAAAAAAAAEHU0CxZRBwhQsDQLgQeQFlEHCDUEMgY1D0L99jQNVwEgNQspMgMoNAtQiApCIlUiEkQhBCg0C1AyA4gKPSM1C4AIAAAAAAAAEiI0CxZRBwhQsDQLgQeQFlEHCDUEMgY1D0L9rjQNI1s1CyEHrzQLFlA1DDQSMQATRDIDKTIDKDQSUIgJ6ogKAEk1DTQMp0Q0C4gKNCEEKDQSUDQNNAyhiAoYiAnVMgMpMgMoMQBQiAm+iAnUNAygiAoANQ0hBCgxAFA0DYgJsycENBJQMQBQNAxQsDQNNQyACAAAAAAAABPgNAxQsDQMNQQ0EFcAmTQQV5kgUDQQV7kBUDQQIQpbNAsIFlAyBjQONAsINQ41DzUQQvz+NBBXmSA1FTEANBUSRDQQV7kBF0Q0EFcAmUk1CyJVRDQOIQUINQ0hBYgJiYgJwjQLIlWNAgfsCBdC/Gk0DVcBIEk1CzQUE0Q0EFeZIDUMNAs0DBNEMQA0DBJEKTUMgAgAAAAAAAAXZzQMULA0DDUENBBXAJk0C1A0EFe5AVA0EFe6CFAyBjUPNRBC/HIpNQuACAAAAAAAABkTNAtQsDQLNQQyBjUPQvxWNBBXmSA1GTEANBkSRCEFiAj6NAtXACA1GDQLVyAgNRc0C1dAQDUWNAuBgAFbNRU0C4GIAVs1DTQLIQhbNQwjNQuACAAAAAAAABrHNAsWUQcIULA0C4EHkBZRBwg1BDQYNBdQNBZQNBUWUDQNFlA0DBZQNQuABDV2bBE0C1CwgATFPbAuNBhQsIAEhR7IYTQXULCABCfHDO40FlCwgARwc1HQNBUWULCABMLHHgg0DRZQsIAEKXUn7DQMFlCwIQUxAIgIRIgIiys0C1A0GVArUDQQV7oIUDIGNA4hBQghBQk1DjUPNRBC+20yCmAyCngJNA4JSTULNBBXmSCICAqACAAAAAAAAByCNAsWULA0CxY1BDIGNAs0Dgg0Cwk1DjUPQvszNA0jWzULNBAhCls1DTQLNA0ORCEHrzQLFlA1FTEANBITRDIDKTIDKDEAUIgHYogHeEk1DDQVp0QhBCgxAFA0DDQVoYgHlYgHUiEEKDQSUDIDKTIDKDQSUIgHNYgHSzQVoIgHd4gHNCcEMQBQNBJQNBVQsDQLMQCIB2syAykyAygxAFCIBwqIByA1DIAIAAAAAAAAHkw0DFCwNAw1BDQQVwCZNBBXmSBQNBBXuQFQNA00CwkWUDIGNA40Cwk1DjUPNRBC+m40ASQSRIgG5TIDKTIDKjQMNAtQUAGIBrOIBsk1BDEZIhJEQvqYJa8oNAw0C1BQIQmvUFA1CyQ0ARJEiAawNAsiWzUMNAtXCJk1DYAEd8o/pDQMFlA0DVCwNAyIBuc0DSJVjQwE0gTcBOYE8AT6BP0FAAUDBQYFCQUTBRZC+ZY0ASQSRIgGZzIDKTIDKDQLUIgGOYgGTzUEQv+DNAEkEkSIBkuACAAAAAAAAAAGUQcINQRC/2k0ASQSRIgGMTQTVwAgNQRC/1c0ASQSRIgGHzQTVyAINQRC/0U0ASQSRIgGDScHNQRC/zYlrys0DDQLUFAhCa9QUDULQv87Ja8nBTQNNAxQNAtQUIE4r1BQNQtC/yQ0ASQSRIgF1CEHrzQQV7oIUDUEQv72Ja8nBjQMNAtQUCEJr1BQNQtC/volr4ABBDQLUCELr1BQNQtC/uglr4ABBTQLFlAhCK9QUDULQv7VgKEBAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+LCWvgAEHNAtQIQuvUFA1C0L+GjQBJBJEiATKNAtJNQwiVY0CBAAEF0L34TQBJBJEiASyNBBXmSA1BEL92IChAQAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/Uclr4ABCTQQNA9QNA5QNA0WUDQMFlA0CxZQUFA1C0L9JzQBJBJEiAPXNBBXugg0EFe5AVA0EFcAmVA1BEL88TQBJBJEiAO5gCDoRyUsKxUrkcslAO7R790VupBgIMRnBHuvxTLGaPMtgDQLARIWUQcINQRC/LqAoQEAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQvwpJa+AAQs0CxZQIQivUFA1C0L8FjQLIls1DDQLVwggNRQ0C1coKDUTgATPdsncNAwWUDQUUDQTULA0DIgC+zIKNRIhBCg0ElAnB4gCfiEEKDQUUDIDiAJzJwc1CycENBRQNBJQNAtQsIGZAa9JNRExAFAoUCWvUDIGIjUONQ81EEL14IgCr4GgjQaIAsI2GgE1C0L/f4gCnTYaATULQvuKIjE0EkQhDDE1EkQiMTYSRCIxNxJEiAJ9gcsDryIiQvW3NhoBNhoCNQs1DEL7JzYaATYaAjULNQxC+z82GgE1C0L7kEL7qUL7wEL7z0L73jYaATYaAjYaAzULNQw1DUL77jYaATYaAjULNQxC+85C+/U2GgE2GgI1CzUMQvv+NhoBNQtC/Ao2GgEXNQtC/BNC/CM2GgE1C0L8xDYaATULQvzONA1XAUA1C0L0vjQNVwFANQtC9Wg0DVcBYDULQvXqNA1XAUA1C0L2s0L3AEL3RUL38kL4KkL4eDQNVwGYNQtC+IpC+XBC+aciNQuACAAAAAAAABWaNAsWUQcIULA0C4EHkBZRBwg1BDIGNA01DjUPQvSvNAtXAZg1DCM1C4AIAAAAAAAAFaQ0CxZRBwhQsDQLgQeQFlEHCDUEgATW1mBMNAxQsCEFMQCIASk0ETQVUChQNBBXughQMgY0DSEFCTUONQ81EEL0WkhMv0iJIrIBI7IQsgeyCLOJNAsWUQcINQRC+e0pMgMqNAxXAUBQAYgAjSJVIxI1C0L/3ikyAyg0DFcBIFCIAHciVSMSNQtC/8hC+9NC++I2GgE2GgI2GgM2GgQXNhoFFzYaBhc1CzUMNQ01DjUPNRBC/GdC/IQ2GgE1C0L8mkL8zkiJTAlJNQYyCYgAf4kJSUH/7kk1BogAd4kxGSEMEkSIAJciMgoyCYgAzkLz9jYaARc1C0L9Qb5JFlEHCEUETVCJTEm9QP84SwOIAHlC/zBJVwEATCJVTYlJVwAgNRRJVyAoNRNJV0ggNRJJV2iZNRFJgYECgcIBWDUQgcMDWzUOiUkVgSBMCa9MUImxQv71MRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CA5EiSM1A4lJIhJMNAISEUSJNAY0B0oPQf9AQv9INAYINQaJsSENshAisgGzibEhDbIQNBeyCzQYsgo0FrI/NBWyDDQNsg00DLIOIQWyAbOJsbIJQv6G`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `14`,
    1000: `486`,
    1001: `486`,
    1002: `487`,
    1003: `488`,
    1004: `488`,
    1005: `489`,
    1006: `489`,
    1007: `490`,
    1008: `491`,
    1009: `499`,
    101: `14`,
    1010: `499`,
    1011: `500`,
    1012: `500`,
    1013: `500`,
    1014: `503`,
    1015: `503`,
    1016: `504`,
    1017: `505`,
    1018: `505`,
    1019: `506`,
    102: `15`,
    1020: `507`,
    1021: `507`,
    1022: `508`,
    1023: `508`,
    1024: `509`,
    1025: `510`,
    1026: `510`,
    1027: `510`,
    1028: `511`,
    1029: `511`,
    103: `16`,
    1030: `511`,
    1031: `512`,
    1032: `512`,
    1033: `514`,
    1034: `515`,
    1035: `515`,
    1036: `516`,
    1037: `517`,
    1038: `517`,
    1039: `518`,
    104: `17`,
    1040: `519`,
    1041: `519`,
    1042: `519`,
    1043: `520`,
    1044: `520`,
    1045: `520`,
    1046: `521`,
    1047: `521`,
    1048: `522`,
    1049: `523`,
    105: `18`,
    1050: `523`,
    1051: `523`,
    1052: `524`,
    1053: `524`,
    1054: `525`,
    1055: `525`,
    1056: `526`,
    1057: `527`,
    1058: `527`,
    1059: `528`,
    106: `19`,
    1060: `529`,
    1061: `529`,
    1062: `530`,
    1063: `530`,
    1064: `530`,
    1065: `531`,
    1066: `531`,
    1067: `532`,
    1068: `532`,
    1069: `533`,
    107: `20`,
    1070: `534`,
    1071: `534`,
    1072: `535`,
    1073: `536`,
    1074: `536`,
    1075: `537`,
    1076: `538`,
    1077: `540`,
    1078: `540`,
    1079: `541`,
    108: `20`,
    1080: `541`,
    1081: `542`,
    1082: `542`,
    1083: `542`,
    1084: `542`,
    1085: `542`,
    1086: `542`,
    1087: `542`,
    1088: `542`,
    1089: `542`,
    109: `21`,
    1090: `542`,
    1091: `543`,
    1092: `543`,
    1093: `544`,
    1094: `545`,
    1095: `546`,
    1096: `546`,
    1097: `547`,
    1098: `547`,
    1099: `548`,
    11: `2`,
    110: `22`,
    1100: `548`,
    1101: `549`,
    1102: `549`,
    1103: `549`,
    1104: `550`,
    1105: `550`,
    1106: `551`,
    1107: `551`,
    1108: `551`,
    1109: `552`,
    111: `23`,
    1110: `553`,
    1111: `553`,
    1112: `554`,
    1113: `554`,
    1114: `554`,
    1115: `555`,
    1116: `556`,
    1117: `556`,
    1118: `557`,
    1119: `557`,
    112: `23`,
    1120: `558`,
    1121: `559`,
    1122: `559`,
    1123: `560`,
    1124: `561`,
    1125: `562`,
    1126: `563`,
    1127: `563`,
    1128: `564`,
    1129: `564`,
    113: `24`,
    1130: `565`,
    1131: `565`,
    1132: `566`,
    1133: `567`,
    1134: `567`,
    1135: `568`,
    1136: `568`,
    1137: `569`,
    1138: `569`,
    1139: `570`,
    114: `25`,
    1140: `570`,
    1141: `570`,
    1142: `572`,
    1143: `572`,
    1144: `573`,
    1145: `573`,
    1146: `573`,
    1147: `574`,
    1148: `574`,
    1149: `575`,
    115: `27`,
    1150: `575`,
    1151: `576`,
    1152: `576`,
    1153: `577`,
    1154: `578`,
    1155: `585`,
    1156: `585`,
    1157: `586`,
    1158: `586`,
    1159: `586`,
    116: `27`,
    1160: `587`,
    1161: `588`,
    1162: `595`,
    1163: `595`,
    1164: `596`,
    1165: `596`,
    1166: `596`,
    1167: `597`,
    1168: `598`,
    1169: `598`,
    117: `27`,
    1170: `599`,
    1171: `600`,
    1172: `601`,
    1173: `608`,
    1174: `608`,
    1175: `609`,
    1176: `609`,
    1177: `610`,
    1178: `611`,
    1179: `611`,
    118: `27`,
    1180: `612`,
    1181: `612`,
    1182: `613`,
    1183: `613`,
    1184: `613`,
    1185: `616`,
    1186: `616`,
    1187: `617`,
    1188: `618`,
    1189: `619`,
    119: `27`,
    1190: `619`,
    1191: `619`,
    1192: `619`,
    1193: `619`,
    1194: `619`,
    1195: `620`,
    1196: `620`,
    1197: `620`,
    1198: `622`,
    1199: `622`,
    12: `2`,
    120: `27`,
    1200: `623`,
    1201: `623`,
    1202: `623`,
    1203: `624`,
    1204: `625`,
    1205: `625`,
    1206: `626`,
    1207: `626`,
    1208: `627`,
    1209: `628`,
    121: `27`,
    1210: `633`,
    1211: `633`,
    1212: `634`,
    1213: `634`,
    1214: `634`,
    1215: `635`,
    1216: `635`,
    1217: `636`,
    1218: `636`,
    1219: `637`,
    122: `27`,
    1220: `637`,
    1221: `638`,
    1222: `639`,
    1223: `644`,
    1224: `644`,
    1225: `645`,
    1226: `645`,
    1227: `646`,
    1228: `647`,
    1229: `652`,
    123: `27`,
    1230: `653`,
    1231: `653`,
    1232: `654`,
    1233: `654`,
    1234: `654`,
    1235: `654`,
    1236: `654`,
    1237: `654`,
    1238: `654`,
    1239: `654`,
    124: `27`,
    1240: `654`,
    1241: `654`,
    1242: `655`,
    1243: `655`,
    1244: `656`,
    1245: `657`,
    1246: `658`,
    1247: `658`,
    1248: `659`,
    1249: `659`,
    125: `27`,
    1250: `660`,
    1251: `660`,
    1252: `661`,
    1253: `661`,
    1254: `661`,
    1255: `662`,
    1256: `662`,
    1257: `663`,
    1258: `664`,
    1259: `664`,
    126: `27`,
    1260: `665`,
    1261: `665`,
    1262: `665`,
    1263: `666`,
    1264: `667`,
    1265: `667`,
    1266: `668`,
    1267: `668`,
    1268: `668`,
    1269: `669`,
    127: `27`,
    1270: `670`,
    1271: `670`,
    1272: `671`,
    1273: `671`,
    1274: `672`,
    1275: `672`,
    1276: `673`,
    1277: `673`,
    1278: `673`,
    1279: `675`,
    128: `27`,
    1280: `676`,
    1281: `676`,
    1282: `677`,
    1283: `677`,
    1284: `677`,
    1285: `677`,
    1286: `677`,
    1287: `677`,
    1288: `677`,
    1289: `677`,
    129: `27`,
    1290: `677`,
    1291: `677`,
    1292: `678`,
    1293: `678`,
    1294: `679`,
    1295: `680`,
    1296: `681`,
    1297: `681`,
    1298: `682`,
    1299: `682`,
    13: `2`,
    130: `27`,
    1300: `683`,
    1301: `683`,
    1302: `684`,
    1303: `684`,
    1304: `685`,
    1305: `685`,
    1306: `685`,
    1307: `687`,
    1308: `687`,
    1309: `688`,
    131: `27`,
    1310: `688`,
    1311: `688`,
    1312: `689`,
    1313: `689`,
    1314: `690`,
    1315: `690`,
    1316: `691`,
    1317: `691`,
    1318: `692`,
    1319: `693`,
    132: `27`,
    1320: `700`,
    1321: `700`,
    1322: `701`,
    1323: `701`,
    1324: `701`,
    1325: `704`,
    1326: `704`,
    1327: `705`,
    1328: `705`,
    1329: `705`,
    133: `27`,
    1330: `706`,
    1331: `706`,
    1332: `707`,
    1333: `707`,
    1334: `708`,
    1335: `708`,
    1336: `708`,
    1337: `709`,
    1338: `709`,
    1339: `710`,
    134: `27`,
    1340: `710`,
    1341: `711`,
    1342: `711`,
    1343: `711`,
    1344: `712`,
    1345: `712`,
    1346: `713`,
    1347: `713`,
    1348: `714`,
    1349: `714`,
    135: `27`,
    1350: `714`,
    1351: `715`,
    1352: `716`,
    1353: `716`,
    1354: `717`,
    1355: `717`,
    1356: `718`,
    1357: `718`,
    1358: `718`,
    1359: `719`,
    136: `27`,
    1360: `720`,
    1361: `720`,
    1362: `721`,
    1363: `721`,
    1364: `722`,
    1365: `722`,
    1366: `723`,
    1367: `724`,
    1368: `724`,
    1369: `725`,
    137: `27`,
    1370: `726`,
    1371: `726`,
    1372: `727`,
    1373: `727`,
    1374: `727`,
    1375: `727`,
    1376: `727`,
    1377: `727`,
    1378: `727`,
    1379: `727`,
    138: `27`,
    1380: `727`,
    1381: `727`,
    1382: `728`,
    1383: `728`,
    1384: `729`,
    1385: `730`,
    1386: `730`,
    1387: `730`,
    1388: `731`,
    1389: `732`,
    139: `27`,
    1390: `733`,
    1391: `733`,
    1392: `734`,
    1393: `735`,
    1394: `735`,
    1395: `735`,
    1396: `736`,
    1397: `736`,
    1398: `737`,
    1399: `737`,
    14: `2`,
    140: `27`,
    1400: `738`,
    1401: `738`,
    1402: `739`,
    1403: `740`,
    1404: `740`,
    1405: `741`,
    1406: `742`,
    1407: `742`,
    1408: `743`,
    1409: `744`,
    141: `27`,
    1410: `745`,
    1411: `745`,
    1412: `746`,
    1413: `747`,
    1414: `748`,
    1415: `748`,
    1416: `749`,
    1417: `750`,
    1418: `751`,
    1419: `751`,
    142: `27`,
    1420: `752`,
    1421: `752`,
    1422: `752`,
    1423: `752`,
    1424: `752`,
    1425: `752`,
    1426: `753`,
    1427: `753`,
    1428: `754`,
    1429: `755`,
    143: `27`,
    1430: `757`,
    1431: `757`,
    1432: `757`,
    1433: `757`,
    1434: `757`,
    1435: `757`,
    1436: `758`,
    1437: `758`,
    1438: `759`,
    1439: `760`,
    144: `27`,
    1440: `762`,
    1441: `762`,
    1442: `762`,
    1443: `762`,
    1444: `762`,
    1445: `762`,
    1446: `763`,
    1447: `763`,
    1448: `764`,
    1449: `765`,
    145: `27`,
    1450: `767`,
    1451: `767`,
    1452: `767`,
    1453: `767`,
    1454: `767`,
    1455: `767`,
    1456: `768`,
    1457: `768`,
    1458: `769`,
    1459: `770`,
    146: `27`,
    1460: `772`,
    1461: `772`,
    1462: `772`,
    1463: `772`,
    1464: `772`,
    1465: `772`,
    1466: `773`,
    1467: `773`,
    1468: `774`,
    1469: `775`,
    147: `27`,
    1470: `776`,
    1471: `778`,
    1472: `778`,
    1473: `778`,
    1474: `778`,
    1475: `778`,
    1476: `778`,
    1477: `779`,
    1478: `779`,
    1479: `780`,
    148: `27`,
    1480: `781`,
    1481: `782`,
    1482: `784`,
    1483: `784`,
    1484: `784`,
    1485: `784`,
    1486: `784`,
    1487: `784`,
    1488: `785`,
    1489: `785`,
    149: `27`,
    1490: `786`,
    1491: `787`,
    1492: `788`,
    1493: `790`,
    1494: `790`,
    1495: `791`,
    1496: `791`,
    1497: `792`,
    1498: `792`,
    1499: `792`,
    15: `2`,
    150: `27`,
    1500: `793`,
    1501: `794`,
    1502: `794`,
    1503: `795`,
    1504: `796`,
    1505: `796`,
    1506: `797`,
    1507: `798`,
    1508: `799`,
    1509: `800`,
    151: `27`,
    1510: `800`,
    1511: `801`,
    1512: `801`,
    1513: `801`,
    1514: `802`,
    1515: `803`,
    1516: `803`,
    1517: `804`,
    1518: `804`,
    1519: `805`,
    152: `27`,
    1520: `805`,
    1521: `806`,
    1522: `807`,
    1523: `807`,
    1524: `808`,
    1525: `809`,
    1526: `809`,
    1527: `810`,
    1528: `810`,
    1529: `811`,
    153: `27`,
    1530: `811`,
    1531: `812`,
    1532: `812`,
    1533: `812`,
    1534: `814`,
    1535: `814`,
    1536: `815`,
    1537: `816`,
    1538: `816`,
    1539: `817`,
    154: `27`,
    1540: `818`,
    1541: `819`,
    1542: `819`,
    1543: `820`,
    1544: `822`,
    1545: `823`,
    1546: `823`,
    1547: `825`,
    1548: `825`,
    1549: `826`,
    155: `27`,
    1550: `826`,
    1551: `826`,
    1552: `827`,
    1553: `827`,
    1554: `827`,
    1555: `828`,
    1556: `828`,
    1557: `828`,
    1558: `828`,
    1559: `828`,
    156: `27`,
    1560: `828`,
    1561: `828`,
    1562: `828`,
    1563: `828`,
    1564: `828`,
    1565: `829`,
    1566: `829`,
    1567: `830`,
    1568: `831`,
    1569: `832`,
    157: `27`,
    1570: `833`,
    1571: `833`,
    1572: `834`,
    1573: `835`,
    1574: `835`,
    1575: `836`,
    1576: `836`,
    1577: `837`,
    1578: `837`,
    1579: `838`,
    158: `27`,
    1580: `838`,
    1581: `839`,
    1582: `840`,
    1583: `840`,
    1584: `841`,
    1585: `842`,
    1586: `842`,
    1587: `843`,
    1588: `843`,
    1589: `844`,
    159: `27`,
    1590: `844`,
    1591: `844`,
    1592: `846`,
    1593: `846`,
    1594: `847`,
    1595: `848`,
    1596: `849`,
    1597: `849`,
    1598: `850`,
    1599: `850`,
    16: `2`,
    160: `27`,
    1600: `851`,
    1601: `851`,
    1602: `852`,
    1603: `853`,
    1604: `853`,
    1605: `854`,
    1606: `854`,
    1607: `855`,
    1608: `855`,
    1609: `856`,
    161: `27`,
    1610: `857`,
    1611: `862`,
    1612: `862`,
    1613: `863`,
    1614: `864`,
    1615: `864`,
    1616: `865`,
    1617: `866`,
    1618: `867`,
    1619: `867`,
    162: `27`,
    1620: `868`,
    1621: `868`,
    1622: `869`,
    1623: `869`,
    1624: `870`,
    1625: `871`,
    1626: `877`,
    1627: `877`,
    1628: `879`,
    1629: `880`,
    163: `27`,
    1630: `880`,
    1631: `881`,
    1632: `882`,
    1633: `882`,
    1634: `883`,
    1635: `884`,
    1636: `884`,
    1637: `884`,
    1638: `885`,
    1639: `885`,
    164: `27`,
    1640: `885`,
    1641: `886`,
    1642: `887`,
    1643: `887`,
    1644: `888`,
    1645: `888`,
    1646: `889`,
    1647: `890`,
    1648: `896`,
    1649: `896`,
    165: `27`,
    1650: `897`,
    1651: `898`,
    1652: `898`,
    1653: `899`,
    1654: `900`,
    1655: `900`,
    1656: `901`,
    1657: `901`,
    1658: `902`,
    1659: `903`,
    166: `27`,
    1660: `903`,
    1661: `903`,
    1662: `904`,
    1663: `904`,
    1664: `904`,
    1665: `906`,
    1666: `906`,
    1667: `907`,
    1668: `908`,
    1669: `908`,
    167: `27`,
    1670: `909`,
    1671: `910`,
    1672: `910`,
    1673: `911`,
    1674: `912`,
    1675: `912`,
    1676: `913`,
    1677: `914`,
    1678: `914`,
    1679: `915`,
    168: `27`,
    1680: `916`,
    1681: `916`,
    1682: `916`,
    1683: `917`,
    1684: `917`,
    1685: `917`,
    1686: `918`,
    1687: `918`,
    1688: `919`,
    1689: `920`,
    169: `27`,
    1690: `920`,
    1691: `920`,
    1692: `921`,
    1693: `921`,
    1694: `921`,
    1695: `922`,
    1696: `922`,
    1697: `923`,
    1698: `923`,
    1699: `924`,
    17: `2`,
    170: `27`,
    1700: `925`,
    1701: `925`,
    1702: `926`,
    1703: `927`,
    1704: `927`,
    1705: `928`,
    1706: `929`,
    1707: `931`,
    1708: `931`,
    1709: `932`,
    171: `27`,
    1710: `932`,
    1711: `933`,
    1712: `933`,
    1713: `933`,
    1714: `934`,
    1715: `934`,
    1716: `935`,
    1717: `936`,
    1718: `936`,
    1719: `937`,
    172: `27`,
    1720: `938`,
    1721: `938`,
    1722: `939`,
    1723: `940`,
    1724: `940`,
    1725: `940`,
    1726: `941`,
    1727: `941`,
    1728: `941`,
    1729: `942`,
    173: `27`,
    1730: `942`,
    1731: `943`,
    1732: `943`,
    1733: `943`,
    1734: `943`,
    1735: `943`,
    1736: `943`,
    1737: `943`,
    1738: `943`,
    1739: `943`,
    174: `27`,
    1740: `943`,
    1741: `944`,
    1742: `944`,
    1743: `945`,
    1744: `946`,
    1745: `947`,
    1746: `947`,
    1747: `948`,
    1748: `948`,
    1749: `949`,
    175: `27`,
    1750: `949`,
    1751: `950`,
    1752: `950`,
    1753: `950`,
    1754: `951`,
    1755: `951`,
    1756: `952`,
    1757: `952`,
    1758: `952`,
    1759: `953`,
    176: `27`,
    1760: `954`,
    1761: `954`,
    1762: `955`,
    1763: `955`,
    1764: `955`,
    1765: `956`,
    1766: `957`,
    1767: `957`,
    1768: `958`,
    1769: `958`,
    177: `27`,
    1770: `959`,
    1771: `960`,
    1772: `961`,
    1773: `962`,
    1774: `962`,
    1775: `963`,
    1776: `963`,
    1777: `964`,
    1778: `964`,
    1779: `965`,
    178: `27`,
    1780: `966`,
    1781: `966`,
    1782: `967`,
    1783: `967`,
    1784: `968`,
    1785: `968`,
    1786: `969`,
    1787: `969`,
    1788: `969`,
    1789: `971`,
    179: `27`,
    1790: `971`,
    1791: `972`,
    1792: `973`,
    1793: `974`,
    1794: `977`,
    1795: `977`,
    1796: `977`,
    1797: `978`,
    1798: `978`,
    1799: `980`,
    18: `2`,
    180: `27`,
    1800: `981`,
    1801: `981`,
    1802: `982`,
    1803: `983`,
    1804: `983`,
    1805: `984`,
    1806: `984`,
    1807: `985`,
    1808: `986`,
    1809: `987`,
    181: `27`,
    1810: `988`,
    1811: `988`,
    1812: `988`,
    1813: `989`,
    1814: `989`,
    1815: `989`,
    1816: `990`,
    1817: `990`,
    1818: `992`,
    1819: `992`,
    182: `27`,
    1820: `993`,
    1821: `994`,
    1822: `995`,
    1823: `997`,
    1824: `997`,
    1825: `997`,
    1826: `999`,
    1827: `1000`,
    1828: `1001`,
    1829: `1002`,
    183: `27`,
    1830: `1002`,
    1831: `1003`,
    1832: `1003`,
    1833: `1004`,
    1834: `1005`,
    1835: `1006`,
    1836: `1006`,
    1837: `1007`,
    1838: `1008`,
    1839: `1009`,
    184: `27`,
    1840: `1010`,
    1841: `1010`,
    1842: `1012`,
    1843: `1013`,
    1844: `1013`,
    1845: `1014`,
    1846: `1015`,
    1847: `1016`,
    1848: `1016`,
    1849: `1016`,
    185: `27`,
    1850: `1017`,
    1851: `1017`,
    1852: `1018`,
    1853: `1019`,
    1854: `1020`,
    1855: `1020`,
    1856: `1021`,
    1857: `1021`,
    1858: `1022`,
    1859: `1022`,
    186: `27`,
    1860: `1022`,
    1861: `1023`,
    1862: `1023`,
    1863: `1024`,
    1864: `1024`,
    1865: `1024`,
    1866: `1024`,
    1867: `1024`,
    1868: `1024`,
    1869: `1025`,
    187: `27`,
    1870: `1025`,
    1871: `1026`,
    1872: `1027`,
    1873: `1028`,
    1874: `1028`,
    1875: `1029`,
    1876: `1030`,
    1877: `1032`,
    1878: `1032`,
    1879: `1033`,
    188: `27`,
    1880: `1033`,
    1881: `1033`,
    1882: `1034`,
    1883: `1034`,
    1884: `1035`,
    1885: `1036`,
    1886: `1037`,
    1887: `1037`,
    1888: `1037`,
    1889: `1037`,
    189: `27`,
    1890: `1037`,
    1891: `1037`,
    1892: `1037`,
    1893: `1037`,
    1894: `1037`,
    1895: `1037`,
    1896: `1037`,
    1897: `1037`,
    1898: `1037`,
    1899: `1037`,
    19: `2`,
    190: `27`,
    1900: `1037`,
    1901: `1037`,
    1902: `1037`,
    1903: `1037`,
    1904: `1037`,
    1905: `1037`,
    1906: `1037`,
    1907: `1037`,
    1908: `1037`,
    1909: `1037`,
    191: `27`,
    1910: `1037`,
    1911: `1037`,
    1912: `1038`,
    1913: `1038`,
    1914: `1038`,
    1915: `1040`,
    1916: `1040`,
    1917: `1041`,
    1918: `1042`,
    1919: `1043`,
    192: `27`,
    1920: `1046`,
    1921: `1046`,
    1922: `1046`,
    1923: `1047`,
    1924: `1047`,
    1925: `1049`,
    1926: `1050`,
    1927: `1050`,
    1928: `1051`,
    1929: `1052`,
    193: `27`,
    1930: `1052`,
    1931: `1053`,
    1932: `1054`,
    1933: `1054`,
    1934: `1054`,
    1935: `1055`,
    1936: `1055`,
    1937: `1055`,
    1938: `1056`,
    1939: `1056`,
    194: `27`,
    1940: `1057`,
    1941: `1057`,
    1942: `1057`,
    1943: `1059`,
    1944: `1059`,
    1945: `1060`,
    1946: `1061`,
    1947: `1062`,
    1948: `1065`,
    1949: `1065`,
    195: `27`,
    1950: `1065`,
    1951: `1066`,
    1952: `1066`,
    1953: `1066`,
    1954: `1066`,
    1955: `1066`,
    1956: `1066`,
    1957: `1066`,
    1958: `1066`,
    1959: `1066`,
    196: `27`,
    1960: `1066`,
    1961: `1067`,
    1962: `1067`,
    1963: `1068`,
    1964: `1068`,
    1965: `1068`,
    1966: `1070`,
    1967: `1070`,
    1968: `1071`,
    1969: `1072`,
    197: `27`,
    1970: `1073`,
    1971: `1076`,
    1972: `1076`,
    1973: `1076`,
    1974: `1077`,
    1975: `1077`,
    1976: `1078`,
    1977: `1078`,
    1978: `1078`,
    1979: `1079`,
    198: `27`,
    1980: `1079`,
    1981: `1080`,
    1982: `1080`,
    1983: `1080`,
    1984: `1082`,
    1985: `1082`,
    1986: `1083`,
    1987: `1084`,
    1988: `1085`,
    1989: `1088`,
    199: `27`,
    1990: `1088`,
    1991: `1088`,
    1992: `1089`,
    1993: `1089`,
    1994: `1090`,
    1995: `1090`,
    1996: `1090`,
    1997: `1091`,
    1998: `1091`,
    1999: `1092`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1092`,
    2001: `1092`,
    2002: `1094`,
    2003: `1094`,
    2004: `1095`,
    2005: `1096`,
    2006: `1097`,
    2007: `1100`,
    2008: `1100`,
    2009: `1100`,
    201: `27`,
    2010: `1101`,
    2011: `1101`,
    2012: `1102`,
    2013: `1102`,
    2014: `1103`,
    2015: `1103`,
    2016: `1103`,
    2017: `1105`,
    2018: `1106`,
    2019: `1107`,
    202: `27`,
    2020: `1108`,
    2021: `1108`,
    2022: `1109`,
    2023: `1109`,
    2024: `1110`,
    2025: `1111`,
    2026: `1112`,
    2027: `1112`,
    2028: `1113`,
    2029: `1114`,
    203: `27`,
    2030: `1115`,
    2031: `1116`,
    2032: `1116`,
    2033: `1117`,
    2034: `1117`,
    2035: `1117`,
    2036: `1119`,
    2037: `1120`,
    2038: `1121`,
    2039: `1121`,
    204: `27`,
    2040: `1122`,
    2041: `1122`,
    2042: `1123`,
    2043: `1123`,
    2044: `1124`,
    2045: `1125`,
    2046: `1125`,
    2047: `1126`,
    2048: `1127`,
    2049: `1128`,
    205: `27`,
    2050: `1128`,
    2051: `1129`,
    2052: `1130`,
    2053: `1131`,
    2054: `1132`,
    2055: `1132`,
    2056: `1133`,
    2057: `1133`,
    2058: `1133`,
    2059: `1135`,
    206: `27`,
    2060: `1135`,
    2061: `1136`,
    2062: `1137`,
    2063: `1138`,
    2064: `1141`,
    2065: `1141`,
    2066: `1141`,
    2067: `1142`,
    2068: `1142`,
    2069: `1143`,
    207: `27`,
    2070: `1144`,
    2071: `1144`,
    2072: `1145`,
    2073: `1145`,
    2074: `1145`,
    2075: `1146`,
    2076: `1147`,
    2077: `1147`,
    2078: `1148`,
    2079: `1148`,
    208: `27`,
    2080: `1148`,
    2081: `1150`,
    2082: `1151`,
    2083: `1152`,
    2084: `1152`,
    2085: `1153`,
    2086: `1153`,
    2087: `1154`,
    2088: `1154`,
    2089: `1155`,
    209: `27`,
    2090: `1156`,
    2091: `1157`,
    2092: `1157`,
    2093: `1158`,
    2094: `1159`,
    2095: `1160`,
    2096: `1161`,
    2097: `1161`,
    2098: `1162`,
    2099: `1162`,
    21: `2`,
    210: `27`,
    2100: `1162`,
    2101: `1164`,
    2102: `1165`,
    2103: `1166`,
    2104: `1166`,
    2105: `1166`,
    2106: `1167`,
    2107: `1167`,
    2108: `1168`,
    2109: `1169`,
    211: `27`,
    2110: `1169`,
    2111: `1170`,
    2112: `1171`,
    2113: `1172`,
    2114: `1173`,
    2115: `1173`,
    2116: `1174`,
    2117: `1174`,
    2118: `1174`,
    2119: `1176`,
    212: `27`,
    2120: `1177`,
    2121: `1178`,
    2122: `1178`,
    2123: `1178`,
    2124: `1179`,
    2125: `1179`,
    2126: `1180`,
    2127: `1181`,
    2128: `1182`,
    2129: `1182`,
    213: `27`,
    2130: `1183`,
    2131: `1184`,
    2132: `1185`,
    2133: `1186`,
    2134: `1186`,
    2135: `1187`,
    2136: `1187`,
    2137: `1187`,
    2138: `1189`,
    2139: `1189`,
    214: `27`,
    2140: `1189`,
    2141: `1189`,
    2142: `1189`,
    2143: `1189`,
    2144: `1189`,
    2145: `1189`,
    2146: `1189`,
    2147: `1189`,
    2148: `1189`,
    2149: `1189`,
    215: `27`,
    2150: `1189`,
    2151: `1189`,
    2152: `1189`,
    2153: `1189`,
    2154: `1189`,
    2155: `1189`,
    2156: `1189`,
    2157: `1189`,
    2158: `1189`,
    2159: `1189`,
    216: `27`,
    2160: `1189`,
    2161: `1189`,
    2162: `1189`,
    2163: `1189`,
    2164: `1189`,
    2165: `1189`,
    2166: `1189`,
    2167: `1189`,
    2168: `1189`,
    2169: `1189`,
    217: `27`,
    2170: `1189`,
    2171: `1189`,
    2172: `1189`,
    2173: `1189`,
    2174: `1189`,
    2175: `1189`,
    2176: `1189`,
    2177: `1189`,
    2178: `1189`,
    2179: `1189`,
    218: `27`,
    2180: `1189`,
    2181: `1189`,
    2182: `1189`,
    2183: `1189`,
    2184: `1189`,
    2185: `1189`,
    2186: `1189`,
    2187: `1189`,
    2188: `1189`,
    2189: `1189`,
    219: `27`,
    2190: `1189`,
    2191: `1189`,
    2192: `1189`,
    2193: `1189`,
    2194: `1189`,
    2195: `1189`,
    2196: `1189`,
    2197: `1189`,
    2198: `1189`,
    2199: `1189`,
    22: `2`,
    220: `27`,
    2200: `1189`,
    2201: `1189`,
    2202: `1189`,
    2203: `1189`,
    2204: `1189`,
    2205: `1189`,
    2206: `1189`,
    2207: `1189`,
    2208: `1189`,
    2209: `1189`,
    221: `27`,
    2210: `1189`,
    2211: `1189`,
    2212: `1189`,
    2213: `1189`,
    2214: `1189`,
    2215: `1189`,
    2216: `1189`,
    2217: `1189`,
    2218: `1189`,
    2219: `1189`,
    222: `27`,
    2220: `1189`,
    2221: `1189`,
    2222: `1189`,
    2223: `1189`,
    2224: `1189`,
    2225: `1189`,
    2226: `1189`,
    2227: `1189`,
    2228: `1189`,
    2229: `1189`,
    223: `27`,
    2230: `1189`,
    2231: `1189`,
    2232: `1189`,
    2233: `1189`,
    2234: `1189`,
    2235: `1189`,
    2236: `1189`,
    2237: `1189`,
    2238: `1189`,
    2239: `1189`,
    224: `27`,
    2240: `1189`,
    2241: `1189`,
    2242: `1189`,
    2243: `1189`,
    2244: `1189`,
    2245: `1189`,
    2246: `1189`,
    2247: `1189`,
    2248: `1189`,
    2249: `1189`,
    225: `27`,
    2250: `1189`,
    2251: `1189`,
    2252: `1189`,
    2253: `1189`,
    2254: `1189`,
    2255: `1189`,
    2256: `1189`,
    2257: `1189`,
    2258: `1189`,
    2259: `1189`,
    226: `27`,
    2260: `1189`,
    2261: `1189`,
    2262: `1189`,
    2263: `1189`,
    2264: `1189`,
    2265: `1189`,
    2266: `1189`,
    2267: `1189`,
    2268: `1189`,
    2269: `1189`,
    227: `27`,
    2270: `1189`,
    2271: `1189`,
    2272: `1189`,
    2273: `1189`,
    2274: `1189`,
    2275: `1189`,
    2276: `1189`,
    2277: `1189`,
    2278: `1189`,
    2279: `1189`,
    228: `27`,
    2280: `1189`,
    2281: `1189`,
    2282: `1189`,
    2283: `1189`,
    2284: `1189`,
    2285: `1189`,
    2286: `1189`,
    2287: `1189`,
    2288: `1189`,
    2289: `1189`,
    229: `27`,
    2290: `1189`,
    2291: `1189`,
    2292: `1189`,
    2293: `1189`,
    2294: `1189`,
    2295: `1189`,
    2296: `1189`,
    2297: `1189`,
    2298: `1189`,
    2299: `1189`,
    23: `2`,
    230: `27`,
    2300: `1189`,
    2301: `1189`,
    2302: `1190`,
    2303: `1190`,
    2304: `1191`,
    2305: `1191`,
    2306: `1191`,
    2307: `1193`,
    2308: `1194`,
    2309: `1195`,
    231: `27`,
    2310: `1195`,
    2311: `1195`,
    2312: `1196`,
    2313: `1196`,
    2314: `1197`,
    2315: `1198`,
    2316: `1198`,
    2317: `1199`,
    2318: `1200`,
    2319: `1201`,
    232: `27`,
    2320: `1202`,
    2321: `1202`,
    2322: `1203`,
    2323: `1203`,
    2324: `1203`,
    2325: `1205`,
    2326: `1205`,
    2327: `1206`,
    2328: `1207`,
    2329: `1208`,
    233: `27`,
    2330: `1211`,
    2331: `1211`,
    2332: `1211`,
    2333: `1212`,
    2334: `1212`,
    2335: `1213`,
    2336: `1214`,
    2337: `1214`,
    2338: `1215`,
    2339: `1216`,
    234: `27`,
    2340: `1217`,
    2341: `1217`,
    2342: `1217`,
    2343: `1217`,
    2344: `1217`,
    2345: `1217`,
    2346: `1218`,
    2347: `1218`,
    2348: `1218`,
    2349: `1220`,
    235: `27`,
    2350: `1220`,
    2351: `1221`,
    2352: `1222`,
    2353: `1223`,
    2354: `1226`,
    2355: `1226`,
    2356: `1226`,
    2357: `1227`,
    2358: `1227`,
    2359: `1228`,
    236: `27`,
    2360: `1228`,
    2361: `1228`,
    2362: `1229`,
    2363: `1229`,
    2364: `1230`,
    2365: `1230`,
    2366: `1230`,
    2367: `1232`,
    2368: `1232`,
    2369: `1232`,
    237: `27`,
    2370: `1232`,
    2371: `1232`,
    2372: `1232`,
    2373: `1232`,
    2374: `1232`,
    2375: `1232`,
    2376: `1232`,
    2377: `1232`,
    2378: `1232`,
    2379: `1232`,
    238: `27`,
    2380: `1232`,
    2381: `1232`,
    2382: `1232`,
    2383: `1232`,
    2384: `1232`,
    2385: `1232`,
    2386: `1232`,
    2387: `1232`,
    2388: `1232`,
    2389: `1232`,
    239: `27`,
    2390: `1232`,
    2391: `1232`,
    2392: `1232`,
    2393: `1232`,
    2394: `1232`,
    2395: `1232`,
    2396: `1232`,
    2397: `1232`,
    2398: `1232`,
    2399: `1232`,
    24: `2`,
    240: `27`,
    2400: `1232`,
    2401: `1232`,
    2402: `1232`,
    2403: `1232`,
    2404: `1232`,
    2405: `1232`,
    2406: `1232`,
    2407: `1232`,
    2408: `1232`,
    2409: `1232`,
    241: `27`,
    2410: `1232`,
    2411: `1232`,
    2412: `1232`,
    2413: `1232`,
    2414: `1232`,
    2415: `1232`,
    2416: `1232`,
    2417: `1232`,
    2418: `1232`,
    2419: `1232`,
    242: `28`,
    2420: `1232`,
    2421: `1232`,
    2422: `1232`,
    2423: `1232`,
    2424: `1232`,
    2425: `1232`,
    2426: `1232`,
    2427: `1232`,
    2428: `1232`,
    2429: `1232`,
    243: `28`,
    2430: `1232`,
    2431: `1232`,
    2432: `1232`,
    2433: `1232`,
    2434: `1232`,
    2435: `1232`,
    2436: `1232`,
    2437: `1232`,
    2438: `1232`,
    2439: `1232`,
    244: `28`,
    2440: `1232`,
    2441: `1232`,
    2442: `1232`,
    2443: `1232`,
    2444: `1232`,
    2445: `1232`,
    2446: `1232`,
    2447: `1232`,
    2448: `1232`,
    2449: `1232`,
    245: `29`,
    2450: `1232`,
    2451: `1232`,
    2452: `1232`,
    2453: `1232`,
    2454: `1232`,
    2455: `1232`,
    2456: `1232`,
    2457: `1232`,
    2458: `1232`,
    2459: `1232`,
    246: `29`,
    2460: `1232`,
    2461: `1232`,
    2462: `1232`,
    2463: `1232`,
    2464: `1232`,
    2465: `1232`,
    2466: `1232`,
    2467: `1232`,
    2468: `1232`,
    2469: `1232`,
    247: `29`,
    2470: `1232`,
    2471: `1232`,
    2472: `1232`,
    2473: `1232`,
    2474: `1232`,
    2475: `1232`,
    2476: `1232`,
    2477: `1232`,
    2478: `1232`,
    2479: `1232`,
    248: `29`,
    2480: `1232`,
    2481: `1232`,
    2482: `1232`,
    2483: `1232`,
    2484: `1232`,
    2485: `1232`,
    2486: `1232`,
    2487: `1232`,
    2488: `1232`,
    2489: `1232`,
    249: `29`,
    2490: `1232`,
    2491: `1232`,
    2492: `1232`,
    2493: `1232`,
    2494: `1232`,
    2495: `1232`,
    2496: `1232`,
    2497: `1232`,
    2498: `1232`,
    2499: `1232`,
    25: `2`,
    250: `29`,
    2500: `1232`,
    2501: `1232`,
    2502: `1232`,
    2503: `1232`,
    2504: `1232`,
    2505: `1232`,
    2506: `1232`,
    2507: `1232`,
    2508: `1232`,
    2509: `1232`,
    251: `29`,
    2510: `1232`,
    2511: `1232`,
    2512: `1232`,
    2513: `1232`,
    2514: `1232`,
    2515: `1232`,
    2516: `1232`,
    2517: `1232`,
    2518: `1232`,
    2519: `1232`,
    252: `29`,
    2520: `1232`,
    2521: `1232`,
    2522: `1232`,
    2523: `1232`,
    2524: `1232`,
    2525: `1232`,
    2526: `1232`,
    2527: `1232`,
    2528: `1232`,
    2529: `1232`,
    253: `29`,
    2530: `1232`,
    2531: `1233`,
    2532: `1233`,
    2533: `1234`,
    2534: `1234`,
    2535: `1234`,
    2536: `1236`,
    2537: `1237`,
    2538: `1238`,
    2539: `1238`,
    254: `29`,
    2540: `1238`,
    2541: `1239`,
    2542: `1239`,
    2543: `1240`,
    2544: `1240`,
    2545: `1241`,
    2546: `1242`,
    2547: `1242`,
    2548: `1243`,
    2549: `1244`,
    255: `29`,
    2550: `1244`,
    2551: `1245`,
    2552: `1246`,
    2553: `1247`,
    2554: `1247`,
    2555: `1248`,
    2556: `1249`,
    2557: `1250`,
    2558: `1250`,
    2559: `1251`,
    256: `29`,
    2560: `1252`,
    2561: `1253`,
    2562: `1254`,
    2563: `1255`,
    2564: `1255`,
    2565: `1256`,
    2566: `1256`,
    2567: `1256`,
    2568: `1258`,
    2569: `1258`,
    257: `29`,
    2570: `1259`,
    2571: `1260`,
    2572: `1261`,
    2573: `1264`,
    2574: `1264`,
    2575: `1264`,
    2576: `1265`,
    2577: `1265`,
    2578: `1266`,
    2579: `1266`,
    258: `29`,
    2580: `1266`,
    2581: `1267`,
    2582: `1267`,
    2583: `1268`,
    2584: `1268`,
    2585: `1268`,
    2586: `1269`,
    2587: `1270`,
    2588: `1270`,
    2589: `1271`,
    259: `29`,
    2590: `1271`,
    2591: `1271`,
    2592: `1272`,
    2593: `1273`,
    2594: `1273`,
    2595: `1274`,
    2596: `1274`,
    2597: `1274`,
    2598: `1276`,
    2599: `1276`,
    26: `2`,
    260: `29`,
    2600: `1277`,
    2601: `1278`,
    2602: `1279`,
    2603: `1282`,
    2604: `1282`,
    2605: `1282`,
    2606: `1283`,
    2607: `1283`,
    2608: `1283`,
    2609: `1283`,
    261: `29`,
    2610: `1283`,
    2611: `1283`,
    2612: `1283`,
    2613: `1283`,
    2614: `1283`,
    2615: `1283`,
    2616: `1283`,
    2617: `1283`,
    2618: `1283`,
    2619: `1283`,
    262: `29`,
    2620: `1283`,
    2621: `1283`,
    2622: `1283`,
    2623: `1283`,
    2624: `1283`,
    2625: `1283`,
    2626: `1283`,
    2627: `1283`,
    2628: `1283`,
    2629: `1283`,
    263: `29`,
    2630: `1283`,
    2631: `1283`,
    2632: `1283`,
    2633: `1283`,
    2634: `1283`,
    2635: `1283`,
    2636: `1283`,
    2637: `1283`,
    2638: `1283`,
    2639: `1283`,
    264: `29`,
    2640: `1284`,
    2641: `1284`,
    2642: `1285`,
    2643: `1286`,
    2644: `1287`,
    2645: `1288`,
    2646: `1288`,
    2647: `1288`,
    2648: `1289`,
    2649: `1289`,
    265: `29`,
    2650: `1290`,
    2651: `1290`,
    2652: `1290`,
    2653: `1292`,
    2654: `1292`,
    2655: `1292`,
    2656: `1292`,
    2657: `1292`,
    2658: `1292`,
    2659: `1292`,
    266: `29`,
    2660: `1292`,
    2661: `1292`,
    2662: `1292`,
    2663: `1292`,
    2664: `1292`,
    2665: `1292`,
    2666: `1292`,
    2667: `1292`,
    2668: `1292`,
    2669: `1292`,
    267: `29`,
    2670: `1292`,
    2671: `1292`,
    2672: `1292`,
    2673: `1292`,
    2674: `1292`,
    2675: `1292`,
    2676: `1292`,
    2677: `1292`,
    2678: `1292`,
    2679: `1292`,
    268: `29`,
    2680: `1292`,
    2681: `1292`,
    2682: `1292`,
    2683: `1292`,
    2684: `1292`,
    2685: `1292`,
    2686: `1292`,
    2687: `1292`,
    2688: `1292`,
    2689: `1292`,
    269: `29`,
    2690: `1292`,
    2691: `1292`,
    2692: `1292`,
    2693: `1292`,
    2694: `1292`,
    2695: `1292`,
    2696: `1292`,
    2697: `1292`,
    2698: `1292`,
    2699: `1292`,
    27: `2`,
    270: `29`,
    2700: `1292`,
    2701: `1292`,
    2702: `1292`,
    2703: `1292`,
    2704: `1292`,
    2705: `1292`,
    2706: `1292`,
    2707: `1292`,
    2708: `1292`,
    2709: `1292`,
    271: `29`,
    2710: `1292`,
    2711: `1292`,
    2712: `1292`,
    2713: `1292`,
    2714: `1292`,
    2715: `1292`,
    2716: `1292`,
    2717: `1292`,
    2718: `1292`,
    2719: `1292`,
    272: `29`,
    2720: `1292`,
    2721: `1292`,
    2722: `1292`,
    2723: `1292`,
    2724: `1292`,
    2725: `1292`,
    2726: `1292`,
    2727: `1292`,
    2728: `1292`,
    2729: `1292`,
    273: `29`,
    2730: `1292`,
    2731: `1292`,
    2732: `1292`,
    2733: `1292`,
    2734: `1292`,
    2735: `1292`,
    2736: `1292`,
    2737: `1292`,
    2738: `1292`,
    2739: `1292`,
    274: `29`,
    2740: `1292`,
    2741: `1292`,
    2742: `1292`,
    2743: `1292`,
    2744: `1292`,
    2745: `1292`,
    2746: `1292`,
    2747: `1292`,
    2748: `1292`,
    2749: `1292`,
    275: `29`,
    2750: `1292`,
    2751: `1292`,
    2752: `1292`,
    2753: `1292`,
    2754: `1292`,
    2755: `1292`,
    2756: `1292`,
    2757: `1292`,
    2758: `1292`,
    2759: `1292`,
    276: `29`,
    2760: `1292`,
    2761: `1292`,
    2762: `1292`,
    2763: `1292`,
    2764: `1292`,
    2765: `1292`,
    2766: `1292`,
    2767: `1292`,
    2768: `1292`,
    2769: `1292`,
    277: `29`,
    2770: `1292`,
    2771: `1292`,
    2772: `1292`,
    2773: `1292`,
    2774: `1292`,
    2775: `1292`,
    2776: `1292`,
    2777: `1292`,
    2778: `1292`,
    2779: `1292`,
    278: `29`,
    2780: `1292`,
    2781: `1292`,
    2782: `1292`,
    2783: `1292`,
    2784: `1292`,
    2785: `1292`,
    2786: `1292`,
    2787: `1292`,
    2788: `1292`,
    2789: `1292`,
    279: `29`,
    2790: `1292`,
    2791: `1292`,
    2792: `1292`,
    2793: `1292`,
    2794: `1292`,
    2795: `1292`,
    2796: `1292`,
    2797: `1292`,
    2798: `1292`,
    2799: `1292`,
    28: `2`,
    280: `29`,
    2800: `1292`,
    2801: `1292`,
    2802: `1292`,
    2803: `1292`,
    2804: `1292`,
    2805: `1292`,
    2806: `1292`,
    2807: `1292`,
    2808: `1292`,
    2809: `1292`,
    281: `29`,
    2810: `1292`,
    2811: `1292`,
    2812: `1292`,
    2813: `1292`,
    2814: `1292`,
    2815: `1292`,
    2816: `1292`,
    2817: `1293`,
    2818: `1293`,
    2819: `1294`,
    282: `29`,
    2820: `1294`,
    2821: `1294`,
    2822: `1296`,
    2823: `1297`,
    2824: `1298`,
    2825: `1298`,
    2826: `1298`,
    2827: `1299`,
    2828: `1299`,
    2829: `1300`,
    283: `29`,
    2830: `1301`,
    2831: `1302`,
    2832: `1302`,
    2833: `1303`,
    2834: `1304`,
    2835: `1305`,
    2836: `1306`,
    2837: `1306`,
    2838: `1307`,
    2839: `1307`,
    284: `29`,
    2840: `1307`,
    2841: `1309`,
    2842: `1309`,
    2843: `1310`,
    2844: `1311`,
    2845: `1312`,
    2846: `1312`,
    2847: `1313`,
    2848: `1313`,
    2849: `1314`,
    285: `29`,
    2850: `1314`,
    2851: `1314`,
    2852: `1315`,
    2853: `1315`,
    2854: `1316`,
    2855: `1316`,
    2856: `1317`,
    2857: `1317`,
    2858: `1317`,
    2859: `1318`,
    286: `29`,
    2860: `1318`,
    2861: `1319`,
    2862: `1319`,
    2863: `1319`,
    2864: `1319`,
    2865: `1319`,
    2866: `1319`,
    2867: `1320`,
    2868: `1320`,
    2869: `1321`,
    287: `29`,
    2870: `1322`,
    2871: `1323`,
    2872: `1323`,
    2873: `1324`,
    2874: `1325`,
    2875: `1325`,
    2876: `1326`,
    2877: `1327`,
    2878: `1329`,
    2879: `1329`,
    288: `29`,
    2880: `1330`,
    2881: `1330`,
    2882: `1330`,
    2883: `1331`,
    2884: `1331`,
    2885: `1332`,
    2886: `1332`,
    2887: `1334`,
    2888: `1334`,
    2889: `1335`,
    289: `29`,
    2890: `1336`,
    2891: `1336`,
    2892: `1337`,
    2893: `1338`,
    2894: `1338`,
    2895: `1339`,
    2896: `1339`,
    2897: `1339`,
    2898: `1341`,
    2899: `1341`,
    29: `2`,
    290: `29`,
    2900: `1342`,
    2901: `1343`,
    2902: `1343`,
    2903: `1344`,
    2904: `1345`,
    2905: `1345`,
    2906: `1346`,
    2907: `1346`,
    2908: `1346`,
    2909: `1347`,
    291: `29`,
    2910: `1347`,
    2911: `1348`,
    2912: `1348`,
    2913: `1349`,
    2914: `1349`,
    2915: `1350`,
    2916: `1350`,
    2917: `1351`,
    2918: `1352`,
    2919: `1352`,
    292: `29`,
    2920: `1353`,
    2921: `1354`,
    2922: `1354`,
    2923: `1355`,
    2924: `1356`,
    2925: `1358`,
    2926: `1358`,
    2927: `1358`,
    2928: `1359`,
    2929: `1360`,
    293: `29`,
    2930: `1361`,
    2931: `1361`,
    2932: `1362`,
    2933: `1362`,
    2934: `1363`,
    2935: `1364`,
    2936: `1365`,
    2937: `1366`,
    2938: `1367`,
    2939: `1368`,
    294: `29`,
    2940: `1369`,
    2941: `1369`,
    2942: `1370`,
    2943: `1371`,
    2944: `1371`,
    2945: `1372`,
    2946: `1372`,
    2947: `1373`,
    2948: `1373`,
    2949: `1374`,
    295: `29`,
    2950: `1374`,
    2951: `1374`,
    2952: `1376`,
    2953: `1376`,
    2954: `1376`,
    2955: `1377`,
    2956: `1377`,
    2957: `1377`,
    2958: `1377`,
    2959: `1378`,
    296: `29`,
    2960: `1378`,
    2961: `1378`,
    2962: `1379`,
    2963: `1379`,
    2964: `1379`,
    2965: `1380`,
    2966: `1380`,
    2967: `1381`,
    2968: `1381`,
    2969: `1381`,
    297: `31`,
    2970: `1383`,
    2971: `1383`,
    2972: `1383`,
    2973: `1384`,
    2974: `1384`,
    2975: `1384`,
    2976: `1385`,
    2977: `1385`,
    2978: `1386`,
    2979: `1386`,
    298: `33`,
    2980: `1386`,
    2981: `1388`,
    2982: `1389`,
    2983: `1389`,
    2984: `1390`,
    2985: `1391`,
    2986: `1392`,
    2987: `1392`,
    2988: `1393`,
    2989: `1393`,
    299: `33`,
    2990: `1394`,
    2991: `1395`,
    2992: `1396`,
    2993: `1397`,
    2994: `1397`,
    2995: `1398`,
    2996: `1399`,
    2997: `1400`,
    2998: `1401`,
    2999: `1401`,
    3: `2`,
    30: `2`,
    300: `34`,
    3000: `1402`,
    3001: `1403`,
    3002: `1404`,
    3003: `1404`,
    3004: `1404`,
    3005: `1405`,
    3006: `1405`,
    3007: `1405`,
    3008: `1406`,
    3009: `1407`,
    301: `34`,
    3010: `1408`,
    3011: `1409`,
    3012: `1409`,
    3013: `1409`,
    3014: `1411`,
    3015: `1411`,
    3016: `1411`,
    3017: `1412`,
    3018: `1412`,
    3019: `1412`,
    302: `34`,
    3020: `1413`,
    3021: `1413`,
    3022: `1414`,
    3023: `1414`,
    3024: `1415`,
    3025: `1415`,
    3026: `1415`,
    3027: `1417`,
    3028: `1417`,
    3029: `1417`,
    303: `35`,
    3030: `1418`,
    3031: `1418`,
    3032: `1418`,
    3033: `1419`,
    3034: `1419`,
    3035: `1420`,
    3036: `1420`,
    3037: `1421`,
    3038: `1421`,
    3039: `1421`,
    304: `35`,
    3040: `1423`,
    3041: `1423`,
    3042: `1423`,
    3043: `1424`,
    3044: `1424`,
    3045: `1425`,
    3046: `1425`,
    3047: `1425`,
    3048: `1427`,
    3049: `1427`,
    305: `36`,
    3050: `1427`,
    3051: `1429`,
    3052: `1429`,
    3053: `1429`,
    3054: `1431`,
    3055: `1431`,
    3056: `1431`,
    3057: `1433`,
    3058: `1433`,
    3059: `1433`,
    306: `36`,
    3060: `1435`,
    3061: `1435`,
    3062: `1435`,
    3063: `1436`,
    3064: `1436`,
    3065: `1436`,
    3066: `1437`,
    3067: `1437`,
    3068: `1437`,
    3069: `1438`,
    307: `37`,
    3070: `1438`,
    3071: `1439`,
    3072: `1439`,
    3073: `1440`,
    3074: `1440`,
    3075: `1441`,
    3076: `1441`,
    3077: `1441`,
    3078: `1443`,
    3079: `1443`,
    308: `37`,
    3080: `1443`,
    3081: `1444`,
    3082: `1444`,
    3083: `1444`,
    3084: `1445`,
    3085: `1445`,
    3086: `1446`,
    3087: `1446`,
    3088: `1447`,
    3089: `1447`,
    309: `37`,
    3090: `1447`,
    3091: `1449`,
    3092: `1449`,
    3093: `1449`,
    3094: `1451`,
    3095: `1451`,
    3096: `1451`,
    3097: `1452`,
    3098: `1452`,
    3099: `1452`,
    31: `2`,
    310: `38`,
    3100: `1453`,
    3101: `1453`,
    3102: `1454`,
    3103: `1454`,
    3104: `1455`,
    3105: `1455`,
    3106: `1455`,
    3107: `1457`,
    3108: `1457`,
    3109: `1457`,
    311: `38`,
    3110: `1458`,
    3111: `1458`,
    3112: `1459`,
    3113: `1459`,
    3114: `1459`,
    3115: `1461`,
    3116: `1461`,
    3117: `1461`,
    3118: `1462`,
    3119: `1463`,
    312: `39`,
    3120: `1463`,
    3121: `1464`,
    3122: `1464`,
    3123: `1464`,
    3124: `1466`,
    3125: `1466`,
    3126: `1466`,
    3127: `1468`,
    3128: `1468`,
    3129: `1468`,
    313: `39`,
    3130: `1469`,
    3131: `1469`,
    3132: `1470`,
    3133: `1470`,
    3134: `1470`,
    3135: `1472`,
    3136: `1472`,
    3137: `1472`,
    3138: `1473`,
    3139: `1473`,
    314: `40`,
    3140: `1474`,
    3141: `1474`,
    3142: `1474`,
    3143: `1476`,
    3144: `1476`,
    3145: `1477`,
    3146: `1477`,
    3147: `1477`,
    3148: `1478`,
    3149: `1478`,
    315: `40`,
    3150: `1479`,
    3151: `1479`,
    3152: `1479`,
    3153: `1481`,
    3154: `1481`,
    3155: `1482`,
    3156: `1482`,
    3157: `1482`,
    3158: `1483`,
    3159: `1483`,
    316: `41`,
    3160: `1484`,
    3161: `1484`,
    3162: `1484`,
    3163: `1486`,
    3164: `1486`,
    3165: `1487`,
    3166: `1487`,
    3167: `1487`,
    3168: `1488`,
    3169: `1488`,
    317: `42`,
    3170: `1489`,
    3171: `1489`,
    3172: `1489`,
    3173: `1491`,
    3174: `1491`,
    3175: `1492`,
    3176: `1492`,
    3177: `1492`,
    3178: `1493`,
    3179: `1493`,
    318: `48`,
    3180: `1494`,
    3181: `1494`,
    3182: `1494`,
    3183: `1496`,
    3184: `1496`,
    3185: `1496`,
    3186: `1498`,
    3187: `1498`,
    3188: `1498`,
    3189: `1500`,
    319: `48`,
    3190: `1500`,
    3191: `1500`,
    3192: `1502`,
    3193: `1502`,
    3194: `1502`,
    3195: `1504`,
    3196: `1504`,
    3197: `1504`,
    3198: `1506`,
    3199: `1506`,
    32: `2`,
    320: `49`,
    3200: `1507`,
    3201: `1507`,
    3202: `1507`,
    3203: `1508`,
    3204: `1508`,
    3205: `1509`,
    3206: `1509`,
    3207: `1509`,
    3208: `1511`,
    3209: `1511`,
    321: `49`,
    3210: `1511`,
    3211: `1513`,
    3212: `1513`,
    3213: `1513`,
    3214: `1515`,
    3215: `1516`,
    3216: `1516`,
    3217: `1517`,
    3218: `1517`,
    3219: `1517`,
    322: `50`,
    3220: `1517`,
    3221: `1517`,
    3222: `1517`,
    3223: `1517`,
    3224: `1517`,
    3225: `1517`,
    3226: `1517`,
    3227: `1518`,
    3228: `1518`,
    3229: `1519`,
    323: `51`,
    3230: `1520`,
    3231: `1520`,
    3232: `1520`,
    3233: `1521`,
    3234: `1522`,
    3235: `1523`,
    3236: `1523`,
    3237: `1524`,
    3238: `1525`,
    3239: `1525`,
    324: `58`,
    3240: `1525`,
    3241: `1526`,
    3242: `1526`,
    3243: `1527`,
    3244: `1527`,
    3245: `1528`,
    3246: `1528`,
    3247: `1529`,
    3248: `1529`,
    3249: `1530`,
    325: `58`,
    3250: `1530`,
    3251: `1531`,
    3252: `1531`,
    3253: `1531`,
    3254: `1533`,
    3255: `1533`,
    3256: `1534`,
    3257: `1534`,
    3258: `1534`,
    3259: `1535`,
    326: `59`,
    3260: `1535`,
    3261: `1536`,
    3262: `1537`,
    3263: `1537`,
    3264: `1538`,
    3265: `1538`,
    3266: `1538`,
    3267: `1538`,
    3268: `1538`,
    3269: `1538`,
    327: `60`,
    3270: `1538`,
    3271: `1538`,
    3272: `1538`,
    3273: `1538`,
    3274: `1539`,
    3275: `1539`,
    3276: `1540`,
    3277: `1541`,
    3278: `1541`,
    3279: `1541`,
    328: `60`,
    3280: `1542`,
    3281: `1543`,
    3282: `1544`,
    3283: `1544`,
    3284: `1545`,
    3285: `1546`,
    3286: `1546`,
    3287: `1546`,
    3288: `1547`,
    3289: `1547`,
    329: `61`,
    3290: `1548`,
    3291: `1548`,
    3292: `1548`,
    3293: `1548`,
    3294: `1548`,
    3295: `1548`,
    3296: `1549`,
    3297: `1549`,
    3298: `1550`,
    3299: `1551`,
    33: `2`,
    330: `61`,
    3300: `1553`,
    3301: `1553`,
    3302: `1554`,
    3303: `1554`,
    3304: `1555`,
    3305: `1555`,
    3306: `1555`,
    3307: `1556`,
    3308: `1556`,
    3309: `1557`,
    331: `62`,
    3310: `1557`,
    3311: `1558`,
    3312: `1559`,
    3313: `1560`,
    3314: `1561`,
    3315: `1561`,
    3316: `1562`,
    3317: `1562`,
    3318: `1562`,
    3319: `1563`,
    332: `63`,
    3320: `1564`,
    3321: `1564`,
    3322: `1565`,
    3323: `1565`,
    3324: `1566`,
    3325: `1566`,
    3326: `1567`,
    3327: `1568`,
    3328: `1568`,
    3329: `1569`,
    333: `64`,
    3330: `1569`,
    3331: `1570`,
    3332: `1570`,
    3333: `1571`,
    3334: `1571`,
    3335: `1571`,
    3336: `1573`,
    3337: `1574`,
    3338: `1575`,
    3339: `1576`,
    334: `65`,
    3340: `1577`,
    3341: `1579`,
    3342: `1580`,
    3343: `1580`,
    3344: `1581`,
    3345: `1582`,
    3346: `1582`,
    3347: `1583`,
    3348: `1583`,
    3349: `1584`,
    335: `65`,
    3350: `1584`,
    3351: `1585`,
    3352: `1586`,
    3353: `1588`,
    3354: `1588`,
    3355: `1589`,
    3356: `1590`,
    3357: `1590`,
    3358: `1590`,
    3359: `1591`,
    336: `66`,
    3360: `1591`,
    3361: `1592`,
    3362: `1592`,
    3363: `1592`,
    3364: `1595`,
    3365: `1596`,
    3366: `1596`,
    3367: `1597`,
    3368: `1598`,
    3369: `1598`,
    337: `66`,
    3370: `1599`,
    3371: `1599`,
    3372: `1599`,
    3373: `1600`,
    3374: `1601`,
    3375: `1602`,
    3376: `1602`,
    3377: `1602`,
    3378: `1603`,
    3379: `1604`,
    338: `66`,
    3380: `1605`,
    3381: `1606`,
    3382: `1607`,
    3383: `1607`,
    3384: `1608`,
    3385: `1608`,
    3386: `1608`,
    3387: `1611`,
    3388: `1612`,
    3389: `1612`,
    339: `67`,
    3390: `1613`,
    3391: `1614`,
    3392: `1614`,
    3393: `1615`,
    3394: `1615`,
    3395: `1615`,
    3396: `1616`,
    3397: `1617`,
    3398: `1617`,
    3399: `1617`,
    34: `2`,
    340: `67`,
    3400: `1618`,
    3401: `1619`,
    3402: `1620`,
    3403: `1621`,
    3404: `1622`,
    3405: `1622`,
    3406: `1623`,
    3407: `1623`,
    3408: `1623`,
    3409: `1625`,
    341: `68`,
    3410: `1625`,
    3411: `1625`,
    3412: `1627`,
    3413: `1627`,
    3414: `1627`,
    3415: `1629`,
    3416: `1629`,
    3417: `1629`,
    3418: `1630`,
    3419: `1630`,
    342: `68`,
    3420: `1630`,
    3421: `1631`,
    3422: `1631`,
    3423: `1631`,
    3424: `1632`,
    3425: `1632`,
    3426: `1632`,
    3427: `1633`,
    3428: `1634`,
    3429: `1634`,
    343: `69`,
    3430: `1634`,
    3431: `1635`,
    3432: `1636`,
    3433: `1636`,
    3434: `1636`,
    3435: `1637`,
    3436: `1638`,
    3437: `1638`,
    3438: `1639`,
    3439: `1639`,
    344: `70`,
    3440: `1640`,
    3441: `1640`,
    3442: `1641`,
    3443: `1641`,
    3444: `1642`,
    3445: `1642`,
    3446: `1643`,
    3447: `1643`,
    3448: `1644`,
    3449: `1644`,
    345: `70`,
    3450: `1644`,
    3451: `1646`,
    3452: `1646`,
    3453: `1646`,
    3454: `1648`,
    3455: `1648`,
    3456: `1648`,
    3457: `1649`,
    3458: `1649`,
    3459: `1650`,
    346: `71`,
    3460: `1650`,
    3461: `1650`,
    3462: `1652`,
    3463: `1652`,
    3464: `1652`,
    3465: `1654`,
    3466: `1655`,
    3467: `1657`,
    3468: `1658`,
    3469: `1659`,
    347: `72`,
    3470: `1660`,
    3471: `1660`,
    3472: `1661`,
    3473: `1661`,
    3474: `1662`,
    3475: `1662`,
    3476: `1662`,
    3477: `1663`,
    3478: `1665`,
    3479: `1666`,
    348: `72`,
    3480: `1667`,
    3481: `1667`,
    3482: `1667`,
    3483: `1668`,
    3484: `1669`,
    3485: `1669`,
    3486: `1670`,
    3487: `1670`,
    3488: `1670`,
    3489: `1671`,
    349: `73`,
    3490: `1673`,
    3491: `1673`,
    3492: `1674`,
    3493: `1674`,
    3494: `1675`,
    3495: `1676`,
    3496: `1678`,
    3497: `1678`,
    3498: `1678`,
    3499: `1680`,
    35: `2`,
    350: `74`,
    3500: `1681`,
    3501: `1681`,
    3502: `1682`,
    3503: `1682`,
    3504: `1683`,
    3505: `1683`,
    3506: `1683`,
    3507: `1684`,
    3508: `1684`,
    3509: `1684`,
    351: `76`,
    3510: `1686`,
    3511: `1686`,
    3512: `1686`,
    3513: `1687`,
    3514: `1688`,
    3515: `1688`,
    3516: `1689`,
    3517: `1689`,
    3518: `1689`,
    3519: `1691`,
    352: `77`,
    3520: `1692`,
    3521: `1693`,
    3522: `1694`,
    3523: `1694`,
    3524: `1694`,
    3525: `1695`,
    3526: `1695`,
    3527: `1696`,
    3528: `1697`,
    3529: `1698`,
    353: `77`,
    3530: `1700`,
    3531: `1701`,
    3532: `1702`,
    3533: `1703`,
    3534: `1703`,
    3535: `1703`,
    3536: `1704`,
    3537: `1704`,
    3538: `1705`,
    3539: `1705`,
    354: `78`,
    3540: `1705`,
    3541: `1706`,
    3542: `1706`,
    3543: `1706`,
    3544: `1708`,
    3545: `1709`,
    3546: `1709`,
    3547: `1709`,
    3548: `1710`,
    3549: `1711`,
    355: `78`,
    3550: `1712`,
    3551: `1713`,
    3552: `1714`,
    3553: `1716`,
    3554: `1717`,
    3555: `1717`,
    3556: `1717`,
    3557: `1718`,
    3558: `1718`,
    3559: `1719`,
    356: `78`,
    3560: `1720`,
    3561: `1720`,
    3562: `1720`,
    3563: `1721`,
    3564: `1721`,
    3565: `1722`,
    3566: `1723`,
    3567: `1723`,
    3568: `1723`,
    3569: `1724`,
    357: `78`,
    3570: `1724`,
    3571: `1725`,
    3572: `1726`,
    3573: `1726`,
    3574: `1726`,
    3575: `1727`,
    3576: `1727`,
    3577: `1728`,
    3578: `1729`,
    3579: `1729`,
    358: `78`,
    3580: `1729`,
    3581: `1730`,
    3582: `1730`,
    3583: `1730`,
    3584: `1731`,
    3585: `1732`,
    3586: `1732`,
    3587: `1733`,
    3588: `1733`,
    3589: `1733`,
    359: `78`,
    3590: `1734`,
    3591: `1735`,
    3592: `1735`,
    3593: `1736`,
    3594: `1738`,
    3595: `1739`,
    3596: `1740`,
    3597: `1740`,
    3598: `1741`,
    3599: `1742`,
    36: `2`,
    360: `78`,
    3600: `1743`,
    3601: `1744`,
    3602: `1745`,
    3603: `1746`,
    3604: `1748`,
    3605: `1749`,
    3606: `1749`,
    3607: `1749`,
    3608: `1752`,
    3609: `1752`,
    361: `78`,
    3610: `1753`,
    3611: `1753`,
    3612: `1754`,
    3613: `1755`,
    3614: `1756`,
    3615: `1757`,
    3616: `1757`,
    3617: `1758`,
    3618: `1759`,
    3619: `1759`,
    362: `78`,
    3620: `1760`,
    3621: `1760`,
    3622: `1761`,
    3623: `1761`,
    3624: `1762`,
    3625: `1763`,
    3626: `1764`,
    3627: `1764`,
    3628: `1765`,
    3629: `1766`,
    363: `78`,
    3630: `1767`,
    3631: `1768`,
    3632: `1768`,
    3633: `1769`,
    3634: `1770`,
    3635: `1771`,
    3636: `1773`,
    3637: `1774`,
    3638: `1774`,
    3639: `1775`,
    364: `79`,
    3640: `1777`,
    3641: `1778`,
    3642: `1779`,
    3643: `1780`,
    3644: `1781`,
    3645: `1781`,
    3646: `1782`,
    3647: `1783`,
    3648: `1784`,
    3649: `1785`,
    365: `79`,
    3650: `1787`,
    3651: `1787`,
    3652: `1788`,
    3653: `1788`,
    3654: `1789`,
    3655: `1790`,
    3656: `1791`,
    3657: `1791`,
    3658: `1791`,
    3659: `1792`,
    366: `80`,
    3660: `1792`,
    3661: `1792`,
    3662: `1794`,
    3663: `1794`,
    3664: `1795`,
    3665: `1796`,
    3666: `1796`,
    3667: `1797`,
    3668: `1799`,
    3669: `1800`,
    367: `81`,
    3670: `1800`,
    3671: `1801`,
    368: `81`,
    369: `81`,
    37: `2`,
    370: `82`,
    371: `83`,
    372: `84`,
    373: `84`,
    374: `85`,
    375: `86`,
    376: `86`,
    377: `86`,
    378: `87`,
    379: `87`,
    38: `2`,
    380: `88`,
    381: `88`,
    382: `89`,
    383: `89`,
    384: `92`,
    385: `92`,
    386: `93`,
    387: `93`,
    388: `94`,
    389: `95`,
    39: `2`,
    390: `95`,
    391: `96`,
    392: `97`,
    393: `97`,
    394: `98`,
    395: `99`,
    396: `99`,
    397: `100`,
    398: `101`,
    399: `101`,
    4: `2`,
    40: `2`,
    400: `102`,
    401: `103`,
    402: `104`,
    403: `105`,
    404: `105`,
    405: `107`,
    406: `107`,
    407: `108`,
    408: `108`,
    409: `109`,
    41: `2`,
    410: `110`,
    411: `110`,
    412: `111`,
    413: `111`,
    414: `111`,
    415: `112`,
    416: `113`,
    417: `114`,
    418: `114`,
    419: `115`,
    42: `2`,
    420: `115`,
    421: `115`,
    422: `116`,
    423: `117`,
    424: `117`,
    425: `118`,
    426: `118`,
    427: `119`,
    428: `119`,
    429: `119`,
    43: `2`,
    430: `120`,
    431: `121`,
    432: `121`,
    433: `122`,
    434: `123`,
    435: `123`,
    436: `123`,
    437: `124`,
    438: `124`,
    439: `125`,
    44: `2`,
    440: `126`,
    441: `127`,
    442: `128`,
    443: `128`,
    444: `129`,
    445: `130`,
    446: `130`,
    447: `131`,
    448: `132`,
    449: `133`,
    45: `2`,
    450: `134`,
    451: `134`,
    452: `135`,
    453: `136`,
    454: `137`,
    455: `139`,
    456: `139`,
    457: `139`,
    458: `141`,
    459: `141`,
    46: `2`,
    460: `142`,
    461: `142`,
    462: `142`,
    463: `144`,
    464: `144`,
    465: `144`,
    466: `144`,
    467: `144`,
    468: `144`,
    469: `145`,
    47: `2`,
    470: `145`,
    471: `146`,
    472: `147`,
    473: `149`,
    474: `150`,
    475: `152`,
    476: `152`,
    477: `153`,
    478: `153`,
    479: `153`,
    48: `2`,
    480: `154`,
    481: `154`,
    482: `155`,
    483: `155`,
    484: `156`,
    485: `156`,
    486: `156`,
    487: `157`,
    488: `157`,
    489: `158`,
    49: `2`,
    490: `158`,
    491: `159`,
    492: `159`,
    493: `160`,
    494: `161`,
    495: `167`,
    496: `167`,
    497: `169`,
    498: `170`,
    499: `170`,
    5: `2`,
    50: `2`,
    500: `171`,
    501: `172`,
    502: `172`,
    503: `173`,
    504: `174`,
    505: `174`,
    506: `174`,
    507: `175`,
    508: `175`,
    509: `175`,
    51: `2`,
    510: `176`,
    511: `177`,
    512: `177`,
    513: `178`,
    514: `178`,
    515: `179`,
    516: `180`,
    517: `186`,
    518: `187`,
    519: `187`,
    52: `2`,
    520: `188`,
    521: `188`,
    522: `188`,
    523: `188`,
    524: `188`,
    525: `188`,
    526: `188`,
    527: `188`,
    528: `188`,
    529: `188`,
    53: `2`,
    530: `189`,
    531: `189`,
    532: `190`,
    533: `191`,
    534: `191`,
    535: `191`,
    536: `192`,
    537: `193`,
    538: `194`,
    539: `194`,
    54: `2`,
    540: `195`,
    541: `196`,
    542: `196`,
    543: `196`,
    544: `197`,
    545: `197`,
    546: `198`,
    547: `198`,
    548: `199`,
    549: `200`,
    55: `2`,
    550: `200`,
    551: `201`,
    552: `202`,
    553: `202`,
    554: `203`,
    555: `203`,
    556: `204`,
    557: `205`,
    558: `205`,
    559: `205`,
    56: `2`,
    560: `206`,
    561: `206`,
    562: `206`,
    563: `208`,
    564: `208`,
    565: `209`,
    566: `210`,
    567: `210`,
    568: `211`,
    569: `212`,
    57: `2`,
    570: `212`,
    571: `213`,
    572: `214`,
    573: `214`,
    574: `215`,
    575: `216`,
    576: `216`,
    577: `217`,
    578: `218`,
    579: `218`,
    58: `2`,
    580: `218`,
    581: `219`,
    582: `219`,
    583: `219`,
    584: `220`,
    585: `220`,
    586: `221`,
    587: `222`,
    588: `222`,
    589: `222`,
    59: `2`,
    590: `223`,
    591: `223`,
    592: `223`,
    593: `224`,
    594: `224`,
    595: `225`,
    596: `225`,
    597: `226`,
    598: `227`,
    599: `227`,
    6: `2`,
    60: `2`,
    600: `228`,
    601: `229`,
    602: `229`,
    603: `230`,
    604: `231`,
    605: `233`,
    606: `233`,
    607: `234`,
    608: `234`,
    609: `235`,
    61: `2`,
    610: `235`,
    611: `235`,
    612: `237`,
    613: `237`,
    614: `238`,
    615: `238`,
    616: `238`,
    617: `239`,
    618: `239`,
    619: `240`,
    62: `2`,
    620: `240`,
    621: `241`,
    622: `241`,
    623: `241`,
    624: `242`,
    625: `242`,
    626: `243`,
    627: `243`,
    628: `244`,
    629: `244`,
    63: `2`,
    630: `244`,
    631: `245`,
    632: `245`,
    633: `246`,
    634: `246`,
    635: `247`,
    636: `247`,
    637: `248`,
    638: `249`,
    639: `255`,
    64: `2`,
    640: `255`,
    641: `257`,
    642: `258`,
    643: `258`,
    644: `259`,
    645: `260`,
    646: `260`,
    647: `261`,
    648: `262`,
    649: `262`,
    65: `2`,
    650: `262`,
    651: `263`,
    652: `263`,
    653: `263`,
    654: `264`,
    655: `265`,
    656: `265`,
    657: `266`,
    658: `266`,
    659: `267`,
    66: `2`,
    660: `268`,
    661: `274`,
    662: `274`,
    663: `275`,
    664: `275`,
    665: `276`,
    666: `277`,
    667: `277`,
    668: `278`,
    669: `278`,
    67: `2`,
    670: `280`,
    671: `281`,
    672: `281`,
    673: `282`,
    674: `283`,
    675: `283`,
    676: `284`,
    677: `285`,
    678: `286`,
    679: `286`,
    68: `2`,
    680: `286`,
    681: `287`,
    682: `287`,
    683: `287`,
    684: `288`,
    685: `289`,
    686: `289`,
    687: `290`,
    688: `290`,
    689: `291`,
    69: `2`,
    690: `292`,
    691: `298`,
    692: `298`,
    693: `299`,
    694: `300`,
    695: `300`,
    696: `301`,
    697: `302`,
    698: `302`,
    699: `303`,
    7: `2`,
    70: `2`,
    700: `303`,
    701: `304`,
    702: `305`,
    703: `305`,
    704: `305`,
    705: `306`,
    706: `306`,
    707: `306`,
    708: `308`,
    709: `308`,
    71: `2`,
    710: `309`,
    711: `310`,
    712: `310`,
    713: `311`,
    714: `312`,
    715: `312`,
    716: `313`,
    717: `314`,
    718: `314`,
    719: `315`,
    72: `2`,
    720: `316`,
    721: `316`,
    722: `317`,
    723: `318`,
    724: `318`,
    725: `318`,
    726: `319`,
    727: `319`,
    728: `319`,
    729: `320`,
    73: `2`,
    730: `320`,
    731: `321`,
    732: `322`,
    733: `322`,
    734: `322`,
    735: `323`,
    736: `323`,
    737: `323`,
    738: `324`,
    739: `324`,
    74: `2`,
    740: `325`,
    741: `325`,
    742: `326`,
    743: `327`,
    744: `327`,
    745: `328`,
    746: `329`,
    747: `329`,
    748: `330`,
    749: `331`,
    75: `2`,
    750: `333`,
    751: `333`,
    752: `334`,
    753: `334`,
    754: `335`,
    755: `336`,
    756: `336`,
    757: `336`,
    758: `337`,
    759: `337`,
    76: `2`,
    760: `338`,
    761: `338`,
    762: `339`,
    763: `340`,
    764: `340`,
    765: `341`,
    766: `342`,
    767: `343`,
    768: `343`,
    769: `344`,
    77: `2`,
    770: `344`,
    771: `344`,
    772: `345`,
    773: `345`,
    774: `346`,
    775: `346`,
    776: `347`,
    777: `348`,
    778: `348`,
    779: `349`,
    78: `2`,
    780: `350`,
    781: `350`,
    782: `351`,
    783: `352`,
    784: `354`,
    785: `355`,
    786: `355`,
    787: `356`,
    788: `356`,
    789: `356`,
    79: `2`,
    790: `356`,
    791: `356`,
    792: `356`,
    793: `356`,
    794: `356`,
    795: `356`,
    796: `356`,
    797: `357`,
    798: `357`,
    799: `358`,
    8: `2`,
    80: `2`,
    800: `359`,
    801: `359`,
    802: `359`,
    803: `360`,
    804: `361`,
    805: `362`,
    806: `362`,
    807: `363`,
    808: `364`,
    809: `364`,
    81: `2`,
    810: `364`,
    811: `365`,
    812: `365`,
    813: `366`,
    814: `366`,
    815: `367`,
    816: `367`,
    817: `368`,
    818: `368`,
    819: `368`,
    82: `2`,
    820: `370`,
    821: `370`,
    822: `371`,
    823: `371`,
    824: `371`,
    825: `372`,
    826: `372`,
    827: `373`,
    828: `373`,
    829: `373`,
    83: `2`,
    830: `374`,
    831: `375`,
    832: `375`,
    833: `377`,
    834: `378`,
    835: `378`,
    836: `379`,
    837: `380`,
    838: `380`,
    839: `381`,
    84: `2`,
    840: `382`,
    841: `383`,
    842: `383`,
    843: `383`,
    844: `384`,
    845: `385`,
    846: `386`,
    847: `387`,
    848: `388`,
    849: `393`,
    85: `2`,
    850: `393`,
    851: `394`,
    852: `395`,
    853: `395`,
    854: `396`,
    855: `397`,
    856: `398`,
    857: `398`,
    858: `399`,
    859: `399`,
    86: `4`,
    860: `399`,
    861: `400`,
    862: `401`,
    863: `401`,
    864: `402`,
    865: `402`,
    866: `402`,
    867: `402`,
    868: `402`,
    869: `402`,
    87: `4`,
    870: `402`,
    871: `402`,
    872: `402`,
    873: `402`,
    874: `403`,
    875: `403`,
    876: `404`,
    877: `405`,
    878: `405`,
    879: `405`,
    88: `5`,
    880: `406`,
    881: `407`,
    882: `408`,
    883: `408`,
    884: `409`,
    885: `410`,
    886: `410`,
    887: `410`,
    888: `411`,
    889: `411`,
    89: `5`,
    890: `412`,
    891: `412`,
    892: `413`,
    893: `413`,
    894: `414`,
    895: `414`,
    896: `414`,
    897: `416`,
    898: `416`,
    899: `417`,
    9: `2`,
    90: `5`,
    900: `417`,
    901: `417`,
    902: `418`,
    903: `418`,
    904: `420`,
    905: `421`,
    906: `421`,
    907: `422`,
    908: `423`,
    909: `423`,
    91: `6`,
    910: `424`,
    911: `425`,
    912: `425`,
    913: `425`,
    914: `426`,
    915: `427`,
    916: `428`,
    917: `429`,
    918: `430`,
    919: `435`,
    92: `7`,
    920: `435`,
    921: `436`,
    922: `437`,
    923: `437`,
    924: `438`,
    925: `439`,
    926: `439`,
    927: `440`,
    928: `440`,
    929: `440`,
    93: `8`,
    930: `441`,
    931: `442`,
    932: `442`,
    933: `443`,
    934: `443`,
    935: `443`,
    936: `443`,
    937: `443`,
    938: `443`,
    939: `443`,
    94: `9`,
    940: `443`,
    941: `443`,
    942: `443`,
    943: `444`,
    944: `444`,
    945: `445`,
    946: `446`,
    947: `446`,
    948: `446`,
    949: `447`,
    95: `10`,
    950: `448`,
    951: `449`,
    952: `449`,
    953: `450`,
    954: `451`,
    955: `451`,
    956: `451`,
    957: `452`,
    958: `452`,
    959: `453`,
    96: `11`,
    960: `453`,
    961: `454`,
    962: `454`,
    963: `455`,
    964: `455`,
    965: `455`,
    966: `457`,
    967: `457`,
    968: `458`,
    969: `459`,
    97: `11`,
    970: `460`,
    971: `460`,
    972: `461`,
    973: `461`,
    974: `462`,
    975: `463`,
    976: `463`,
    977: `464`,
    978: `465`,
    979: `466`,
    98: `12`,
    980: `466`,
    981: `467`,
    982: `467`,
    983: `468`,
    984: `468`,
    985: `469`,
    986: `470`,
    987: `478`,
    988: `478`,
    989: `480`,
    99: `13`,
    990: `481`,
    991: `481`,
    992: `482`,
    993: `483`,
    994: `483`,
    995: `484`,
    996: `485`,
    997: `485`,
    998: `485`,
    999: `486`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 4,
  stateSize: 459,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './wNT200.rsh:417:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './wNT200.rsh:146:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "arc200_approve": arc200_approve,
  "arc200_transfer": arc200_transfer,
  "arc200_transferFrom": arc200_transferFrom,
  "createAllowanceBox": createAllowanceBox,
  "createBalanceBox": createBalanceBox,
  "deposit": deposit,
  "deregister": deregister,
  "grant": grant,
  "nop": nop,
  "register": register,
  "touch": touch,
  "withdraw": withdraw
  };
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  createAllowanceBox: createAllowanceBox,
  createBalanceBox: createBalanceBox,
  deposit: deposit,
  deregister: deregister,
  grant: grant,
  nop: nop,
  register: register,
  touch: touch,
  withdraw: withdraw
  };
