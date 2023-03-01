import { errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';

const jsonIsValid = (jsonString, errors) => {
  let valid = true;
  try {
    JSON.parse(jsonString);
  } catch (error) {
    errors.push(createError(errorTypes.invalidJson));
    valid = false;
  }
  return valid;
};

export default jsonIsValid;
