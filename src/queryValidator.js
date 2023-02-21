/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { cmcdTypes, keyTypes } from './constants.js';
import { createError } from './error.js';
import checkQuoutes from './utils/checkQuotes.js';

export const queryValidator = (queryString) => {
  const error = [];

  // Check if the URL is encoded
  if (decodeURI(queryString) === queryString) {
    error.push(createError('parameter-encoding'));
    return {
      valid: false,
      queryString,
      error,
    };
  }

  // Check if there is more than one CMCD request
  const query = queryString.split('?').pop();
  const requests = decodeURIComponent(query).split('CMCD=');
  requests.shift();

  if (requests.length > 1) {
    error.push(createError('incorrect-format'));
    return {
      valid: false,
      queryString,
      error,
    };
  }

  const values = decodeURIComponent(query).split('CMCD=')[1].split(',');
  values[values.length - 1] = values[values.length - 1].split('&')[0];

  // console.log("values\n", values);
  const keys = [];

  // Check: key/value is separated by =
  values.forEach((val) => {
    const [key, value] = val.split('=');
    keys.push(key);

    // Check: string require ""

    if ((keyTypes[key] === cmcdTypes.string && !checkQuoutes(value))
      || (keyTypes[key] === cmcdTypes.token && checkQuoutes(value))
    ) {
      error.push(createError('invalid-value', key, value));
      return {
        valid: false,
        queryString,
        error,
      };
    }

    // Check: if the key does not have value it must be a bool
    if (
      (typeof value === 'undefined' && keyTypes[key] !== cmcdTypes.boolean)
      || value === 'true'
    ) {
      error.push(createError('wrong-type-value', key, value));
      return {
        valid: false,
        queryString,
        error,
      };
    }
  });

  // Check if keys are unique
  console.log('keys\n', keys);

  if ((new Set(keys)).size !== keys.length) {
    error.push(createError('dupliated-key'));
    return {
      valid: false,
      queryString,
      error,
    };
  }

  return {
    valid: true,
    queryString,
    error,
  };
};
