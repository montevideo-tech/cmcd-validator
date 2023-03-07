import { CMCDHeaderValidator } from '../../index.js';
import { headerTestCases } from '../testCases/headerTestCases.js';

const testCMCDHeaderValidator = () => {
  const testCases = headerTestCases;

  testCases.forEach((test) => {
    console.log(test.description);
    console.log(CMCDHeaderValidator(test.header));
    console.log('\n');
  });
};

export default testCMCDHeaderValidator;
