import { headerVal } from "../../headerValidator.js";
import { headerTestCases } from "../testCases/headerTestCases.js";


export const testHeaderVal = ()=>{
  const testCases = headerTestCases; 
  testCases.forEach((test) => {
    const err = [];
    console.log(test.description);
    headerVal(test.header, err);
    console.log('\n');
  })
};
