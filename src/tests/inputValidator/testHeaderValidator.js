import { headerValidator } from "../../inputValidator/index.js";
import { headerTestCases } from "../testCases/headerTestCases.js";


const testHeaderValidator = ()=>{
  const testCases = headerTestCases; 
  testCases.forEach((test) => {
    const err = [];
    console.log(test.description);
    headerValidator(test.header, err);
    console.log('\n');
  })
};

export default testHeaderValidator;