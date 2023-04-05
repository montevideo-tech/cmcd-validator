export const queryConfigTestCases = [
  {
    description:
      'Test: Correct Query with configuration using only specifickey',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      specificKey: ['br', 'sid'],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        br: 3200,
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with configuration setting two specifickeys but providing just one in the query',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      specificKey: ['br', 'sid'],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [
        {
          description: 'A specific/custom key was set but not sent',
          key: 'br',
          type: 'specific-keys-not-sent',
          value: undefined,
        },
      ],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with configuration using only specifickey, ingoring the error in st key',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
    config: {
      specificKey: ['br', 'sid'],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        br: 3200,
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'qualabs',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
    },
  },
  {
    description:
      'Test: Incorrect Query with configuration using only specifickey, with wrong type in br key',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3Dqualabs%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67',
    config: {
      specificKey: ['br', 'sid'],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'br',
          value: 'qualabs',
          description: 'The value for the key "br" must be a number',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_a64k/bbb_a64k_5.m4a?CMCD=bl%3D11600%2Cbr%3Dqualabs%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4011%2Cdl%3D11600%2Cmtp%3D3900%2Cnor%3D%22bbb_a64k_6.m4a%22%2Cot%3Da%2Crtp%3D200%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D67',
    },
  },
  {
    description:
      'Test: Incorrect Query with configuration using specificKey with wrong key',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      specificKey: ['brc', 'sid'],
    },
    output: {
      valid: false,
      errors: [
        {
          description: 'The key does not mach with CMCD keys',
          key: 'brc',
          type: 'unknown-specific-key',
          value: undefined,
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Incorrect Query with configuration using only specifickey with wrong value type',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23',
    config: {
      specificKey: ['su', 'sid'],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'su',
          description: 'If the value is TRUE, the = and the value must be omitted',
          value: '23',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu%3D23',
    },
  },
  {
    description:
      "Test: Correct Query with configuration using only specifickey, adding 'st' wrong value",
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
    config: {
      specificKey: ['su', 'sid'],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'qualabs',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
    },
  },
  {
    description: 'Test: Correct Query with configuration using only customKey',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
      ],
    },
    output: {
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
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': false,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with configuration using customKey and specificKey',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
          header: 'CMCD-Object',
        },
      ],
      specificKey: ['sid'],
    },
    output: {
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
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': false,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with configuration using customKey with two keys',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
        {
          key: 'com.qualabs-bs',
          type: 'number',
        },
      ],
    },
    output: {
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
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': false,
        'com.qualabs-bs': 45,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Correct Query with configuration using customKey with two keys but providing just one in the query',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
        {
          key: 'com.qualabs-bs',
          type: 'number',
        },
      ],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-alphabetical-order',
          key: undefined,
          value: undefined,
          description: 'Keys are not arranged alphabetically',
        },
        {
          description: 'A specific/custom key was set but not sent',
          key: 'com.qualabs-bs',
          type: 'specific-keys-not-sent',
          value: undefined,
        },
      ],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': false,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Incorrect Query with configuration using only customKey with wrong type value',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'qualabs',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          description: 'The type does not mach with CMCD types',
          key: 'com.qualabs-br',
          type: 'wrong-custom-type',
          value: 'qualabs',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Incorrect Query with configuration using only customKey sending true value',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dtrue%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'incorrect-format',
          key: 'com.qualabs-br',
          value: 'true',
          description: 'If the value is TRUE, the = and the value must be omitted',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dtrue%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #1',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: '--qualabs-br--',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-custom-key',
          key: '--qualabs-br--',
          value: undefined,
          description: 'Custom key names MUST carry a hyphenated prefix',
        },
      ],
      warnings: [
        {
          description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
          key: undefined,
          type: 'customkey-without-reversedns',
          value: undefined,
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #2',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: '-qualabs-',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-custom-key',
          key: '-qualabs-',
          value: undefined,
          description: 'Custom key names MUST carry a hyphenated prefix',
        },
      ],
      warnings: [
        {
          description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
          key: undefined,
          type: 'customkey-without-reversedns',
          value: undefined,
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #3',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: '-',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-custom-key',
          key: '-',
          value: undefined,
          description: 'Custom key names MUST carry a hyphenated prefix',
        },
      ],
      warnings: [
        {
          description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
          key: undefined,
          type: 'customkey-without-reversedns',
          value: undefined,
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #4',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br.com%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'qualabs-br.com',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          type: 'invalid-custom-key',
          key: 'qualabs-br.com',
          value: undefined,
          description: 'Custom key names MUST carry a hyphenated prefix',
        },
      ],
      warnings: [
        {
          description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
          key: undefined,
          type: 'customkey-without-reversedns',
          value: undefined,
        },
      ],
      parsedData: undefined,
      rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br.com%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description: 'Test: Warning bad Reverse DNS on customKey',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'qualabs-br',
          type: 'boolean',
        },
      ],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [
        {
          description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
          key: undefined,
          type: 'customkey-without-reversedns',
          value: undefined,
        },
        {
          type: 'no-alphabetical-order',
          key: undefined,
          value: undefined,
          description: 'Keys are not arranged alphabetically',
        },
      ],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'qualabs-br': false,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: First stage checking if custom config is not persited, adding customKey config #1',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
        {
          key: 'com.qualabs-bs',
          type: 'number',
        },
      ],
    },
    output: {
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
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': false,
        'com.qualabs-bs': 45,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
  {
    description:
      'Test: Second stage checking if custom config is not persited, without custom key config #2',
    query:
      'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    config: {
      customKey: [
        {
          key: 'com.qualabs-bs',
          type: 'number',
        },
      ],
    },
    output: {
      valid: false,
      errors: [
        {
          description: "The key 'com.qualabs-br' is not reserved.",
          key: 'com.qualabs-br',
          type: 'unknown-key',
          value: 'false',
        },
      ],
      warnings: [
        {
          type: 'no-alphabetical-order',
          key: undefined,
          value: undefined,
          description: 'Keys are not arranged alphabetically',
        },
      ],
      parsedData: {
        cid: '21cf726cfe3d937b5f974f72bb5bd06a',
        ot: 'i',
        'com.qualabs-br': 'false',
        'com.qualabs-bs': 45,
        sf: 'd',
        sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
        st: 'v',
        su: true,
      },
      rawData:
        'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
    },
  },
];
