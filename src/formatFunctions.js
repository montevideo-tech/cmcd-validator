/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { cmcdHeader } from './constants.js';
import createError from './error.js';

// header is the name of the heasder and keys is an array with all the keys under header
export const checkKeyInCorrectHeader = (header, keys, errors) => {
  keys.forEach((key) => {
    if (!cmcdHeader[header].includes(key)) {
      console.log(`The key does not go under the header ${header}`);
      errors.push(createError('incorrect-format', key));
    }
  });
};
