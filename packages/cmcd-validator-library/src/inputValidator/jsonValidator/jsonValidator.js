import { cmcdTypes, errorTypes, keyTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

const jsonIsValid = (jsonString, errors, requestID) => {
  let valid = true;
  const keyvalue = jsonString.split(',');
  const keys = [];

  // Check if there's double key
  keyvalue.forEach((key) => {
    keys.push(key.split(':')[0]);
  });

  if ((new Set(keys)).size !== keys.length) {
    errors.push(createError(errorTypes.duplicateKey, requestID));
    return false;
  }

  try {
    const obj = JSON.parse(jsonString);

    Object.keys(obj).forEach((key) => {
      if (
        typeof obj[key] === cmcdTypes.string
        && keyTypes[key] === cmcdTypes.number
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
