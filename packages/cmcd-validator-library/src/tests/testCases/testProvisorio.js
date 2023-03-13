const hola = [
    {
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
      },
      {
        description: "Test: Correct Query with configuration using only customKey",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        config: {
          customKey: [
            {
              key: "qualabs-br",
              type: "boolean",
            },
          ],
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
      },

      {
        description:
          "Test: Correct Query with configuration using only customKey and two keys",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Cqualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        config: {
          customKey: [
            {
              key: "qualabs-br",
              type: "boolean",
            },
            {
              key: "qualabs-bs",
              type: "number",
            },
          ],
        },
        output: {
          valid: true,
          errors: [],
          parsedData: {
            cid: "21cf726cfe3d937b5f974f72bb5bd06a",
            ot: "i",
            "qualabs-br": false,
            "qualabs-bs": 45,
            sf: "d",
            sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
            st: "v",
            su: true,
          },
          rawData:
            "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Cqualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        },
      },
      {
        description:
          "Test: Incorrect Query with configuration using specificKey with wrong key",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        config: {
          specificKey: ["brc", "sid"],
        },
        output: {
          valid: false,
          errors: [
            {
              description: "The key does not mach with CMCD keys",
              key: "brc",
              type: "unknown-specific-key",
              value: undefined,
            },
          ],
          parsedData: undefined,
          rawData:
            "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        },
      },
      {
        description:
          "Test: incorrect Query with configuration using only customKey with wrong type value",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        config: {
          customKey: [
            {
              key: "qualabs-br",
              type: "qualabs",
            },
          ],
        },
        output: {
          valid: false,
          errors: [
            {
              description: "The type does not mach with CMCD types",
              key: "qualabs-br",
              type: "wrong-custom-type",
              value: "qualabs",
            },
          ],
          parsedData: undefined,
          rawData:
            "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        },
      },
      {
        description:
          "Test: Correct Query with configuration using only specifickey",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
        config: {
          specificKey: ["su", "sid"],
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
      },
      {
        description:
          "Test: Incorrect Query with configuration using only specifickey with wrong value type",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23",
        config: {
          specificKey: ["su", "sid"],
        },
        output: {
          valid: false,
          errors: [
            {
              description: "Value type is incorrect",
              key: "su",
              type: "wrong-type-value",
              value: "23",
            },
          ],
          parsedData: undefined,
          rawData:
            "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23",
        },
      },
      {
        description:
          "Test: Incorrect Query with configuration using only specifickey with wrong value type",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
          config: {
            specificKey: ["su", "sid"],
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
      },
      {
        description:
          "Test: Correct Query with configuration using only specifickey with wrong value",
        query:
          "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dpp%2Csu",
        config: {
          specificKey: ["su", "sid"],
        },
        output: {
          valid: true,
          errors: [],
          parsedData: {
            cid: "21cf726cfe3d937b5f974f72bb5bd06a",
            ot: "i",
            sf: "d",
            sid: "b248658d-1d1a-4039-91d0-8c08ba597da5",
            st: "pp",
            su: true,
          },
          rawData:
            "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dpp%2Csu",
        },
      },
]