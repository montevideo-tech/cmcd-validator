import { testCMCDQueryValidator, testCMCDJsonValidator } from './CMCDValidator/index.js';
import { testQueryValidator, testJsonValidator, testHeaderValidator } from './inputValidator/index.js';

// console.log('--------- Test queryValidator ---------');
// testQueryValidator();
// console.log('\n');
// console.log('------------Test Header validator------------');
// testHeaderValidator();
// console.log('--------- Test jsonValidator ---------');
// testJsonValidator();
// console.log('--------- Test CMCDQueryValidator ---------');
// testCMCDQueryValidator();
console.log('--------- Test CMCDJsonValidator ---------');
testCMCDJsonValidator();
