import { CMCDQueryValidator } from '../index.js';

const query =   {
    description:
      "Test: Incorrect Query with configuration using only specifickey, with wrong type in br key",
    query:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3D%22qualabs%22%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67",
    config: {
      specificKey: ["br", "sid"],
    },
    // output: {
    //   valid: false,
    //   errors: [],
    //   parsedData: {
    //     bl: 11600,
    //     br: '',
    //     cid: "21cf726cfe3d937b5f974f72bb5bd06a",
    //     d: 4011,
    //     dl: 11600,
    //     mtp: 3900,
    //     nor: "bbb_a64k_6.m4a",
    //     ot: "a",
    //     rtp: 200,
    //     sf: "d",
    //     sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
    //     st: "v",
    //     tb: 67,
    //   },
    //   rawData:
    //     "https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3D%22qualabs%22%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67",
    // },
  };

  console.log(CMCDQueryValidator(query.query, query.config));