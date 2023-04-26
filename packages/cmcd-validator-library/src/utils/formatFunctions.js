import checkQuotes from './checkQuotes.js';
import {
  cmcdTypes, errorTypes,
} from './constants.js';
import { createError } from './error.js';

export const isKeyInCorrectHeader = (header, key, errors, extendedcmcdHeader, requestID) => {
  if (!extendedcmcdHeader[header].includes(key)) {
    const description = `The key ${key} does not go under the header ${header}`;
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, description));
    return false;
  }
  return true;
};

export const isStringCorrect = (key, value, errors, extendedkeyTypes, requestID) => {
  if ((extendedkeyTypes[key] === cmcdTypes.string && !checkQuotes(value))
  || (extendedkeyTypes[key] === cmcdTypes.token && checkQuotes(value))) {
    const description = `Incorrect format for key: ${key}`;
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, value, description));
    return false;
  }
  return true;
};

export const isBooleanCorrect = (key, value, errors, extendedkeyTypes, requestID) => {
  if (((extendedkeyTypes[key] === cmcdTypes.boolean) && value === 'true')) {
    const description = 'If the value is TRUE, the = and the value must be omitted';
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, value, description));
    return false;
  }
  if ((typeof value === cmcdTypes.number || (typeof value === cmcdTypes.string && value !== 'false'))
  && extendedkeyTypes[key] === cmcdTypes.boolean) {
    const description = `The value for the key ${key} must be a boolean.`;
    errors.push(createError(errorTypes.wrongTypeValue, requestID, key, value, description));
    return false;
  }
  return true;
};

export const isNumberCorrect = (key, value, errors, extendedkeyTypes, requestID) => {
  if ((extendedkeyTypes[key] === cmcdTypes.number && !Number(value))) {
    const description = `The value for the key ${key} must be a number`;
    errors.push(createError(errorTypes.incorrectFormat, requestID, key, value, description));
    return false;
  }
  return true;
};

export const isSeparetedCorrectly = (keyVal, errors, extendedkeyTypes, requestID) => {
  if ((keyVal.split('=').length > 2) || ((keyVal.split('=').length === 1) && (extendedkeyTypes[keyVal] !== cmcdTypes.boolean))) {
    const description = 'key-value pair not separated by =.';
    errors.push(
      createError(errorTypes.incorrectFormat, requestID, keyVal, undefined, description),
    );
    return false;
  }
  return true;
};

export const isKeyRepeated = (key, keys, errors, requestID) => {
  if (keys.includes(key)) {
    const description = `The key ${key} is repeated.`;
    errors.push(createError(errorTypes.duplicateKey, requestID, key, undefined, description));
    return true;
  }
  return false;
};

export const isHeaderRepeated = (header, headers, errors, requestID) => {
  if (headers.includes(header)) {
    const description = `This header ${header} is repeated.`;
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

export const includesCMCDRequest = (queryString, errors, requestID) => {
  if (!queryString.includes('CMCD=')) {
    errors.push(createError(errorTypes.noCMCDRequest, requestID));
    return false;
  }
  return true;
};

export const isURLMalformed = (queryString, errors, requestID) => {
  let valid = false;
  try {
    // Check if the URL is encoded
    if (decodeURI(queryString) === queryString) {
      errors.push(createError(errorTypes.parameterEncoding, requestID));
      valid = true;
    }
  } catch (err) {
    errors.push(createError(errorTypes.queryMalformed, requestID));
    valid = true;
  }
  return valid;
};

export const areRequestsSeparated = (requests, errors, requestID) => {
  if ((requests[0].length > 0) && (requests[0][requests[0].length - 1] !== '&')) {
    errors.push(createError(errorTypes.noAmpersandBetweenRequests, requestID));
    return false;
  }
  return true;
};

export const multipleCMCDReq = (requests, errors, requestID) => {
  if (requests.length > 1) {
    errors.push(createError(errorTypes.incorrectFormat, requestID));
    return true;
  }
  return false;
};
