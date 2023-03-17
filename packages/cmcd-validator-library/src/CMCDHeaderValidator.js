import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { logger } from './logger.js';
import { v4 as uuidv4 } from 'uuid';

const CMCDHeaderValidator = (header, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  let warnings = [];
  const requestID = uuidv4();

  logger.info(`${requestID}: Started CMCD Header Validation.`);

  // Check header
  logger.info(`${requestID}: Validating header format.`)
  const valid = headerValidator(header, errors, requestID, warnings, warningFlag);

  if (!valid) {
    logger.info(`${requestID}: Header not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  logger.info(`${requestID}: Header is valid.`);

  // Parsed to json
  logger.info(`${requestID}: Parsing header.`);
  const parsedData = parseHeaderToJson(header);

  // Check key value
  logger.info(`${requestID}: Validating header keys.`);
  keyValValidator(parsedData, errors, requestID);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
