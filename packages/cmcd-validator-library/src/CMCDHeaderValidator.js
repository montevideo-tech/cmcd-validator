import { v4 as uuidv4 } from 'uuid';
import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';
import jsLogger from 'js-logger'

const CMCDHeaderValidator = (header, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  const warnings = [];
  const requestID = uuidv4();

  jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE })
  jsLogger.info(`${requestID}: Started CMCD Header Validation.`);

  // Check header
  jsLogger.info(`${requestID}: Validating header format.`);
  const valid = headerValidator(header, errors, requestID, warnings, warningFlag);

  if (!valid) {
    jsLogger.info(`${requestID}: Header not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  jsLogger.info(`${requestID}: Header is valid.`);

  // Parsed to json
  jsLogger.info(`${requestID}: Parsing header.`);
  const parsedData = parseHeaderToJson(header);

  // Check key value
  jsLogger.info(`${requestID}: Validating header keys.`);
  keyValValidator(parsedData, errors, requestID, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
