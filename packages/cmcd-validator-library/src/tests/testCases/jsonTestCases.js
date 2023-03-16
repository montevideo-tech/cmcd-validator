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
      rawData: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
        tb: 6000
      },
      rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
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
      rawData: '{"bs":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
          type: "no-sid-received",
          key: undefined,
          value: undefined,
          description: "No sid received from CMCD message",
        }
       ],
       parsedData: { bs: true, su: true },
      rawData: '{"bs":true,"su":true}'
    }
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
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66'
      },
      rawData: '{"nor":"..%2F300kbps%2Fsegment35.m4v","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
          type: "no-sid-received",
          key: undefined,
          value: undefined,
          description: "No sid received from CMCD message",
        }
       ],
       parsedData: { bs: false, su: true },
      rawData: '{"bs":false,"su":true}'
    }
  },
  {
    description: 'Test: Json with su == false',
    json: '{"bs":true,"su":false}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'unnecessary-key',
          key: 'su',
          value: false,
          description: "The 'su' key should not be sent if the value is false"
        }
      ],
       warnings: [
        {
          type: "no-sid-received",
          key: undefined,
          value: undefined,
          description: "No sid received from CMCD message",
        }
       ],
       parsedData: { bs: true, su: false },
      rawData: '{"bs":true,"su":false}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"sid": 6e2fb550-c457-11e9-bb97-0800200c9a66}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{sid: "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"br": 3200,"bs":true "d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp" 15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":d,"sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
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
          description: 'Json format is not valid'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,sf:"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
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
          key: undefined,
          value: undefined,
          description: 'Key/Keys are not unique'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"bs":true,"rtp":15000,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: Json with unknown key',
    json: '{"unknown-key":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'unknown-key',
          key: 'unknown-key',
          value: undefined,
          description: "The key 'unknown-key' is not reserved."
        }
      ],
       warnings: [
        {
          type: "no-alphabetical-order",
          key: undefined,
          value: undefined,
          description: "Keys are not arranged alphabetically",
        }
       ],
       parsedData: {
        'unknown-key': true,
        rtp: 15000,
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66'
      },
      rawData: '{"unknown-key":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
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
          description: 'Value type is incorrect'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"br": "3200","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
  },
  {
    description: 'Test: Check Type br negative',
    json: '{"br": -3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'br',
          value: -3200,
          description: "The 'br' value must greater than 0."
        }
      ],
       warnings: [],
       parsedData: {
        br: -3200,
        bs: true,
        d: 4004,
        mtp: 25400,
        ot: 'v',
        rtp: 15000,
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        tb: 6000
      },
      rawData: '{"br": -3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
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
          description: 'Value type is incorrect'
        }
      ],
       warnings: [],
       parsedData: undefined,
      rawData: '{"br": 3200,"bs":true,"d": "4004","mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}'
    }
  },
  {
    description: 'Test: Correct json check nrr start-end',
    json: '{"nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [],
       parsedData: { nrr: '12323-48763', sid: '6e2fb550-c457-11e9-bb97-0800200c9a66' },
      rawData: '{"nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: Correct json check nrr start-',
    json: '{"nrr":"12323-","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [],
       parsedData: { nrr: '12323-', sid: '6e2fb550-c457-11e9-bb97-0800200c9a66' },
      rawData: '{"nrr":"12323-","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: Correct json check nrr -end',
    json: '{"nrr":"-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [],
       parsedData: { nrr: '-48763', sid: '6e2fb550-c457-11e9-bb97-0800200c9a66' },
      rawData: '{"nrr":"-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: Check bl round to nearest',
    json: '{"bl":21307,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'bl',
          value: 21307,
          description: "'bl' value is not rounded to the nearest100ms."
        }
      ],
       warnings: [],
       parsedData: {
        bl: 21307,
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
        tb: 6000
      },
      rawData: '{"bl":21307,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json bl ot = v',
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
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json bl ot = a',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"a","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
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
        ot: 'a',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"a","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json bl ot = av',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"av","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
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
        ot: 'av',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"av","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of ot = i',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"i","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'i',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"i","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of ot = c',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"c","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'c',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"c","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of ot = tt',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"tt","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'tt',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"tt","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of ot = k',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"k","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'k',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"k","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of ot = o',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"o","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'o',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"o","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: ot = Qualabs',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"qualabs","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'ot',
          value: 'qualabs',
          description: 'ot value does not meet the necessary requirements. Must be one of the following values: m,a,v,av,i,c,tt,k,o.'
        }
      ],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        ot: 'qualabs',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"qualabs","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: bl without ot',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: "bl key should only be sent with an object type of a, v or av",
          key: "bl",
          type: "bl-with-wrong-ot-value",
          value: 21300,
        }
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
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: cid overlength',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'cid',
          value: 'faec5fc2-ac30-11ea-bb37-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002',
          description: "Invalid value for key 'cid'. Maximum length is 64 characters."
        }
      ],
       warnings: [],
       parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002',
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
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json nor ',
    json: '{"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [],
       parsedData: {
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66'
      },
      rawData: '{"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: nor unencoded ',
    json: '{"nor":"../300kbps/track.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'parameter-encoding',
          key: 'nor',
          value: '../300kbps/track.m4v',
          description: "The key: 'nor' with its value: ../300kbps/track.m4v must be URLencoded."
        }
      ],
       warnings: [],
       parsedData: {
        nor: '../300kbps/track.m4v',
        nrr: '12323-48763',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66'
      },
      rawData: '{"nor":"../300kbps/track.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}'
    }
  },
  {
    description: 'Test: Correct json type of sf = d ',
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
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of sf = h ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"h","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
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
        sf: 'h',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"h","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of sf = s ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"s","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
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
        sf: 's',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"s","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of sf = o ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"o","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
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
        sf: 'o',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"o","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: sf = Qualabs ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"qualabs","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'sf',
          value: 'qualabs',
          description: 'sf value does not meet the necessary requirements. Must be one of the following values: d,h,s,o.'
        }
      ],
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
        sf: 'qualabs',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"qualabs","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of st = v ',
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
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json type of st = l ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
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
        st: 'l',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: st = Qualabs ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"qualabs","su":true,"tb":6000}',
    output: 
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'st',
          value: 'qualabs',
          description: 'st value does not meet the necessary requirements. Must be one of the following values: v,l.'
        }
      ],
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
        st: 'qualabs',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"qualabs","su":true,"tb":6000}'
    }
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
          description: 'Keys are not arranged alphabetically'
        }
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
        tb: 6000
      },
      rawData: '{"bl":21300,"bs":true,"br":3200,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}'
    }
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
          description: 'Keys are not arranged alphabetically'
        }
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
        tb: 6000
      },
      rawData: '{"bl":21300,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","br":3200,"bs":true,"d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Warning no Sid present',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [
        {
          type: "no-sid-received",
          key: undefined,
          value: undefined,
          description: "No sid received from CMCD message",
        }
       ],
       parsedData: {
        br: 3200,
        bs: true,
        d: 4004,
        mtp: 25400,
        ot: 'v',
        rtp: 15000,
        tb: 6000
      },
      rawData: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json with pr version != 1',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":2.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
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
        pr: 2.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":2.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json with pr warning ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [
        {
          type: 'pr-value',
          key: 'pr',
          value: 1,
          description: 'Should only be sent if not equal to 1.00'
        }
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
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}'
    }
  },
  {
    description: 'Test: Correct json with v warning ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000,"v":1}',
    output: 
    {
      valid: true,
      errors: [],
       warnings: [
        {
          type: 'v-value',
          key: 'v',
          value: 1,
          description: 'Client should omit this field if the version is 1'
        }
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
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'l',
        su: true,
        tb: 6000,
        v: 1,
      },
      rawData: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000,"v":1}'
    }
  },
];
