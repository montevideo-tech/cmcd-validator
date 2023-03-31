import checkQuotes from '../../utils/checkQuotes.js';
import {
  cmcdHeader, cmcdTypes, errorTypes, keyTypes,
} from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

export const isKeyInCorrectHeader = (header, key, errors) => {
  if (!cmcdHeader[header].includes(key)) {
    const description = `The key ${key} does not go under the header ${header}`;
    errors.push(createError(errorTypes.incorrectFormat, key, description));
    return false;
  }
  return true;
};

export const isStringCorrect = (key, value, errors) => {
  if ((keyTypes[key] === cmcdTypes.string && !checkQuotes(value))
  || (keyTypes[key] === cmcdTypes.token && checkQuotes(value))) {
    const description = `Incorrect format for key: ${key}`;
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
    return false;
  }
  return true;
};

export const isBooleanCorrect = (key, value, errors) => {
  // console.log(key);
  // console.log(value);
  if (((keyTypes[key] === cmcdTypes.boolean) && value === 'true')
    || (typeof value === 'undefined' && keyTypes[key] !== cmcdTypes.boolean)) {
    const description = 'If the value is TRUE, the = and the value must be omitted';
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
    return false;
  }
  return true;
};

export const isSeparetedCorrectly = (keyVal, errors) => {
  if ((keyVal.split('=').length > 2) || ((keyVal.split('=').length === 1) && (keyTypes[keyVal] !== cmcdTypes.boolean))) {
    const description = 'key-value pair not separated by =.';
    errors.push(createError(errorTypes.incorrectFormat, keyVal, description));
    return false;
  }
  return true;
};

export const isKeyRepeated = (key, keys, errors) => {
  if (keys.includes(key)) {
    const description = `The key '${key}' is repeated.`;
    errors.push(createError(errorTypes.duplicateKey, key, description));
    return true;
  }
  return false;
};

export const isHeaderRepeated = (header, headers, errors) => {
  if (headers.includes(header)) {
    const description = `This header '${header}' is repeated.`;
    errors.push(createError(errorTypes.duplicatedHeader, header, description));
    return true;
  }
  return false;
};

export const isHeader = (headers, errors) => {
  if (headers.length === 0) {
    const description = 'No headers detected!';
    errors.push(createError(errorTypes.noCMCDRequest, description));
    return false;
  }
  return true;
};

export const isEmptyHeader = (keyVal, header, errors) => {
  if (keyVal === '') {
    const description = `Empty header detected! Header: ${header}`;
    errors.push(createError(errorTypes.emptyHeader, header, description));
    return true;
  }
  return false;
};
