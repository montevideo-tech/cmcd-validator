import { queryValidator } from '../../inputValidator/index.js';
import { queryTestCases } from '../testCases/queryTestCases.js';

const testQueryValidator = () => {
  const testCases = queryTestCases;

  testCases.forEach((test) => {
    if (test.config !== undefined) {
      const error = [];
      queryValidator(test.query, error);
      console.log(test.description);
      console.log(error);
      console.log('\n');
    }
  });
};

export default testQueryValidator;
