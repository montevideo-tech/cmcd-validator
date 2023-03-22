import keySortedAlphabetically from '../../utils/keySortedAlphabetically.js';
import { cmcdHeader } from '../../utils/constants.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from './formatFunctions.js';

const headerValidator = (headerString, errors, requestID, warnings, warningFlag = true) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  let headerKeys = [];

  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in cmcdHeader) || isHeaderRepeated(header, cmcdHeaders, errors, requestID)
      || isEmptyHeader(keysArray, header, errors, requestID)) {
      return false;
    }

    keysArray.split(',').forEach((keyVal) => {
      if (isSeparetedCorrectly(keyVal, errors, requestID)) {
        const [key, value] = keyVal.split('=');
        if (isKeyRepeated(key, keys, errors, requestID)) {
          return false;
        }
        if (!isKeyInCorrectHeader(header, key, errors, requestID)
        || !isStringCorrect(key, value, errors, requestID)
        || !isBooleanCorrect(key, value, errors, requestID)) {
          return false;
        }
        keys.push(key);
        headerKeys.push(key);
      }
      return false;
    });
    if (warningFlag === true) {
      keySortedAlphabetically(headerKeys, warnings, requestID);
      headerKeys = [];
    }    
    cmcdHeaders.push(header);
  });

  if (!isHeader(cmcdHeaders, errors, requestID)) {
    return false;
  }
  return true;
};

export default headerValidator;
