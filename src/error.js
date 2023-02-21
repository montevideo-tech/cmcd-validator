/* eslint-disable import/prefer-default-export */
import { errorTypes } from './constants.js';

export const createError = (type, key, value) => {
  if (!errorTypes[type]) {
    console.error('Error type not defined');
    return -1;
  }

  return {
    type,
    key,
    value,
    description: errorTypes[type],
  };
};
