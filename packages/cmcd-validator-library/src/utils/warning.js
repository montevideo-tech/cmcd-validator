import { logger } from '../logger.js';
import { warningDescription, warningTypes } from './constants.js';
import getKeyByValue from './getKeyByValue.js';

export const createWarning = (type, key, value, requestID) => {
  if (!Object.values(warningTypes).includes(type)) {
    return -1;
  }

  const warning = getKeyByValue(warningTypes, type);

  // logger.info(`'${requestID}': Warning in '${key}': ${warningDescription[warning]}`);

  return {
    type,
    key,
    value,
    description: warningDescription[warning],
  };
};
