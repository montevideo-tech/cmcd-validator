import { cmcdHeader } from '../../utils/constants.js';
import {
  checkKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, noHeader, isEmptyHeader,
} from './formatFunctions.js';

const headerValidator = (headerString, errors) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in cmcdHeader) || isHeaderRepeated(header, cmcdHeaders, errors)) {
      return;
    }
    if (isEmptyHeader(keysArray, header, errors)) {
      return;
    }
    keysArray.split(',').forEach((keyVal) => {
      if (isSeparetedCorrectly(keyVal, errors)) {
        const [key, value] = keyVal.split('=');
        if (isKeyRepeated(key, keys, errors)) {
          return;
        }
        checkKeyInCorrectHeader(header, key, errors);
        isStringCorrect(key, value, errors);
        isBooleanCorrect(key, value, errors);
        keys.push(key);
      }
    });
    cmcdHeaders.push(header);
  });
  noHeader(cmcdHeaders, errors);
};

export default headerValidator;
