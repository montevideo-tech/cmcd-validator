import { cmcdTypes, errorTypes, keyTypes } from '../utils/constants.js';
import { createError } from '../utils/error.js';

export const checkMaxLength = (errors, key, value) => {
  if (value.length > 64) {
    console.log(`Invalid value for key '${key}'. Maximum length is 64 characters.`);
    errors.push(createError(errorTypes.invalidValue, key, value));
  }
};

export const isEncoded = (errors, key, value) => {
  if (decodeURIComponent(value) === value) {
    console.log(`The '${key}' value must be URLencoded.`);
    errors.push(createError(errorTypes.parameterEncoding, key, value));
  }
};

export const checkValidNrrFormat = (errors, key, value) => {
  if (!(/^(\d*-\d*)$/.test(value)) && !(/^\d*-$/.test(value)) && !(/^-\d*$/.test(value))) {
    errors.push(createError(errorTypes.incorrectFormat, key, value));
  }
};

export const checkValidValue = (errors, key, value, array) => {
  if (!array.includes(value)) {
    console.log(`'${key}' value does not meet the necessary requirements. Must be one of the following values: ${array}.`);
    errors.push(createError(errorTypes.invalidValue, key, value));
  }
};

export const checkRoundToNearest = (errors, key, value, num, unit) => {
  if ((value % num) !== 0) {
    console.log(`'${key}' value is not rounded to the nearest${num}${unit}.`);
    errors.push(createError(errorTypes.invalidValue, key, value));
  }
};

export const checkIgnoredParameter = (errors, key, value, exep) => {
  if (value === exep) {
    console.log(`The '${key}' key should not be sent if the value is ${exep}`);
    errors.push(createError(errorTypes.unnecessaryKey, key, value));
  }
};

export const isReserved = (errors, key, value) => {
  if (!(key in keyTypes)) {
    console.log(`The key '${key}' is not reserved.`);
    errors.push(createError(errorTypes.unknownKey, key, value));
  }
};

export const isPositive = (errors, key, value) => {
  if ((keyTypes[key] === cmcdTypes.number) && (value < 0)) {
    console.log(`The '${key}' value must greater than 0.`);
    errors.push(createError(errorTypes.invalidValue, key, value));
  }
};

export const checkBlKey = (cmcdJson, errors, key, value) => {
  if (!('ot' in cmcdJson)) {
    console.log(`The '${key}'key should only be sent with the 'ot' key.`);
    errors.push(createError(errorTypes.invalidValue, key, value));
  }
};

export const checkCorrectType = (errors, key, value) => {
  if ((typeof value !== keyTypes[key]) && (keyTypes[key] === cmcdTypes.token
    && typeof value !== cmcdTypes.string)) {
    console.log(`'${key}' type is incorrect.`);
    errors.push(createError(errorTypes.wrongTypeValue, key, value));
  }
};

export const checkOtValidValue = (errors, key, value) => {
  checkValidValue(errors, key, value, ['m', 'a', 'v', 'av', 'i', 'c', 'tt', 'k', 'o']);
};

export const checkSfValidValue = (errors, key, value) => {
  checkValidValue(errors, key, value, ['d', 'h', 's', 'o']);
};

export const checkStValidValue = (errors, key, value) => {
  checkValidValue(errors, key, value, ['v', 'l']);
};
