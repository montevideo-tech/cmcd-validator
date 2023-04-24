import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { v4 as uuidv4 } from 'uuid';
import { setConfig } from './inputValidator/configValidator/setConfig.js';
import jsLogger from 'js-logger';

const CMCDHeaderValidator = (header, config, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  const warnings = [];
  const requestID = uuidv4();

  jsLogger.useDefaults({ defaultLevel: jsLogger.TRACE });
  jsLogger.info(`${requestID}: Started CMCD Header Validation.`);

  const [validConfig,
    extendedKeyTypes,
    extendedcmcdHeader] = setConfig(config, errors, warnings, warningFlag);
  // check config
  if (!validConfig) {
    return createOutput(errors, warnings, rawData);
  }

  // Check header
  jsLogger.info(`${requestID}: Validating header format.`);
  const valid = headerValidator(
    header,
    errors,
    requestID,
    warnings,
    config,
    extendedcmcdHeader,
    extendedKeyTypes,
    warningFlag,
  );

  if (!valid) {
    jsLogger.info(`${requestID}: Header not valid.`);
    return createOutput(errors, warnings, rawData);
  }
  jsLogger.info(`${requestID}: Header is valid.`);

  // Parsed to json
  jsLogger.info(`${requestID}: Parsing header.`);
  const parsedData = parseHeaderToJson(header, extendedcmcdHeader, extendedKeyTypes);

  // Check key value
  keyValValidator(parsedData, errors, requestID, warnings, config, extendedKeyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
