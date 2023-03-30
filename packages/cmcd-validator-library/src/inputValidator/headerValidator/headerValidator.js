import keySortedAlphabetically from '../../utils/keySortedAlphabetically.js';
import { cmcdHeader } from '../../utils/constants.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from './formatFunctions.js';

const headerValidator = (headerString, errors, warnings, warningFlag = true) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  let headerKeys = [];

  // We comment the following eslint error because we don't want to
  // return any value in the foreach
  // eslint-disable-next-line consistent-return
  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in cmcdHeader) || isHeaderRepeated(header, cmcdHeaders, errors)
      || isEmptyHeader(keysArray, header, errors)) {
      return false;
    }

    keysArray.split(',').forEach((keyVal) => {
      if (isSeparetedCorrectly(keyVal, errors)) {
        const [key, value] = keyVal.split('=');
        if (isKeyRepeated(key, keys, errors)) {
          return false;
        }
        if (!isKeyInCorrectHeader(header, key, errors)
        || !isStringCorrect(key, value, errors)
        || !isBooleanCorrect(key, value, errors)) {
          return false;
        }
        keys.push(key);
        headerKeys.push(key);
      }
      return false;
    });
    if (warningFlag === true) {
      keySortedAlphabetically(headerKeys, warnings);
      headerKeys = [];
    }
    cmcdHeaders.push(header);
  });

  if (!isHeader(cmcdHeaders, errors)) {
    return false;
  }
  return true;
};

export default headerValidator;
