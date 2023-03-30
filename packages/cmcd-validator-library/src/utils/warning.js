import { warningDescription, warningTypes } from './constants.js';
import getKeyByValue from './getKeyByValue.js';

export const createWarning = (type, key, value) => {
  if (!Object.values(warningTypes).includes(type)) {
    return -1;
  }

  const warning = getKeyByValue(warningTypes, type);

  return {
    type,
    key,
    value,
    description: warningDescription[warning],
  };
};
