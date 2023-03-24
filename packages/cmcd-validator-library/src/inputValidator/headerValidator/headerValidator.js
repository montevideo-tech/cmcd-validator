import keySortedAlphabetically from '../../utils/keySortedAlphabetically.js';
import { cmcdHeader } from '../../utils/constants.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from './formatFunctions.js';
import { logger } from '../../logger.js';

const headerValidator = (headerString, errors, requestID, warnings, warningFlag = true) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  let headerKeys = [];
  let valid = true;

  // We comment the following eslint error because we don't want to
  // return any value in the foreach
  // eslint-disable-next-line consistent-return
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
          valid = false;
        }
        if (!isKeyInCorrectHeader(header, key, errors, requestID)
        || !isStringCorrect(key, value, errors, requestID)
        || !isBooleanCorrect(key, value, errors, requestID)) {
          valid = false;
        }
        keys.push(key);
        headerKeys.push(key);
      } else {
        valid = false;
      }
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
  return valid;
};

export default headerValidator;
