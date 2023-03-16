import {
  checkMaxLength, isEncoded, checkValidNrrFormat, checkRoundToNearest, checkIgnoredParameter,
  isReserved, isPositive, checkBlKey, checkCorrectType, checkOtValidValue, checkSfValidValue,
  checkStValidValue, checkSidIsPresent,
} from './validatorFunctions.js';

// keyValValidator takes as a parameter cmcdJson, which is a javascript object.
// The function iterates through it validating every key value pair.
const keyValValidator = (cmcdJson, errors, warnings, warningFlag = true) => {

  if (warningFlag === true) {
    checkSidIsPresent(cmcdJson, warnings);
  }

  Object.keys(cmcdJson).forEach((key) => {
    const keyValue = cmcdJson[key];
    isReserved(errors, key);
    checkCorrectType(errors, key, keyValue);
    isPositive(errors, key, keyValue);
    switch (key) {
      case 'bl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms');
        if (warningFlag == true) {
          checkBlKey(cmcdJson, warnings, key, keyValue);
        }
        break;
      case 'cid':
        checkMaxLength(errors, key, keyValue);
        break;
      case 'dl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms');
        break;
      case 'mtp':
        checkRoundToNearest(errors, key, keyValue, 100, 'kbps');
        break;
      case 'nor':
        isEncoded(errors, key, keyValue);
        break;
      case 'nrr':
        checkValidNrrFormat(errors, key, keyValue);
        break;
      case 'ot':
        checkOtValidValue(errors, key, keyValue);
        break;
      case 'rtp':
        checkRoundToNearest(errors, key, keyValue, 100, 'kbps');
        break;
      case 'sf':
        checkSfValidValue(errors, key, keyValue);
        break;
      case 'sid':
        checkMaxLength(errors, key, keyValue);
        break;
      case 'st':
        checkStValidValue(errors, key, keyValue);
        break;
      case 'su':
        checkIgnoredParameter(errors, key, keyValue, false);
        break;
      default:
        break;
    }
  });
};

export default keyValValidator;
