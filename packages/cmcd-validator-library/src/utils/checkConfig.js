import { cmcdTypes, keyTypes, errorTypes } from './constants.js';
import { createError } from './error.js';

// const configuration = {
//   customKey: {
//     'qualabs-br': 'boolean',
//   },
//   specificKey: ['br', 'sid'],
// };

export const checkConfig = (config) => {
  const errors = [];
  const { customKey, specificKey } = config;
  const types = Object.values(cmcdTypes);
  if (customKey) {
    Object.keys(customKey).forEach((key) => {
      if (!(/^.{0,}[^-]-[^-].{0,}$/g.test(key))) {
        errors.push(createError(errorTypes.invalidCustomKey, key, customKey[key]));
      }
      if (!types.includes(customKey[key])) {
        errors.push(createError(errorTypes.wrongCustomType, key, customKey[key]));
      }
    });
  }
  if (specificKey) {
    const cmcdKeyTypes = Object.keys(keyTypes);
    specificKey.forEach((key) => {
      if (!cmcdKeyTypes.includes(key)) {
        errors.push(createError(errorTypes.unknownSpecificKey, key));
      }
    });
  }
  if (errors.length <= 0) {
    return { valid: true };
  }
  return { valid: false, errors };
};

// console.log(checkConfig(configuration));
