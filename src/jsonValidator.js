import { createError } from './error.js';

export const jsonIsValid = (jsonString, errors) => {
  try {
    const checkJson = JSON.parse(jsonString);
  } catch (error) {
    errors.push(createError("invalid-json"));
    return {
      valid : false,
      errors
    }
  }
  return {
    valid : true,
    errors
  }
}
