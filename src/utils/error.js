import { errorTypes, errorDescription } from './constants.js';
import getKeyByValue from './getKeyByValue.js';

export const createError = (type, key, value) => {
  if (!Object.values(errorTypes).includes(type)) {
    // console.error('Error type not defined');
    return -1;
  }

  const error = getKeyByValue(errorTypes, type);

  return {
    type,
    key,
    value,
    description: errorDescription[error],
  };
};
