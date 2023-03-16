import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { parseQueryToJson } from './parser/index.js';
import { checkConfig } from './inputValidator/configValidator/checkConfig.js';
import { createOutput } from './utils/output.js';

const CMCDQueryValidator = (query, config, warningFlag = true) => {
  const errors = [];
  const rawData = query;
  const warnings = [];
  // check config
  if (config && !checkConfig(config, errors)) {
    return createOutput(errors, warnings, rawData);
  }

  // Check query
  const valid = queryValidator(query, errors, warnings, config);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseQueryToJson(query);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(parsedData), warnings);
  }

  // Check key value
  keyValValidator(parsedData, errors, warnings, config, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDQueryValidator;
