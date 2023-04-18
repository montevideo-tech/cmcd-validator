import {
  isBooleanCorrect, isNumberCorrect, isStringCorrect,
  isKeyRepeated, isSeparetedCorrectly, includesCMCDRequest,
  isURLMalformed,
  areRequestsSeparated,
  multipleCMCDReq,
} from '../../utils/formatFunctions.js';

const queryValidator = (queryString, error, warnings, config, extendedKeyTypes) => {
  // Check if there is a CMCD request in the queryString and Catch if the URL is malformed
  if (!includesCMCDRequest(queryString, error) || isURLMalformed(queryString, error)) {
    return false;
  }

  const query = queryString.split('?').pop();
  const requests = decodeURIComponent(query).split('CMCD=');

  // Check if there is another query before CMCD query and is missing a '&' separating them
  if (!areRequestsSeparated(requests, error)) {
    return false;
  }

  // Check if there is more than one CMCD request
  requests.shift();
  if (multipleCMCDReq(requests, error)) {
    return false;
  }

  const values = decodeURIComponent(query).split('CMCD=')[1].split('&')[0].split(',');

  const keys = [];
  let valid = true;

  // Check: key/value is separated by =
  values.forEach((val) => {
    if (isSeparetedCorrectly(val, error, extendedKeyTypes)) {
      const [key, value] = val.split('=');
      if (config?.specificKey && !config.specificKey?.includes(key)) {
        return;
      }
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
