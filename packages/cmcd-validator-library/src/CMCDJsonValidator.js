import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { v4 as uuidv4 } from 'uuid';
import { logger } from './logger.js';

const CMCDJsonValidator = (jsonString, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];
  const requestID = uuidv4();

  logger.info(`Started CMCD Json Validation for '${requestID}'.`);

  // Check json
  logger.info('Validating Json format.')
  const valid = jsonIsValid(jsonString, errors, requestID);

  if (!valid) {
    logger.info('Json not valid.');
    return createOutput(errors, warnings, rawData);
  }
  logger.info('Json is valid.');

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings);
  }

  // Check key value
  logger.info('Validating Json keys.');
  keyValValidator(jsonObj, errors, requestID);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
