import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { parseQueryToJson } from './parser/index.js';
import { setConfig } from './inputValidator/configValidator/setConfig.js';
import { createOutput } from './utils/output.js';
import { v4 as uuidv4 } from 'uuid';
import { logger } from './logger.js';

const CMCDQueryValidator = (query, config, warningFlag = true) => {
  const errors = [];
  const rawData = query;
  const warnings = [];
  const requestID = uuidv4();

  logger.info(`${requestID}: Started CMCD Query Validation.`);

  const [validConfig, extendedKeyTypes] = setConfig(config, errors, requestID,warnings, warningFlag = true);
 
  // check config
  logger.info(`${requestID}: Check Configuration.`);
  if (!validConfig) {
    logger.info(`${requestID}: Configuration not valid.`);
    return createOutput(errors, warnings, rawData);
  }

  // Check query
  logger.info(`${requestID}: Validating query format.`)
  const valid = queryValidator(query, errors, requestID, warnings, config, extendedKeyTypes);

  if (!valid) {
    logger.info(`${requestID}: Query not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  logger.info(`${requestID}: Query is valid.`);

  // Parsed to json
  logger.info(`${requestID}: Parsing query.`);
  const parsedData = parseQueryToJson(query, extendedKeyTypes);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(parsedData), warnings, requestID);
  }

  // Check key value
  logger.info(`${requestID}: Validating query keys.`);
  keyValValidator(parsedData, errors, requestID, warnings, config, extendedKeyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDQueryValidator;
