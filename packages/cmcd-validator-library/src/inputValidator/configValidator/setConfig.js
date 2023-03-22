import {
  cmcdTypes, keyTypes, errorTypes, warningTypes,
} from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
import { createWarning } from '../../utils/warning.js';

export const setConfig = (config, errors, requestID, warnings, warningFlag = true) => {

  if (!config) {
    return [true, keyTypes];
  };

  const { customKey, specificKey } = config;
  var ErrorsCheck = false;
  const extendedKeyTypes = {...keyTypes};

  if (customKey) {
    const types = Object.values(cmcdTypes);

    customKey.forEach((customObj) => {
      if (!(/^[a-zA-Z0-9.]+-[a-zA-Z0-9]+$/.test(customObj.key))) {
        errors.push(createError(errorTypes.invalidCustomKey, requestID, customObj.key));
        ErrorsCheck = true;
      }
      if (!types.includes(customObj.type)) {
        errors.push(createError(errorTypes.wrongCustomType, requestID, customObj.key, customObj.type));
        ErrorsCheck = true;
      }
      if (!(/^([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$/.test(customObj.key.split('-')[0])) && warningFlag === true) {
        warnings.push(createWarning(warningTypes.noReverseDnsCustomKey, requestID));
      }
      if (ErrorsCheck === false){
        extendedKeyTypes[customObj.key] = customObj.type;
      }

    });
  }
  if (specificKey) {
    const cmcdKeyTypes = Object.keys(keyTypes);
    specificKey.forEach((key) => {
      if (!cmcdKeyTypes.includes(key)) {
        errors.push(createError(errorTypes.unknownSpecificKey, requestID, key));
      }
    });
  }
  if (errors.length === 0) {
    return [true, extendedKeyTypes];
  }
  return [false, extendedKeyTypes];
};
