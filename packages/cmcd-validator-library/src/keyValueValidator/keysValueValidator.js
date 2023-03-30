import {
  checkMaxLength, isEncoded, checkValidNrrFormat, checkRoundToNearest, checkIgnoredParameter,
  isReserved, isPositive, checkBlKey, checkCorrectType, checkOtValidValue, checkSfValidValue,
  checkPrValue,
  checkVValue,
  checkStValidValue, checkSidIsPresent,
} from './validatorFunctions.js';

// keyValValidator takes as a parameter cmcdJson, which is a javascript object.
// The function iterates through it validating every key value pair.
// eslint-disable-next-line max-len
const keyValValidator = (cmcdJson, errors, requestID, warnings, config, extendedKeyTypes, warningFlag) => {
  if (warningFlag === true) {
    checkSidIsPresent(cmcdJson, warnings, requestID);
  }

  Object.keys(cmcdJson).forEach((key) => {
    // Check if we received a configuration
    if (config?.specificKey && !config.specificKey?.includes(key)) {
      return;
    }
    const keyValue = cmcdJson[key];
    isReserved(errors, requestID, key, keyValue, extendedKeyTypes);
    checkCorrectType(errors, key, keyValue, requestID);
    isPositive(errors, key, keyValue, requestID);
    switch (key) {
      case 'bl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms', requestID);
        if (warningFlag === true) {
          checkBlKey(cmcdJson, warnings, key, keyValue, requestID);
        }
        break;
      case 'cid':
        checkMaxLength(errors, key, keyValue, requestID);
        break;
      case 'dl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms', requestID);
        break;
      case 'mtp':
        checkRoundToNearest(errors, key, keyValue, 100, 'kbps', requestID);
        break;
      case 'nor':
        isEncoded(errors, key, keyValue, requestID);
        break;
      case 'nrr':
        checkValidNrrFormat(errors, key, keyValue, requestID);
        break;
      case 'ot':
        checkOtValidValue(errors, key, keyValue, requestID);
        break;
      case 'rtp':
        checkRoundToNearest(errors, key, keyValue, 100, 'kbps', requestID);
        break;
      case 'sf':
        checkSfValidValue(errors, key, keyValue, requestID);
        break;
      case 'sid':
        checkMaxLength(errors, key, keyValue, requestID);
        break;
      case 'st':
        checkStValidValue(errors, key, keyValue, requestID);
        break;
      case 'su':
        checkIgnoredParameter(errors, key, keyValue, false, requestID);
        break;
      case 'pr':
        if (warningFlag) {
          checkPrValue(cmcdJson, warnings, key, keyValue, requestID);
        }
        break;
      case 'v':
        if (warningFlag) {
          checkVValue(cmcdJson, warnings, key, keyValue, requestID);
        }
        break;
      default:
        break;
    }
  });
};

export default keyValValidator;
