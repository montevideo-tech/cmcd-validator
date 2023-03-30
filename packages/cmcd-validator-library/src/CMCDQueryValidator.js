import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { parseQueryToJson } from './parser/index.js';
import { setConfig } from './inputValidator/configValidator/setConfig.js';
import { createOutput } from './utils/output.js';

const CMCDQueryValidator = (query, config, warningFlag = true) => {
  const errors = [];
  const rawData = query;
  const warnings = [];

  const [validConfig,
    extendedKeyTypes] = setConfig(config, errors, warnings, warningFlag);
  // check config
  if (!validConfig) {
    return createOutput(errors, warnings, rawData);
  }

  // Check query
  const valid = queryValidator(query, errors, warnings, config, extendedKeyTypes);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseQueryToJson(query, extendedKeyTypes);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(parsedData), warnings);
  }

  // Check key value
  keyValValidator(parsedData, errors, warnings, config, extendedKeyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDQueryValidator;
