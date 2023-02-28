import { testQueryValidator, testJsonValidator } from './inputValidator/index.js';

console.log('--------- Test queryValidator---------');
testQueryValidator();
console.log('\n');
console.log('--------- Test jsonValidator---------');
testJsonValidator();

export { testQueryValidator, testJsonValidator };
