import { CMCDJsonValidator } from '../../index.js';
import { jsonTestCases } from '../testCases/jsonTestCases.js';

const testCMCDJsonValidator = () => {
  const testCases = jsonTestCases;

  testCases.forEach((test) => {
    console.log(test.description);
    console.log(CMCDJsonValidator(test.json));
    console.log('\n');
  });
};

export default testCMCDJsonValidator;