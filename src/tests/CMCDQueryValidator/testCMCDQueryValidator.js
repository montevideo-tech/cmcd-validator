import { CMCDQueryValidator } from '../../index.js';
import { queryTestCases } from '../testCases/queryTestCases.js';

const testCMCDQueryValidator = () => {
  const testCases = queryTestCases;

  testCases.forEach((test) => {
    const error = [];
    console.log(test.description);
    console.log(CMCDQueryValidator(test.query, error));
    console.log('\n');
  });
};

export default testCMCDQueryValidator;
