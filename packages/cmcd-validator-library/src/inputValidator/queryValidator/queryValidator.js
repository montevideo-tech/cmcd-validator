import { cmcdTypes, keyTypes, errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
import checkQuotes from '../../utils/checkQuotes.js';

const queryValidator = (queryString, error, requestID) => {
  if (!queryString.includes('CMCD=')) {
    error.push(createError(errorTypes.noCMCDRequest, requestID));
    return false;
  }

  // Check if the URL is encoded
  if (decodeURI(queryString) === queryString) {
    error.push(createError(errorTypes.parameterEncoding, requestID));
    return false;
  }

  // Check if there is more than one CMCD request
  const query = queryString.split('?').pop();
  const requests = decodeURIComponent(query).split('CMCD=');
  requests.shift();

  if (requests.length > 1) {
    error.push(createError(errorTypes.incorrectFormat, requestID));
    return false;
  }

  const values = decodeURIComponent(query).split('CMCD=')[1].split('&')[0].split(',');

  const keys = [];
  let valid = true;

  // Check: key/value is separated by =
  values.forEach((val) => {
    const [key, value] = val.split('=');
    keys.push(key);

    // Check: string require ""
    if ((keyTypes[key] === cmcdTypes.string && !checkQuotes(value))
      || (keyTypes[key] === cmcdTypes.token && checkQuotes(value))
    ) {
      valid = false;
      error.push(createError(errorTypes.invalidValue, requestID, key, value));
    }
    // Check: if the key does not have value it must be a bool
    // Check: number does not require ""
    if (
      (typeof value === 'undefined' && keyTypes[key] !== cmcdTypes.boolean)
      || ((value === 'true') && keyTypes[key] === cmcdTypes.boolean)
      || ((typeof value === cmcdTypes.number || (typeof value === cmcdTypes.string && value !== 'false'))
      && keyTypes[key] === cmcdTypes.boolean)
      || (keyTypes[key] === cmcdTypes.number && checkQuotes(value))
    ) {
      valid = false;
      error.push(createError(errorTypes.wrongTypeValue, requestID, key, value));
    }
  });

  if ((new Set(keys)).size !== keys.length) {
    error.push(createError(errorTypes.duplicateKey, requestID));
    return false;
  }
  return valid;
};

export default queryValidator;
