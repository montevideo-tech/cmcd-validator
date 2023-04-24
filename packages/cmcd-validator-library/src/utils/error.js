import { errorTypes, errorDescription } from './constants.js';
import getKeyByValue from './getKeyByValue.js';
import jsLogger from 'js-logger';

export const createError = (type, requestID, key, value, description) => {
  jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE });

  if (!Object.values(errorTypes).includes(type)) {
    return -1;
  }

  const error = getKeyByValue(errorTypes, type);

  if (description === undefined) {
    jsLogger.info(`${requestID}: Error in '${key}': ${errorDescription[error]}`);
    return {
      type,
      key,
      value,
      description: errorDescription[error],
    };
  }
  jsLogger.info(`${requestID}: Error in '${key}': ${description}`);
  return {
    type,
    key,
    value,
    description,
  };
};
