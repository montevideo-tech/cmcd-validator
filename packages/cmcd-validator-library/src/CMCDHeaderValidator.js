import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { setConfig } from './inputValidator/configValidator/setConfig.js';

const CMCDHeaderValidator = (header, config, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  const warnings = [];

  const [validConfig,
    extendedKeyTypes,
    extendedcmcdHeader] = setConfig(config, errors, warnings, warningFlag);
  // check config
  if (!validConfig) {
    return createOutput(errors, warnings, rawData);
  }

  // Check header
  const valid = headerValidator(
    header,
    errors,
    warnings,
    config,
    extendedcmcdHeader,
    extendedKeyTypes,
    warningFlag,
  );

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseHeaderToJson(header, extendedcmcdHeader, extendedKeyTypes);

  // Check key value
  keyValValidator(parsedData, errors, warnings, config, extendedKeyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
