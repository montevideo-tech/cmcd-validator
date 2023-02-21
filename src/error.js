import { errorTypes, errorDescription } from './constants.js';

export const createError = (type, key, value) => {
  if (!(type in errorDescription)) {
    console.error('Error type not defined');
    return -1;
  }

  return {
    type,
    key,
    value,
    description: errorDescription[type],
  };
};

export default createError;
