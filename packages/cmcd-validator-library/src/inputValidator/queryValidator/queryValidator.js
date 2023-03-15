import { cmcdTypes, keyTypes, errorTypes } from '../../utils/constants.js';
import { createError } from '../../utils/error.js';
import checkQuotes from '../../utils/checkQuotes.js';

const queryValidator = (queryString, error, config) => {
  if (!queryString.includes('CMCD=')) {
    error.push(createError(errorTypes.noCMCDRequest));
    return false;
  }

  // Check if the URL is encoded
  const keyTypesModify = keyTypes;
  if (decodeURI(queryString) === queryString) {
    error.push(createError(errorTypes.parameterEncoding));
    return false;
  }

  if (config?.customKey) {
    config.customKey.forEach((customK) => {
      keyTypesModify[customK.key] = customK.type;
    });
  }

  // Check if there is more than one CMCD request
  const query = queryString.split('?').pop();
  const requests = decodeURIComponent(query).split('CMCD=');
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
    const [key, value] = val.split('=');
    keys.push(key);
    // Check only the keys in the configuration
    // Check: string require ""
    if (
      (keyTypesModify[key] === cmcdTypes.string && !checkQuotes(value))
      || (keyTypesModify[key] === cmcdTypes.token && checkQuotes(value))) {
      valid = false;
      error.push(createError(errorTypes.invalidValue, key, value));
    }
    // Check: if the key does not have value it must be a bool
    // Check: number does not require ""
    if (
      (typeof value === 'undefined' && keyTypesModify[key] !== cmcdTypes.boolean)
      || ((value === 'true') && keyTypesModify[key] === cmcdTypes.boolean)
      || ((typeof value === cmcdTypes.number || (typeof value === cmcdTypes.string && value !== 'false'))
      && keyTypesModify[key] === cmcdTypes.boolean)
      || (keyTypesModify[key] === cmcdTypes.number && !Number(value))
    ) {
      valid = false;
      error.push(createError(errorTypes.wrongTypeValue, key, value));
    }
  });
  if ((new Set(keys)).size !== keys.length) {
    error.push(createError(errorTypes.duplicateKey));
    return false;
  }
  return valid;
};

export default queryValidator;
