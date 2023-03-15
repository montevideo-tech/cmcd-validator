import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { logger } from './logger.js';

const CMCDHeaderValidator = (header, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  let warnings = [];

  logger.info('Started CMCD Header Validation.');

  // Check header
  logger.info('Validating header format.')
  const valid = headerValidator(header, errors, warnings, warningFlag);

  if (!valid) {
    logger.info('Header not valid.');
    return createOutput(errors, warnings, rawData);
  }
  logger.info('Header is valid.');

  // Parsed to json
  logger.info('Parsing header.');
  const parsedData = parseHeaderToJson(header);

  // Check key value
  logger.info('Validating header keys.');
  keyValValidator(parsedData, errors);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
