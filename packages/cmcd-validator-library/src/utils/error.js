import { errorTypes, errorDescription } from './constants.js';
import getKeyByValue from './getKeyByValue.js';
import { logger } from '../logger.js';

export const createError = (type, key, value, description) => {
  if (!Object.values(errorTypes).includes(type)) {
    return -1;
  }

  const error = getKeyByValue(errorTypes, type);
  
  logger.error(new Error(`Error in '${key}': ${description}`));

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
