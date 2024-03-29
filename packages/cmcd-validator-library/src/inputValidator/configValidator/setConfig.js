import {
  cmcdTypes, keyTypes, errorTypes, warningTypes, cmcdHeader,
} from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
import { createWarning } from '../../utils/warning.js';

export const setConfig = (config, errors, requestID, warnings, warningFlag = true) => {
  if (!config) {
    return [true, keyTypes, cmcdHeader];
  }

  const { customKey, specificKey } = config;
  let errorsCheck = false;
  const extendedKeyTypes = { ...keyTypes };
  const extendedcmcdHeader = { ...cmcdHeader };

  if (customKey) {
    const types = Object.values(cmcdTypes);

    customKey.forEach((customObj) => {
      if (!(/^[a-zA-Z0-9.]+-[a-zA-Z0-9]+$/.test(customObj.key))) {
        errors.push(createError(errorTypes.invalidCustomKey, requestID, customObj.key));
        errorsCheck = true;
      }
      if (!types.includes(customObj.type)) {
        errors.push(
          createError(errorTypes.wrongCustomType, requestID, customObj.key, customObj.type),
        );
        errorsCheck = true;
      }
      if (!(/^([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$/.test(customObj.key.split('-')[0])) && warningFlag === true) {
        warnings.push(createWarning(warningTypes.noReverseDnsCustomKey, requestID));
      }
      if (customObj.headerType && !(customObj.headerType in cmcdHeader)) {
        errors.push(
          createError(errorTypes.invalidHeader, requestID, customObj.key, customObj.type),
        );
        errorsCheck = true;
      }
      if (!errorsCheck) {
        extendedKeyTypes[customObj.key] = customObj.type;
        if (customObj.headerType) {
          extendedcmcdHeader[customObj.headerType].push(customObj.key);
        }
      }
    });
  }
  if (specificKey) {
    const cmcdKeyTypes = Object.keys(extendedKeyTypes);
    specificKey.forEach((key) => {
      if (!cmcdKeyTypes.includes(key)) {
        errors.push(createError(errorTypes.unknownSpecificKey, requestID, key));
      }
    });
  }
  if (errors.length === 0) {
    return [true, extendedKeyTypes, extendedcmcdHeader];
  }
  return [false, extendedKeyTypes, extendedcmcdHeader];
};
