import checkQuotes from './checkQuotes.js';
import {
  cmcdTypes, errorTypes,
} from './constants.js';
import { createError } from './error.js';

export const isKeyInCorrectHeader = (header, key, errors, extendedcmcdHeader) => {
  if (!extendedcmcdHeader[header].includes(key)) {
    const description = `The key ${key} does not go under the header ${header}`;
    errors.push(createError(errorTypes.incorrectFormat, key, description));
    return false;
  }
  return true;
};

export const isStringCorrect = (key, value, errors, extendedkeyTypes) => {
  if ((extendedkeyTypes[key] === cmcdTypes.string && !checkQuotes(value))
  || (extendedkeyTypes[key] === cmcdTypes.token && checkQuotes(value))) {
    const description = `Incorrect format for key: ${key}`;
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
    return false;
  }
  return true;
};

export const isBooleanCorrect = (key, value, errors, extendedkeyTypes) => {
  if (((extendedkeyTypes[key] === cmcdTypes.boolean) && value === 'true')) {
    const description = 'If the value is TRUE, the = and the value must be omitted';
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
    return false;
  }
  if ((typeof value === cmcdTypes.number || (typeof value === cmcdTypes.string && value !== 'false'))
  && extendedkeyTypes[key] === cmcdTypes.boolean) {
    const description = `The value for the key ${key} must be a boolean.`;
    errors.push(createError(errorTypes.wrongTypeValue, key, value, description));
    return false;
  }
  return true;
};

export const isNumberCorrect = (key, value, errors, extendedkeyTypes) => {
  if (extendedkeyTypes[key] === cmcdTypes.number && Number.isNaN(parseInt(value, 10))) {
    const description = `The value for the key ${key} must be a number`;
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
    return false;
  }
  return true;
};

export const isSeparetedCorrectly = (keyVal, errors, extendedkeyTypes) => {
  if ((keyVal.split('=').length > 2) || ((keyVal.split('=').length === 1) && (extendedkeyTypes[keyVal] !== cmcdTypes.boolean))) {
    const description = 'key-value pair not separated by =.';
    errors.push(createError(errorTypes.incorrectFormat, keyVal, undefined, description));
    return false;
  }
  return true;
};

export const isKeyRepeated = (key, keys, errors) => {
  if (keys.includes(key)) {
    const description = `The key ${key} is repeated.`;
    errors.push(createError(errorTypes.duplicateKey, key, undefined, description));
    return true;
  }
  return false;
};

export const isHeaderRepeated = (header, headers, errors) => {
  if (headers.includes(header)) {
    const description = `This header ${header} is repeated.`;
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

export const includesCMCDRequest = (queryString, errors) => {
  if (!queryString.includes('CMCD=')) {
    errors.push(createError(errorTypes.noCMCDRequest));
    return false;
  }
  return true;
};

export const isURLMalformed = (queryString, errors) => {
  let valid = false;
  try {
    // Check if the URL is encoded
    if (decodeURI(queryString) === queryString) {
      errors.push(createError(errorTypes.parameterEncoding));
      valid = true;
    }
  } catch (err) {
    errors.push(createError(errorTypes.queryMalformed));
    valid = true;
  }
  return valid;
};

export const areRequestsSeparated = (requests, errors) => {
  if ((requests[0].length > 0) && (requests[0][requests[0].length - 1] !== '&')) {
    errors.push(createError(errorTypes.noAmpersandBetweenRequests));
    return false;
  }
  return true;
};

export const multipleCMCDReq = (requests, errors) => {
  if (requests.length > 1) {
    errors.push(createError(errorTypes.incorrectFormat));
    return true;
  }
  return false;
};
