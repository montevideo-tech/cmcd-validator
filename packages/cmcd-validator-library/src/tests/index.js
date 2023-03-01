import { testCMCDQueryValidator } from './CMCDQueryValidator/index.js';
import { testQueryValidator, testJsonValidator, testHeaderValidator } from './inputValidator/index.js';

console.log('--------- Test queryValidator ---------');
testQueryValidator();
console.log('\n');
console.log('--------- Test jsonValidator ---------');
testJsonValidator();
console.log('--------- Test CMCDQueryValidator ---------');
testCMCDQueryValidator();
console.log('------------Test Header validator------------');
testHeaderValidator();
