import { keyTypes } from './constants.js';
import { createError } from './error.js';

export const checkMaxLength = (errors, key, value) => {
  if (value.length > 64) {
    console.log(`Invalid value for key '${key}'. Maximum length is 64 characters.`);
    errors.push(createError('invalid-value', key, value));
  }
};

export const isEncoded = (errors, key, value) => {
  if (decodeURIComponent(value) === value) {
    console.log(`The '${key}' value must be URLencoded.`);
    errors.push(createError('parameter-encoding', key, value));
  }
};

export const checkValidNrrFormat = (errors, key, value) => {
  if (!(/^(\d*-\d*)$/.test(value)) || !(/^\d*-$/.test(value)) || !(/^-\d*$/.test(value))) {
    console.log(`The '${key}' value format is incorrect`);
    errors.push(createError('incorrect-format', key, value));
  }
};

export const checkValidValue = (errors, key, value, array) => {
  if (!array.includes(value)) {
    console.log(`'${key}'` + ` value does not meet the necessary requirements. Must be one of the following values: ${array}.`);
    errors.push(createError('invalid-value', key, value));
  }
};

export const checkRoundToNearest = (errors, key, value, num, unit) => {
  if ((value % num) !== 0) {
    console.log(`'${key}'` + ` value is not rounded to the nearest${num}${unit}.`);
    errors.push(createError('invalid-value', key, value));
  }
};

export const checkIgnoredParameter = (errors, key, value, exep) => {
  if (value === exep) {
    console.log(`The '${key}' key must not be sent if the value is ${exep}`);
    errors.push(createError('unnecessary-parameter', key, value));
  }
};

export const isReserved = (errors, key, value) => {
  if (!(key in keyTypes)) {
    console.log(`The key '${key}' is not reserved.`);
    errors.push(createError(errors, 'unknown-key', key, value));
  }
};

export const isPositive = (errors, key, value) => {
  if ((keyTypes[key] === 'Integer') && (value < 0)) {
    console.log(`The '${key}' value must greater than 0.`);
    errors.push(createError('invalid-value', key, value));
  }
};

export const checkBlKey = (cmcdJson, errors, key, value) => {
  if (!('ot' in cmcdJson)) {
    console.log(`The '${key}'key should only be sent with the 'ot' key.`);
    errors.push(createError('invalid-value', key, value));
  }
};

export const checkCorrectType = (errors, key, value) => {
  if ((typeof value != keyTypes[key]) && (keyTypes[key] === 'token' && typeof value !== 'string')) {
    console.log(`'${key}' type is incorrect.`);
    errors.push(createError('wrong-type-value', key, value));
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
