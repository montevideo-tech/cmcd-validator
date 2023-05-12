import jsLogger from 'js-logger';
import { warningDescription, warningTypes } from './constants.js';
import getKeyByValue from './getKeyByValue.js';

export const createWarning = (type, requestID, key, value) => {
  jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE });

  if (!Object.values(warningTypes).includes(type)) {
    return -1;
  }

  const warning = getKeyByValue(warningTypes, type);

  jsLogger.info(`${requestID}: Warning in '${key}': ${warningDescription[warning]}`);

  return {
    type,
    key,
    value,
    description: warningDescription[warning],
  };
};
