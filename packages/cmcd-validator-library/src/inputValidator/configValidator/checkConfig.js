import { cmcdTypes, keyTypes, errorTypes, cmcdHeader } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

// const configuration = {
//   customKey: [
//     {
//       key: 'qualabs-br',
//       type: 'boolean',
//       header: 'CMCD-Object',
//     },
//   ],
//   specificKey: ['br', 'sid'],
// };

export const checkConfig = (config, errors) => {
  const { customKey, specificKey } = config;
  if (customKey) {
    const types = Object.values(cmcdTypes);
    const headers = Object.keys(cmcdHeader);
    customKey.forEach((customObj) => {
      if (!(/^.{0,}[^-]-[^-].{0,}$/g.test(customObj.key))) {
        errors.push(createError(errorTypes.invalidCustomKey, customObj.key));
      }
      if (!types.includes(customObj.type)) {
        errors.push(createError(errorTypes.wrongCustomType, customObj.key, customObj.type));
      }
      if (customObj.header && !headers.includes(customObj.header)) {
        errors.push(createError(errorTypes.wrongCustomHeader, customObj.key, customObj.header));
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
  if (errors.length === 0) {
    return true;
  }
  return false;
};

// const errores = [];
// console.log(checkConfig(configuration, errores));
// console.log(errores);