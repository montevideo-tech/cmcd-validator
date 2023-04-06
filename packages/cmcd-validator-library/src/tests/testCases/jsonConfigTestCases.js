export const jsonConfigTestCases = [
  {
    description: 'Test JSON Correct with configuration only using specifickey',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
        {
          valid: true,
          errors: [],
          warnings: [],
          parsedData: {
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct with configuration setting two specifickeys but providing just one in the query',
    json: '{"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
        {
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
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct with configuration using only specifickey, ingoring the error in st key',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": "qualabs", "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
        {
          valid: true,
          errors: [],
          warnings: [],
          parsedData: {
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 'qualabs',
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": "qualabs", "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Incorrect Json with configuration using only specifickey, with wrong type in br key',
    json: '{"br": "qualabs","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
        {
          valid: false,
          errors: [
            {
              type: 'wrong-type-value',
              key: 'br',
              value: 'qualabs',
              description: 'Value type is incorrect',
            },
          ],
          warnings: [],
          parsedData: undefined,
          rawData: '{"br": "qualabs","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct  with configuration using only customKey',
    json: '{"com.qualabs-br": false,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
      ],
    },
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
            'com.qualabs-br': false,
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"com.qualabs-br": false,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct with configuration using customKey with two keys',
    json: '{"com.qualabs-br": false,"com.qualabs-bs": 45,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
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
            'com.qualabs-br': false,
            'com.qualabs-bs': 45,
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"com.qualabs-br": false,"com.qualabs-bs": 45,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct with configuration using customKey with two keys but providing just one in the query',
    json: '{"com.qualabs-br": false,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
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
            {
              description: 'A specific/custom key was set but not sent',
              key: 'com.qualabs-bs',
              type: 'specific-keys-not-sent',
              value: undefined,
            },
          ],
          parsedData: {
            'com.qualabs-br': false,
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"com.qualabs-br": false,"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Correct with a duplicated key but not included in the specific key',
    json: '{"br": 3200,"bs":true,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
        {
          valid: true,
          errors: [],
          warnings: [],
          parsedData: {
            br: 3200,
            bs: true,
            d: 4004,
            mtp: 25400,
            ot: 'v',
            rtp: 15000,
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            tb: 6000,
          },
          rawData: '{"br": 3200,"bs":true,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Incorrect with a duplicated key included in the specific key',
    json: '{"br": 3200,"bs":true,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      specificKey: ['bs', 'sid'],
    },
    output:
        {
          valid: false,
          errors: [
            {
              type: 'duplicate-key',
              key: 'bs',
              value: undefined,
              description: "The key 'bs' is repeated.",
            },
          ],
          warnings: [],
          parsedData: undefined,
          rawData: '{"br": 3200,"bs":true,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
  {
    description: 'Test JSON Incorrect with custom key duplicated and no specific keys.',
    json: '{"com.qualabs-br":false,"com.qualabs-br":false,"br": 3200,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
        },
      ],
    },
    output:
        {
          valid: false,
          errors: [
            {
              type: 'duplicate-key',
              key: 'com.qualabs-br',
              value: undefined,
              description: "The key 'com.qualabs-br' is repeated.",
            },
          ],
          warnings: [],
          parsedData: undefined,
          rawData: '{"com.qualabs-br":false,"com.qualabs-br":false,"br": 3200,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
        },
  },
];
