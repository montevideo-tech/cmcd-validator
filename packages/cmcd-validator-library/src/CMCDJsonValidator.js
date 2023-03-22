import { v4 as uuidv4 } from 'uuid';
import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';
import { logger } from './logger.js';

const CMCDJsonValidator = (jsonString, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];
  const requestID = uuidv4();

  logger.info(`${requestID}: Started CMCD Json Validation.`);

  // Check json
  logger.info(`${requestID}: Validating Json format.`);
  const valid = jsonIsValid(jsonString, errors, requestID);

  if (!valid) {
    logger.info(`${requestID}: Json not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  logger.info(`${requestID}: Json is valid.`);

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings, requestID);
  }

  // Check key value
  logger.info(`${requestID}: Validating Json keys.`);
  keyValValidator(jsonObj, errors, requestID, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
