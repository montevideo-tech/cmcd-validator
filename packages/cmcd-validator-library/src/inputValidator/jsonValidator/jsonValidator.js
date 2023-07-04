import { cmcdTypes, errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

const isStringTokenCorrect = (key, value, errors, extendedkeyTypes, requestID) => {
  if (
    (extendedkeyTypes[key] === cmcdTypes.string || extendedkeyTypes[key] === cmcdTypes.token) && 
    (typeof value === cmcdTypes.boolean || typeof value === cmcdTypes.number)
  ){
    const description = `The value for the key ${key} must be a ${extendedkeyTypes[key]}.`;
    errors.push(createError(errorTypes.wrongTypeValue,requestID, key, value, description));
    return false;
  }
  return true;
}

const isBooleanCorrectJson = (key, value, errors, extendedkeyTypes, requestID) => {
  if (extendedkeyTypes[key] === cmcdTypes.boolean && typeof value !== cmcdTypes.boolean){
    const description = `The value for the key ${key} must be a boolean.`;
    errors.push(createError(errorTypes.wrongTypeValue, requestID, key, value, description));
    return false;
  }
  return true;
}

const isNumberCorrectJson = (key, value, errors, extendedkeyTypes, requestID) => {
  if (extendedkeyTypes[key] === cmcdTypes.number && typeof value !== cmcdTypes.number) {
    const description = `The value for the key ${key} must be a number`;
    errors.push(createError(errorTypes.wrongTypeValue, requestID, key, value, description));
    return false;
  }
  return true;
};

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
        !isBooleanCorrectJson(key, obj[key], errors, extendedKeyTypes, requestID)
        || !isNumberCorrectJson(key, obj[key], errors, extendedKeyTypes, requestID)
        || !isStringTokenCorrect(key, obj[key],errors,extendedKeyTypes,requestID)
      ) {
        valid = false;
      }
    });
  } catch (error) {
    errors.push(createError(errorTypes.invalidJson, requestID));
    valid = false;
  }
  return valid;
};

export default jsonIsValid;
