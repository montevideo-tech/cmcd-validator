import { queryValidator } from '../../inputValidator/index.js';
import { queryTestCases } from '../testCases/queryTestCases.js';

const testQueryValidator = () => {
  // This function has been created to test diferent type of error in query validator

  const testCases = queryTestCases;

  testCases.forEach((test) => {
    const error = [];
    queryValidator(test.query, error);
    console.log(test.description);
    console.log(error);
    console.log('\n');
  });
};

export default testQueryValidator;
