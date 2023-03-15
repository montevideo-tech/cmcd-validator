import checkQuotes from '../../utils/checkQuotes.js';
import {
  cmcdHeader, cmcdTypes, errorTypes, keyTypes,
} from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

export const isKeyInCorrectHeader = (header, key, errors, requestID) => {
  if (!cmcdHeader[header].includes(key)) {
    const description = `The key ${key} does not go under the header ${header}`;
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, description));
    return false;
  }
  return true;
};

export const isStringCorrect = (key, value, errors, requestID) => {
  if ((keyTypes[key] === cmcdTypes.string && !checkQuotes(value))
  || (keyTypes[key] === cmcdTypes.token && checkQuotes(value))) {
    const description = `Incorrect format for key: ${key}`;
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, value, description));
    return false;
  }
  return true;
};

export const isBooleanCorrect = (key, value, errors, requestID) => {
  if ((keyTypes[key] === cmcdTypes.boolean) && value === 'true') {
    const description = 'If the value is TRUE, the = and the value must be omitted';
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, value, description));
    return false;
  }
  return true;
};

export const isSeparetedCorrectly = (keyVal, errors, requestID) => {
  if ((keyVal.split('=').length > 2) || ((keyVal.split('=').length === 1) && (keyTypes[keyVal] !== cmcdTypes.boolean))) {
    const description = 'key-value pair not separated by =.';
    errors.push(createError(errorTypes.incorrectFormat, requestID, keyVal, description));
    return false;
  }
  return true;
};

export const isKeyRepeated = (key, keys, errors, requestID) => {
  if (keys.includes(key)) {
    const description = `The key '${key}' is repeated.`;
    errors.push(createError(errorTypes.duplicateKey, requestID, key, description));
    return true;
  }
  return false;
};

export const isHeaderRepeated = (header, headers, errors, requestID) => {
  if (headers.includes(header)) {
    const description = `This header '${header}' is repeated.`;
    errors.push(createError(errorTypes.duplicatedHeader, requestID, header, description));
    return true;
  }
  return false;
};

export const isHeader = (headers, errors, requestID) => {
  if (headers.length === 0) {
    const description = 'No headers detected!';
    errors.push(createError(errorTypes.noCMCDRequest, requestID, description));
    return false;
  }
  return true;
};

export const isEmptyHeader = (keyVal, header, errors, requestID) => {
  if (keyVal === '') {
    const description = `Empty header detected! Header: ${header}`;
    errors.push(createError(errorTypes.emptyHeader, requestID, header, description));
    return true;
  }
  return false;
};
