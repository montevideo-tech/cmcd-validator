/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import checkQuotes from './checkQuotes.js';
import { cmcdHeader, keyTypes } from './constants.js';
import createError from './error.js';

export const checkKeyInCorrectHeader = (header, key, errors) => {
  if (!cmcdHeader[header].includes(key)) {
    console.log(`The key does not go under the header ${header}`);
    errors.push(createError('incorrect-format', key));
  }
};

export const isStringCorrect = (key, value, errors) => {
  if ((keyTypes[key] === 'string' && !checkQuotes(value)) || (keyTypes[key] === 'token' && checkQuotes(value))) {
    console.log('Incorrect format for ', key);
    errors.push(createError('incorrect=format'));
  }
};

// this one does not work correctly
export const isBooleanCorrect = (key, value, errors) => {
  if (typeof value === 'boolean' && value === 'true') {
    console.log('If the value is TRUE, the = and the value must be omitted');
    errors.push(createError('invalid-format', key, value));
  }
};

export const isSeaparetedCorrectly = (keyVal, errors) => {
  if ((keyVal.split('=').length !== 2) && ((keyVal.split('=').length === 1) && (typeof keyVal !== 'boolean'))) {
    errors.push(createError('incorrect-format'));
    console.log('key-value pair not separated by =.');
  }
};

export const isKeyRepeated = (key, keys, errors) => {
  if (keys.includes(key)) {
    console.log(`The key '${key}' is repeated.`);
    errors.push(createError('duplicated-key', key));
  }
};

export const isHeaderRepeated = (header, headers, errors) => {
  if (headers.includes(header)) {
    console.log(`This header '${header}' is repeated.`);
    errors.push(createError('duplicated-header'));
  }
};
