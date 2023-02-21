/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/prefer-default-export */
import {
  checkMaxLength, isEncoded, checkValidNrrFormat, checkRoundToNearest, checkIgnoredParameter,
  isReserved, isPositive, checkBlKey, checkCorrectType, checkOtValidValue, checkSfValidValue,
  checkStValidValue,
} from './validateFunctions.js';

// keyValValidator takes as a parameter cmcdJson, which is a javascript object.
// The function iterates through it validating every key value pair.
export const keyValValidator = (cmcdJson, errors) => {
  for (const key in cmcdJson) {
    const keyValue = cmcdJson[key];
    isReserved(errors, key);
    checkCorrectType(errors, key, keyValue);
    isPositive(errors, key, keyValue);
    switch (key) {
      case 'bl':
        checkRoundToNearest(errors, key, keyValue, 100, 'ms');
        checkBlKey(cmcdJson, errors, key, keyValue);
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
      case 'pr':
        checkIgnoredParameter(errors, key, keyValue, 1);
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
      case 'v':
        checkIgnoredParameter(errors, key, keyValue, 1);
        break;
    }
  }
};
