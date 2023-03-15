import {
  checkMaxLength, isEncoded, checkValidNrrFormat, checkRoundToNearest, checkIgnoredParameter,
  isReserved, isPositive, checkBlKey, checkCorrectType, checkOtValidValue, checkSfValidValue,
  checkStValidValue,
} from './validatorFunctions.js';

// keyValValidator takes as a parameter cmcdJson, which is a javascript object.
// The function iterates through it validating every key value pair.
const keyValValidator = (cmcdJson, errors, requestID) => {
  Object.keys(cmcdJson).forEach((key) => {
    const keyValue = cmcdJson[key];
    isReserved(errors, key, requestID);
    checkCorrectType(errors, key, keyValue, requestID);
    isPositive(errors, key, keyValue, requestID);
    switch (key) {
      case 'bl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms', requestID);
        checkBlKey(cmcdJson, errors, key, keyValue, requestID);
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
        checkOtValidValue(errors, key, keyValue);
        break;
      case 'rtp':
        checkRoundToNearest(errors, key, keyValue, 100, 'kbps', requestID);
        break;
      case 'sf':
        checkSfValidValue(errors, key, keyValue);
        break;
      case 'sid':
        checkMaxLength(errors, key, keyValue, requestID);
        break;
      case 'st':
        checkStValidValue(errors, key, keyValue);
        break;
      case 'su':
        checkIgnoredParameter(errors, key, keyValue, false, requestID);
        break;
      default:
        break;
    }
  });
};

export default keyValValidator;
