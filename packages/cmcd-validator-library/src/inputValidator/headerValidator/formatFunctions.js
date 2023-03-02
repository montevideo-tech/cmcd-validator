import checkQuotes from '../../utils/checkQuotes.js';
import {
  cmcdHeader, cmcdTypes, errorTypes, keyTypes,
} from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

export const checkKeyInCorrectHeader = (header, key, errors) => {
  if (!cmcdHeader[header].includes(key)) {
    // console.log(`The key ${key} does not go under the header ${header}`);
    errors.push(createError(errorTypes.incorrectFormat, key));
  }
};

export const isStringCorrect = (key, value, errors) => {
  if ((keyTypes[key] === cmcdTypes.string && !checkQuotes(value))
  || (keyTypes[key] === cmcdTypes.token && checkQuotes(value))) {
    // console.log('Incorrect format for ', key);
    errors.push(createError(errorTypes.incorrectFormat, key));
    return true;
  }
  return false;
};

export const isBooleanCorrect = (key, value, errors) => {
  if ((keyTypes[key] === cmcdTypes.boolean) && value === 'true') {
    // console.log('If the value is TRUE, the = and the value must be omitted');
    errors.push(createError(errorTypes.incorrectFormat, key, value));
    return false;
  }
  return true;
};

export const isSeparetedCorrectly = (keyVal, errors) => {
  if ((keyVal.split('=').length > 2) || ((keyVal.split('=').length === 1) && (keyTypes[keyVal] !== cmcdTypes.boolean))) {
    errors.push(createError(errorTypes.incorrectFormat));
    // console.log('key-value pair not separated by =.');
    return false;
  }
  return true;
};

export const isKeyRepeated = (key, keys, errors) => {
  if (keys.includes(key)) {
    // console.log(`The key '${key}' is repeated.`);
    errors.push(createError(errorTypes.duplicateKey, key));
    return true;
  }
  return false;
};

export const isHeaderRepeated = (header, headers, errors) => {
  if (headers.includes(header)) {
    // console.log(`This header '${header}' is repeated.`);
    errors.push(createError(errorTypes.duplicatedHeader, header));
    return true;
  }
  return false;
};

export const noHeader = (headers, errors) => {
  if (headers.length === 0) {
    // console.log('No headers detected!');
    errors.push(createError(errorTypes.noCMCDRequest));
  }
};

export const isEmptyHeader = (keyVal, header, errors) => {
  if (keyVal === '') {
    // console.log('Empty headers detected!');
    errors.push(createError(errorTypes.emptyHeader, header));
    return true;
  }
  return false;
};
