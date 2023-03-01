import { CMCDQueryValidator } from '../../index.js';
import { queryTestCases } from '../testCases/queryTestCases.js';

const testCMCDQueryValidator = () => {
  const testCases = queryTestCases;

  testCases.forEach((test) => {
    console.log(test.description);
    console.log(CMCDQueryValidator(test.query));
    console.log('\n');
  });
};

export default testCMCDQueryValidator;
