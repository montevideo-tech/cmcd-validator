import { cmcdTypes, errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

const jsonIsValid = (jsonString, errors, requestID, config, extendedKeyTypes) => {
  let valid = true;
  const keyvalue = jsonString.split(',');
  const keys = [];

  // Check if there's double key
  keyvalue.forEach((keyVal) => {
    const key = keyVal.split(':')[0].replace(/{|"/g, '');
    if (config?.specificKey && !config.specificKey?.includes(key)) {
      return;
    }
    if (keys.includes(key)) {
      const description = `The key ${key} is repeated.`;
      errors.push(createError(errorTypes.duplicateKey, requestID, key, undefined, description));
      valid = false;
    }
    keys.push(key);
  });

  try {
    const obj = JSON.parse(jsonString);
    Object.keys(obj).forEach((key) => {
      if (config?.specificKey && !config.specificKey?.includes(key)) {
        return;
      }
      if (
        typeof obj[key] === cmcdTypes.string
        && extendedKeyTypes[key] === cmcdTypes.number
      ) {
        valid = false;
        errors.push(createError(errorTypes.wrongTypeValue, requestID, key, obj[key]));
      }
    });
  } catch (error) {
    errors.push(createError(errorTypes.invalidJson, requestID));
    valid = false;
  }
  return valid;
};

export default jsonIsValid;
