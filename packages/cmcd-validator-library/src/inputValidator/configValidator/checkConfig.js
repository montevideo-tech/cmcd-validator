import { cmcdTypes, keyTypes, errorTypes, cmcdHeader, warningTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
import { createWarning } from '../../utils/warning.js';

export const checkConfig = (config, errors, warnings, warningFlag = true) => {
  const { customKey, specificKey } = config;
  if (customKey) {
    const types = Object.values(cmcdTypes);
    const headers = Object.keys(cmcdHeader);
    customKey.forEach((customObj) => {
      if (!(/^[a-zA-Z0-9\.]+-[a-zA-Z0-9]+$/.test(customObj.key))) {
        errors.push(createError(errorTypes.invalidCustomKey, customObj.key));
      }
      if (!types.includes(customObj.type)) {
        errors.push(createError(errorTypes.wrongCustomType, customObj.key, customObj.type));
      }
      if (customObj.header && !headers.includes(customObj.header)) {
        errors.push(createError(errorTypes.wrongCustomHeader, customObj.key, customObj.header));
      }
      if (!(/^([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+[a-zA-Z0-9\-]+$/.test(customObj.key)) & warningFlag === true) {
        warnings.push(createWarning(warningTypes.noReverseDnsCustomKey));
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

