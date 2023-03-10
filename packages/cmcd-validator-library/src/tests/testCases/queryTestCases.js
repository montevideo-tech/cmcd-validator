export const queryTestCases = [
  {
    description: 'Test: Correct Query',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Correct query with something else at the end',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&Test',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&Test',
    },
  },
  {
    description: 'Test: Correct query with something else before the CMCD= ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with something else before and after the CMCD query ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&Test2',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&Test2',
    },
  },
  {
    description: 'Test: Query undecoded',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid="21cf726cfe3d937b5f974f72bb5bd06a",ot=i,sf=d,sid="b248658d-1d1a-4039-91d0-8c08ba597da5",st=v,su',
    output: {
      valid: false,
      errors: [
        {
          type: 'parameter-encoding',
          key: undefined,
          value: undefined,
          description: 'Parameter is not encoded',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid="21cf726cfe3d937b5f974f72bb5bd06a",ot=i,sf=d,sid="b248658d-1d1a-4039-91d0-8c08ba597da5",st=v,su',
    },
  },
  {
    description: 'Test: Query with more than one CMCD=',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: undefined,
          value: undefined,
          description: 'Format is incorrect',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Query without CMCD=',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Qualabs=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'no-CMCD-request',
          key: undefined,
          value: undefined,
          description: 'No CMCD request found',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Qualabs=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Query with bool == true',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dtrue&Test2',
    output: {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'su',
          value: 'true',
          description: 'Value type is incorrect',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dtrue&Test2',
    },
  },
  {
    description: 'Test: Query with bool == false',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dfalse&Test2',
    output: {
      valid: false,
      errors: [
        {
          type: 'unnecessary-key',
          key: 'su',
          value: false,
          description: "The 'su' key should not be sent if the value is false",
        },
      ],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: false,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dfalse&Test2',
    },
  },
  {
    description: 'Test: String without ""',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3Db248658d-1d1a-4039-91d0-8c08ba597da5%2Cst%3Dv%2Csu&Test2',
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'sid',
          value: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
          description: 'Value does not meet requirements',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3Db248658d-1d1a-4039-91d0-8c08ba597da5%2Cst%3Dv%2Csu&Test2',
    },
  },
  {
    description: 'Test: Key value without = ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Coti%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'oti',
          value: undefined,
          description: 'Value type is incorrect',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Coti%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Query without ,',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22ot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'cid',
          value: '"21cf726cfe3d937b5f974f72bb5bd06a"ot',
          description: 'Value does not meet requirements',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22ot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Token with ""',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3D%22v%22%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'st',
          value: '"v"',
          description: 'Value does not meet requirements',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3D%22v%22%2Csu',
    },
  },
  {
    description: 'Test: Duplicated key',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'duplicate-key',
          key: undefined,
          value: undefined,
          description: 'Key/Keys are not unique',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%2Csu',
    },
  },
  {
    description: 'Test: Query with unknown key',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=Qualabs%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    output: {
      valid: false,
      errors: [
        {
          type: 'unknown-key',
          key: 'Qualabs',
          value: undefined,
          description: "The key 'Qualabs' is not reserved.",
        },
      ],
      parsedData: {
        Qualabs: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=Qualabs%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Check Type br as string',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D%223200%22%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    output: {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'br',
          value: '"3200"',
          description: 'Value type is incorrect',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D%223200%22%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Check Type br negative',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D-3200%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'br',
          value: -3200,
          description: "The 'br' value must greater than 0.",
        },
      ],
      parsedData: {
        br: -3200,
        bs: true,
        d: 4004,
        mtp: 25400,
        ot: 'v',
        rtp: 15000,
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D-3200%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Check Type d as string',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D3200%2Cbs%2Cd%3D%224004%22%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    output: {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'd',
          value: '"4004"',
          description: 'Value type is incorrect',
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D3200%2Cbs%2Cd%3D%224004%22%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query check nrr start-end',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query check nrr start-',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query check nrr -end',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%22-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%22-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Check bl round to nearest',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a???CMCD=bl%3D21307%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'bl',
          value: 21307,
          description: "'bl' value is not rounded to the nearest100ms.",
        },
      ],
      parsedData: {
        bl: 21307,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a???CMCD=bl%3D21307%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query bl ot = v',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query bl ot = a',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Da%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'a',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Da%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query bl ot = av',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dav%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'av',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dav%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: Correct query type of ot = i',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Di%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'i',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Di%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: Correct query type of ot = c',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dc%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'c',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dc%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: Correct query type of ot = tt',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dtt%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'tt',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dtt%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: Correct query type of ot = k',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dk%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output: {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'k',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dk%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: Correct query type of ot = o',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Do%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'o',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Do%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Warning: ot = Qualabs',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3DQualabs%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'ot',
          value: 'Qualabs',
          description: 'ot value does not meet the necessary requirements. Must be one of the following values: m,a,v,av,i,c,tt,k,o.',
        },
      ],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'Qualabs',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3DQualabs%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: bl without ot = i',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'bl',
          value: 21300,
          description: "The 'bl'key should only be sent with the 'ot' key.",
        },
      ],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: cid overlength',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30232ddsfasde-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-bb3as7-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'cid',
          value: 'faec5fc2-ac30232ddsfasde-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-bb3as7-0242ac130002',
          description: "Invalid value for key 'cid'. Maximum length is 64 characters.",
        },
      ],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30232ddsfasde-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-bb3as7-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30232ddsfasde-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-1asdfasdf1ea-bb3as7-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query nor ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=nor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=nor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    },
  },
  {
    description: 'Test: nor unencoded ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=nor%3D%22../300kbps/track.m4v%22%2Cnrr%3D%2212323-48763%22%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'parameter-encoding',
          key: 'nor',
          value: '../300kbps/track.m4v',
          description: "The key: 'nor' with its value: ../300kbps/track.m4v must be URLencoded.",
        },
      ],
      parsedData: {
        nor: '../300kbps/track.m4v',
        nrr: '12323-48763',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=nor%3D%22../300kbps/track.m4v%22%2Cnrr%3D%2212323-48763%22%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    },
  },
  {
    description: 'Test: Correct query type of sf = d ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query type of sf = h ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dh%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'h',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dh%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query type of sf = s ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Ds%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 's',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Ds%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query type of sf = o ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: sf = Qualabs ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3DQualabs%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'sf',
          value: 'Qualabs',
          description: 'sf value does not meet the necessary requirements. Must be one of the following values: d,h,s,o.',
        },
      ],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'Qualabs',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3DQualabs%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query type of st = v ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Correct query type of st = l ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: st = Qualabs ',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3DQualabs%2Csu%2Ctb%3D6000',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'st',
          value: 'Qualabs',
          description: 'st value does not meet the necessary requirements. Must be one of the following values: v,l.',
        },
      ],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1,
        rtp: 12000,
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'Qualabs',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3DQualabs%2Csu%2Ctb%3D6000',
    },
  },
];
