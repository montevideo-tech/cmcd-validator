import { errorTypes, errorDescription } from './constants.js';
import getKeyByValue from './getKeyByValue.js';

export const createError = (type, key, value, description) => {
  if (!Object.values(errorTypes).includes(type)) {
    // console.error('Error type not defined');
    return -1;
  }

  const error = getKeyByValue(errorTypes, type);

  if (description === undefined) {
    return {
      type,
      key,
      value,
      description: errorDescription[error],
    };
  }
  return {
    type,
    key,
    value,
    description,
  };
};
