import { errorTypes, errorDescription } from './constants.js';
import getKeyByValue from './getKeyByValue.js';
import { logger } from '../logger.js';

export const createError = (type, requestID, key, value, description) => {
  if (!Object.values(errorTypes).includes(type)) {
    return -1;
  }

  const error = getKeyByValue(errorTypes, type);

  if (description === undefined) {
    logger.error(new Error(`'${requestID}': Error in '${key}': ${errorDescription[error]}`));
    return {
      type,
      key,
      value,
      description: errorDescription[error],
    };
  }
  logger.error(new Error(`'${requestID}': Error in '${key}': ${description}`));
  return {
    type,
    key,
    value,
    description,
  };
};
