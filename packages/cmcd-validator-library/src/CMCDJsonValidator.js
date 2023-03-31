import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';

const CMCDJsonValidator = (jsonString, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];

  // Check json
  const valid = jsonIsValid(jsonString, errors);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings);
  }

  // Check key value
  keyValValidator(jsonObj, errors, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
