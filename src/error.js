import { errorTypes } from './constants.js';

export const createError = (type, key, value) => {
  if (!errorTypes[type]) {
    // eslint-disable-next-line no-console
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

export default createError;
