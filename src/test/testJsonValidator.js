import { jsonValidator } from '../jsonValidator.js'

export const testJsonValidator = () => {
  let result = '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}';
  console.log("Test correct JSON");
  console.log(jsonValidator(result));

  //Missing closing }
  result = '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000';
  console.log("Test incorrect JSON");
  console.log(jsonValidator(result));

  //Missing coma
  result = '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true"tb":6000}';
  console.log("Test incorrect JSON");
  console.log(jsonValidator(result));

  //Bad field, bl shold be "bl"
  result = '{ bl:21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}';
  console.log("Test incorrect JSON");
  console.log(jsonValidator(result));
  
}