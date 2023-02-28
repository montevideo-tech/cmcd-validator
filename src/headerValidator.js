/* eslint-disable import/prefer-default-export */
import { cmcdHeader } from './constants.js';
import {
  checkKeyInCorrectHeader, isBooleanCorrect, isSeaparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, noHeader, emptyHeader
} from './formatFunctions.js';

export const headerVal = (headerString, errors) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in cmcdHeader) || isHeaderRepeated(header, cmcdHeaders, errors)) {
      return;
    }
    if(emptyHeader(keysArray, errors)){
      return;
    }
    // check if each key value pair is valid
    keysArray.split(',').forEach((keyVal) => {
      if (isSeaparetedCorrectly(keyVal, errors)) {
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
  noHeader(cmcdHeaders,errors);
};
