export const queryConfigTestCases = [
  {
    description:
      "Test: Correct Query with configuration using only specifickey",
    query:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
    config: {
      specificKey: ["br", "sid"],
    },
    output: {
      valid: true,
      errors: [],
      parsedData: {
        br: 3200,
        cid: "21cf726cfe3d937b5f974f72bb5bd06a",
        ot: "i",
        sf: "d",
        sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
        st: "v",
        su: true,
      },
      rawData:
        "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
    },
  },
  {
    description:
      "Test: Correct Query with configuration setting two specifickeys but providing just one in the query",
    query:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
    config: {
      specificKey: ["br", "sid"],
    },
    output: {
      valid: true,
      errors: [],
      parsedData: {
        cid: "21cf726cfe3d937b5f974f72bb5bd06a",
        ot: "i",
        sf: "d",
        sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
        st: "v",
        su: true,
      },
      rawData:
        "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
    },
  },
  {
    description:
      "Test: Correct Query with configuration using only specifickey, ingoring the error in st key",
    query:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu",
    config: {
      specificKey: ["br", "sid"],
    },
    output: {
      valid: true,
      errors: [],
      parsedData: {
        br: 3200,
        cid: "21cf726cfe3d937b5f974f72bb5bd06a",
        ot: "i",
        sf: "d",
        sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
        st: "qualabs",
        su: true,
      },
      rawData:
        "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu",
    },
  },
  {
    description:
      "Test: Incorrect Query with configuration using only specifickey, with wrong type in br key",
    query:
      "https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3Dqualabs%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67",
    config: {
      specificKey: ["br", "sid"],
    },
    output: {
      valid: false,
      errors: [
        {
          type: "wrong-type-value",
          key: "br",
          value: "qualabs",
          description: "Value type is incorrect",
        },
      ],
      parsedData: undefined,
      rawData:
        "https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3Dqualabs%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67",
    },
  },
];
