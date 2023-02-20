import { keyTypes } from './constants.js'
import { createError } from './error.js';

export const jsonValidator=(jsonString) => {
  const err = [];

  try {
    const checkJson = JSON.parse(jsonString);
  } catch (error) {
    err.push(createError("invalid-json"));
    return false;
  }
  return true;
}
