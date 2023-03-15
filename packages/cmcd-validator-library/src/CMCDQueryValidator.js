import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { parseQueryToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { v4 as uuidv4 } from 'uuid';
import { logger } from './logger.js';

const CMCDQueryValidator = (query, warningFlag = true) => {
  const errors = [];
  const rawData = query;
  const warnings = [];
  const requestID = uuidv4();

  logger.info(`Started CMCD Query Validation for '${requestID}'.`);

  // Check query
  logger.info('Validating query format.')
  const valid = queryValidator(query, errors, requestID);

  if (!valid) {
    logger.info('Query not valid.');
    return createOutput(errors, warnings, rawData);
  }
  logger.info('Query is valid.');

  // Parsed to json
  logger.info('Parsing query.');
  const parsedData = parseQueryToJson(query);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(parsedData), warnings);
  }

  // Check key value
  logger.info('Validating query keys.');
  keyValValidator(parsedData, errors, requestID);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDQueryValidator;
