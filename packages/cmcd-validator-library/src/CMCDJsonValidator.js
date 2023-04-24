import { v4 as uuidv4 } from 'uuid';
import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';
import jsLogger from 'js-logger'

const CMCDJsonValidator = (jsonString, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];
  const requestID = uuidv4();

  jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE })
  jsLogger.info(`${requestID}: Started CMCD Json Validation.`);

  // Check json
  jsLogger.info(`${requestID}: Validating Json format.`);
  const valid = jsonIsValid(jsonString, errors, requestID);

  if (!valid) {
    jsLogger.info(`${requestID}: Json not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  jsLogger.info(`${requestID}: Json is valid.`);

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings, requestID);
  }

  // Check key value
  jsLogger.info(`${requestID}: Validating Json keys.`);
  keyValValidator(jsonObj, errors, requestID, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
