import { CMCDQueryValidator } from '../index.js';

const query = {
  description:
    "Test: Correct Query with configuration using customKey and specificKey",
  query:
    "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
  config: {
    customKey: [
      {
        key: "qualabs-br",
        type: "boolean",
        header: "CMCD-Object",
      },
    ],
    specificKey: ["br", "sid"],
  },
  output: {
    valid: true,
    errors: [],
    parsedData: {
      cid: "21cf726cfe3d937b5f974f72bb5bd06a",
      ot: "i",
      "qualabs-br": false,
      sf: "d",
      sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
      st: "v",
      su: true,
    },
    rawData:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
  },
};
