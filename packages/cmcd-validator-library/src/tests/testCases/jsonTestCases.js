export const jsonTestCases = [
  {
    description: 'Test JSON Correct',
    json: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: { sid: '6e2fb550-c457-11e9-bb97-0800200c9a66' },
      rawData: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test JSON Correct',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
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
    description: 'Test JSON Correct',
    json: '{"bs":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: { bs: true, rtp: 15000, sid: '6e2fb550-c457-11e9-bb97-0800200c9a66' },
      rawData: '{"bs":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test JSON Correct',
    json: '{"bs":true,"su":true}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-sid-received',
          key: undefined,
          value: undefined,
          description: 'No sid received from CMCD message',
        },
      ],
      parsedData: { bs: true, su: true },
      rawData: '{"bs":true,"su":true}',
    },
  },
  {
    description: 'Test JSON Correct',
    json: '{"nor":"..%2F300kbps%2Fsegment35.m4v","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        nor: '..%2F300kbps%2Fsegment35.m4v',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
      },
      rawData: '{"nor":"..%2F300kbps%2Fsegment35.m4v","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test JSON Correct',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
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
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    },
  },

  {
    description: 'Test: Double JSON',
    json: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test: Correct json with bool == false',
    json: '{"bs":false,"su":true}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-sid-received',
          key: undefined,
          value: undefined,
          description: 'No sid received from CMCD message',
        },
      ],
      parsedData: { bs: false, su: true },
      rawData: '{"bs":false,"su":true}',
    },
  },
  {
    description: 'Test: String without ""',
    json: '{"sid": 6e2fb550-c457-11e9-bb97-0800200c9a66}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"sid": 6e2fb550-c457-11e9-bb97-0800200c9a66}',
    },
  },
  {
    description: 'Test: Key without ""',
    json: '{sid: "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{sid: "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test: Json without ,',
    json: '{"br": 3200,"bs":true "d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"br": 3200,"bs":true "d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    },
  },
  {
    description: 'Test: Json without :',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp" 15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp" 15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    },
  },
  {
    description: 'Test: Token value without ""',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":d,"sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":d,"sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    },
  },
  {
    description: 'Test: Token key without ""',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,sf:"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-json',
          key: undefined,
          value: undefined,
          description: 'Json format is not valid',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,sf:"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    },
  },
  {
    description: 'Test: Duplicated key',
    json: '{"bs":true,"rtp":15000,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'duplicate-key',
          key: 'rtp',
          value: undefined,
          description: 'The key rtp is repeated.',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"bs":true,"rtp":15000,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    },
  },
  {
    description: 'Test: Check Type br as string',
    json: '{"br": "3200","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'br',
          value: '3200',
          description: 'Value type is incorrect',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"br": "3200","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    },
  },
  {
    description: 'Test: Check Type d as string',
    json: '{"br": 3200,"bs":true,"d": "4004","mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    output:
    {
      valid: false,
      errors: [
        {
          type: 'wrong-type-value',
          key: 'd',
          value: '4004',
          description: 'Value type is incorrect',
        },
      ],
      warnings: [],
      parsedData: undefined,
      rawData: '{"br": 3200,"bs":true,"d": "4004","mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    },
  },
  {
    description: 'Test: Warning no alphabetical order #1',
    json: '{"bl":21300,"bs":true,"br":3200,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
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
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000,
      },
      rawData: '{"bl":21300,"bs":true,"br":3200,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
    },
  },
  {
    description: 'Test: Warning no alphabetical order #2',
    json: '{"bl":21300,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","br":3200,"bs":true,"d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
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
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        br: 3200,
        bs: true,
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000,
      },
      rawData: '{"bl":21300,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","br":3200,"bs":true,"d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
    },
  },
];
