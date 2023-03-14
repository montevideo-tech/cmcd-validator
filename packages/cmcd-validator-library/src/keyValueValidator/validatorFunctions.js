import {
  cmcdTypes, errorTypes, keyTypes, warningTypes
} from '../utils/constants.js';
import { createError } from '../utils/error.js';
import { createWarning } from '../utils/warning.js'

export const checkMaxLength = (errors, key, value) => {
  if (value.length > 64) {
    const description = `Invalid value for key '${key}'. Maximum length is 64 characters.`;
    errors.push(createError(errorTypes.invalidValue, key, value, description));
  }
};

export const isEncoded = (errors, key, value) => {
  if (decodeURIComponent(value) === value) {
    const description = `The key: '${key}' with its value: ${value} must be URLencoded.`;
    errors.push(createError(errorTypes.parameterEncoding, key, value, description));
    return false;
  }
  return true;
};

export const checkValidNrrFormat = (errors, key, value) => {
  if (!(/^(\d*-\d*)$/.test(value)) && !(/^\d*-$/.test(value)) && !(/^-\d*$/.test(value))) {
    const description = 'Invalid Nrr fromat';
    errors.push(createError(errorTypes.incorrectFormat, key, value, description));
  }
};

export const checkValidValue = (errors, key, value, array) => {
  if (!array.includes(value)) {
    const description = `${key} value does not meet the necessary requirements. Must be one of the following values: ${array}.`;
    errors.push(createError(errorTypes.invalidValue, key, value, description));
  }
};

export const checkRoundToNearest = (errors, key, value, num, unit) => {
  if ((value % num) !== 0) {
    const description = `'${key}' value is not rounded to the nearest${num}${unit}.`;
    errors.push(createError(errorTypes.invalidValue, key, value, description));
  }
};

export const checkIgnoredParameter = (errors, key, value, exep) => {
  if (value === exep) {
    const description = `The '${key}' key should not be sent if the value is ${exep}`;
    errors.push(createError(errorTypes.unnecessaryKey, key, value, description));
  }
};

export const isReserved = (errors, key, value) => {
  if (!(key in keyTypes)) {
    const description = `The key '${key}' is not reserved.`;
    errors.push(createError(errorTypes.unknownKey, key, value, description));
  }
};

export const isPositive = (errors, key, value) => {
  if ((keyTypes[key] === cmcdTypes.number) && (value < 0)) {
    const description = `The '${key}' value must greater than 0.`;
    errors.push(createError(errorTypes.invalidValue, key, value, description));
  }
};

export const checkBlKey = (cmcdJson, errors, key, value) => {
  if (!('ot' in cmcdJson)) {
    const description = `The '${key}'key should only be sent with the 'ot' key.`;
    errors.push(createError(errorTypes.invalidValue, key, value, description));
  }
};

export const checkCorrectType = (errors, key, value) => {
  if ((typeof value !== keyTypes[key]) && (keyTypes[key] === cmcdTypes.token
    && typeof value !== cmcdTypes.string)) {
    const description = `'${key}' type is incorrect.`;
    errors.push(createError(errorTypes.wrongTypeValue, key, value, description));
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

export const checkPRValue = (cmcdJson, warnings, key, value) => {
  if ((key === 'pr') && value === 1) {
    warnings.push(createWarning(warningTypes.valuePR, key, value));
  }
};

export const checkVValue = (cmcdJson, warnings, key, value) => {
  if ((key === 'v') && cmcdJson['v'] === 1) {
    warnings.push(createWarning(warningTypes.valueV, key, value));
  }
};
