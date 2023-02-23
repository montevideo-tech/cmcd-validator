import { createError } from './error.js';

export const jsonIsValid = (jsonString, errors) => {
  const valid = true;
  try {
    JSON.parse(jsonString);
  } catch (error) {
    errors.push(createError("invalid-json"));
    return !valid;
  }
  return valid;
}
