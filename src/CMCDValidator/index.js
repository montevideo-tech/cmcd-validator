import { errorTypes } from '../utils/constants.js';

const createError = (type, key, value) => {
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

export default createError;
