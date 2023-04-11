import keySortedAlphabetically from '../../utils/keySortedAlphabetically.js';
import {
  isKeyInCorrectHeader, isBooleanCorrect, isSeparetedCorrectly,
  isStringCorrect, isHeaderRepeated, isKeyRepeated, isHeader, isEmptyHeader,
} from '../../utils/formatFunctions';

const headerValidator = (
  headerString,
  errors,
  warnings,
  config,
  extendedcmcdHeader,
  extendedKeyTypes,
  warningFlag = true,
) => {
  const headers = headerString.split('\n');
  const cmcdHeaders = [];
  const keys = [];
  let headerKeys = [];
  let valid = true;

  // We comment the following eslint error because we don't want to
  // return any value in the foreach
  // eslint-disable-next-line consistent-return
  headers.forEach((element) => {
    const [header, keysArray] = element.split(': ');
    if (!(header in extendedcmcdHeader)) {
      return false;
    }

    if (isHeaderRepeated(header, cmcdHeaders, errors)
    || isEmptyHeader(keysArray, header, errors)) {
      valid = false;
      return false;
    }

    keysArray.split(',').forEach((keyVal) => {
      if (isSeparetedCorrectly(keyVal, errors, extendedKeyTypes)) {
        const [key, value] = keyVal.split('=');
        if (config?.specificKey && !config.specificKey?.includes(key)) {
          return;
        }
        if (isKeyRepeated(key, keys, errors)) {
          valid = false;
        }
        if (!isKeyInCorrectHeader(header, key, errors, extendedcmcdHeader)
        || !isStringCorrect(key, value, errors, extendedKeyTypes)
        || !isBooleanCorrect(key, value, errors, extendedKeyTypes)) {
          valid = false;
        }
        keys.push(key);
        headerKeys.push(key);
      } else {
        valid = false;
      }
    });
    if (warningFlag === true) {
      keySortedAlphabetically(headerKeys, warnings);
      headerKeys = [];
    }
    cmcdHeaders.push(header);
  });

  if (!isHeader(cmcdHeaders, errors)) {
    return false;
  }
  return valid;
};

export default headerValidator;
