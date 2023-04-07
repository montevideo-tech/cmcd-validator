export const queryTestCases = [
  {
    description: 'Test: Query with su key bool == true',
    query:
    'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dtrue&Test2',
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'su',
          value: 'true',
          description: 'If the value is TRUE, the = and the value must be omitted',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3Dtrue&Test2',
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
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Qualabs=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Correct query with something else at the end',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&Test',
    output: {
      valid: true,
      errors: [],
      warnings: [],
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
      warnings: [],
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
      warnings: [],
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
      warnings: [],
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
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?Test&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
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
          type: 'incorrect-format',
          key: 'sid',
          value: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
          description: 'Incorrect format for key: sid',
        },
      ],
      warnings: [],
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
          type: 'incorrect-format',
          key: 'oti',
          value: undefined,
          description: 'key-value pair not separated by =.',
        },
      ],
      warnings: [],
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
          type: 'incorrect-format',
          key: 'cid="21cf726cfe3d937b5f974f72bb5bd06a"ot=i',
          value: undefined,
          description: 'key-value pair not separated by =.',
        },
      ],
      warnings: [],
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
          type: 'incorrect-format',
          key: 'st',
          value: '"v"',
          description: 'Incorrect format for key: st',
        },
      ],
      warnings: [],
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
          key: 'su',
          value: undefined,
          description: "The key 'su' is repeated.",
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%2Csu',
    },
  },
  // {
  //   description: 'Test: Query with unknown key',
  //   query:
  //     'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=Qualabs%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
  //   output: {
  //     valid: false,
  //     errors: [
  //       {
  //         type: 'unknown-key',
  //         key: 'Qualabs',
  //         value: '21cf726cfe3d937b5f974f72bb5bd06a',
  //         description: "The key 'Qualabs' is not reserved.",
  //       },
  //     ],
  //     warnings: [],
  //     parsedData: {
  //       Qualabs: '21cf726cfe3d937b5f974f72bb5bd06a',
  //       ot: 'i',
  //       sf: 'd',
  //       sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
  //       st: 'v',
  //       su: true,
  //     },
  //     rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=Qualabs%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
  //   },
  // },
  {
    description: 'Test: Check Type br as string',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D%223200%22%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'br',
          value: '"3200"',
          description: 'The value for the key "br" must be a number',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D%223200%22%2Cbs%2Cd%3D4004%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
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
          type: 'incorrect-format',
          key: 'd',
          value: '"4004"',
          description: 'The value for the key "d" must be a number',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a??CMCD=br%3D3200%2Cbs%2Cd%3D%224004%22%2Cmtp%3D25400%2Cot%3Dv%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Query su = "Qualabs"',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D%22Qualabs%22',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'su',
          value: '"Qualabs"',
          description: 'If the value is TRUE, the = and the value must be omitted',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D%22Qualabs%22',
    },
  },
  {
    description: 'Test: Query su = 23',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'su',
          value: '23',
          description: 'If the value is TRUE, the = and the value must be omitted',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23',
    },
  },
  {
    description: 'Test: Warning no alphabetical order #1',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=su%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv',
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-alphabetical-order',
          key: undefined,
          value: undefined,
          description: 'Keys are not arranged alphabetically',
        },
      ],
      parsedData: {
        su: true,
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=su%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv',
    },
  },
  {
    description: 'Test: Warning no alphabetical order #2',
    query:
    'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbs%2Cbr%3D3200%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000',
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-alphabetical-order',
          key: undefined,
          value: undefined,
          description: 'Keys are not arranged alphabetically',
        },
      ],
      parsedData: {
        bl: 21300,
        bs: true,
        br: 3200,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1.08,
        rtp: 12000,
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_7.m4a?CMCD=bl%3D21300%2Cbs%2Cbr%3D3200%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000',
    },
  },
  {
    description: 'Test: Query malformed',
    query:
    'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?sdfsdfCMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%0x26qualabs',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'query-malformed',
          key: undefined,
          value: undefined,
          description: 'The query is malformed',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?sdfsdfCMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%0x26qualabs',
    },
  },
  {
    description: 'Test: If the request already bears a query string, checks if there is a "&" before CMCD query #1',
    query:
    'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?qualabsCMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&hola',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'no-ampersand-between-requests:',
          key: undefined,
          value: undefined,
          description: 'Ampersand required between two or more requests',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?qualabsCMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&hola',
    },
  },
  {
    description: 'Test: If the request already bears a query string, checks if there is a "&" before CMCD query #2',
    query:
    'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?qualabs&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&hola',
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?qualabs&CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu&hola',
    },
  },
];
