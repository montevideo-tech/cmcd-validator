export const jsonTestCases = [
    { description: 'Test JSON Correct', json: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}' },
    { description: 'Test JSON Correct', json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}' },
    { description: 'Test JSON Correct', json: '{"bs":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}' },
    { description: 'Test JSON Correct', json: '{"bs":true,"su":true}' },
    { description: 'Test JSON Wrong', json: '{"d":4004,"com.example-myNumericKey":500,"com.example-myStringKey":"myStringValue"}' },
    { description: 'Test JSON Correct', json: '{"nor":"..%2F300kbps%2Fsegment35.m4v","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}' },
    { description: 'Test JSON Correct', json: '{"nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}' },
    { description: 'Test JSON Correct', json: '{"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}' },
    { description: 'Test JSON Correct', json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}' },

  ];