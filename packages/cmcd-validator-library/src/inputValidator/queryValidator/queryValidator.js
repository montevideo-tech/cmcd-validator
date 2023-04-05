import { errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
// import checkQuotes from '../../utils/checkQuotes.js';
import {
  isBooleanCorrect, isNumberCorrect, isStringCorrect, isKeyRepeated, isSeparetedCorrectly,
} from '../headerValidator/formatFunctions.js';

const queryValidator = (queryString, error, warnings, config, extendedKeyTypes) => {
  if (!queryString.includes('CMCD=')) {
    error.push(createError(errorTypes.noCMCDRequest));
    return false;
  }
  // Catch if the URL is malformed
  try {
    // Check if the URL is encoded
    if (decodeURI(queryString) === queryString) {
      error.push(createError(errorTypes.parameterEncoding));
      return false;
    }
  } catch (err) {
    error.push(createError(errorTypes.queryMalformed));
    return false;
  }

  const query = queryString.split('?').pop();
  const requests = decodeURIComponent(query).split('CMCD=');

  // Check if there is another query before CMCD query and is missing a '&' separating them
  if ((requests[0].length > 0) && (requests[0][requests[0].length - 1] !== '&')) {
    error.push(createError(errorTypes.noAmpersandBetweenRequests));
    return false;
  }

  // Check if there is more than one CMCD request
  requests.shift();
  if (requests.length > 1) {
    error.push(createError(errorTypes.incorrectFormat));
    return false;
  }

  const values = decodeURIComponent(query).split('CMCD=')[1].split('&')[0].split(',');

  const keys = [];
  let valid = true;

  // Check: key/value is separated by =
  values.forEach((val) => {
    if (isSeparetedCorrectly(val, error, extendedKeyTypes)) {
      const [key, value] = val.split('=');

      if (isKeyRepeated(key, keys, error)) {
        valid = false;
      }
      // Check only the keys in the configuration
      // Check: string require ""
      if (!isStringCorrect(key, value, error, extendedKeyTypes)
        || !isBooleanCorrect(key, value, error, extendedKeyTypes)
        || !isNumberCorrect(key, value, error, extendedKeyTypes)) {
        valid = false;
      }
      keys.push(key);
    } else {
      valid = false;
    }
  });

  return valid;
};

export default queryValidator;
