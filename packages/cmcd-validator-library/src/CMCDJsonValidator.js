import { v4 as uuidv4 } from 'uuid';
import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';

const CMCDJsonValidator = (jsonString, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];
  const requestID = uuidv4();


  // Check json
  const valid = jsonIsValid(jsonString, errors, requestID);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings, requestID);
  }

  // Check key value
  keyValValidator(jsonObj, errors, requestID, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
