import { cmcdHeader } from '../../utils/constants.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from './formatFunctions.js';

const headerValidator = (headerString, errors) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];

  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in cmcdHeader) || isHeaderRepeated(header, cmcdHeaders, errors)) {
      return false;
    }
    if (isEmptyHeader(keysArray, header, errors)) {
      return false;
    }

    keysArray.split(',').forEach((keyVal) => {
      if (isSeparetedCorrectly(keyVal, errors)) {
        const [key, value] = keyVal.split('=');
        if (isKeyRepeated(key, keys, errors)) {
          return false;
        }
        if (!(isKeyInCorrectHeader(header, key, errors)
        && isStringCorrect(key, value, errors)
        && isBooleanCorrect(key, value, errors))) {
          return false;
        }
        keys.push(key);
      }
      return false;
    });
    cmcdHeaders.push(header);
  });

  if (!isHeader(cmcdHeaders, errors)) {
    return false;
  }
  return true;
};

export default headerValidator;
