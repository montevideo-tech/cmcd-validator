import keySortedAlphabetically from '../../utils/keySortedAlphabetically.js';
import { cmcdHeader } from '../../utils/constants.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from './formatFunctions.js';
import { logger } from '../../logger.js';

const headerValidator = (headerString, errors, warnings, warningFlag = true) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  let headerKeys = [];
  let valid = true;

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
          valid = false;
        }
        if (!isKeyInCorrectHeader(header, key, errors)
        || !isStringCorrect(key, value, errors)
        || !isBooleanCorrect(key, value, errors)) {
          valid = false;
        }
        keys.push(key);
        headerKeys.push(key);
      }else{
        valid = false;
      }
    });
    if (warningFlag === true) {
      let ordenado=keySortedAlphabetically(headerKeys, warnings);
      logger.info(ordenado);
      headerKeys = [];
    }    
    cmcdHeaders.push(header);
  });
  if (!isHeader(cmcdHeaders, errors)) {
    return false;
  }
  return valid;
};

export default headerValidator;
