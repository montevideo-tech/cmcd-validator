import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseQueryToJson } from './parser/index.js';
import { checkConfig } from './inputValidator/configValidator/checkConfig.js';
import { createOutput } from './utils/output.js';

const CMCDQueryValidator = (query, config) => {
  const errors = [];
  const rawData = query;
  // check config
  if (config && !checkConfig(config, errors)) {
    return createOutput(errors, rawData);
  }

  // Check query
  const valid = queryValidator(query, errors, config);

  if (!valid) {
    return createOutput(errors, rawData);
  }

  // Parsed to json
  const parsedData = parseQueryToJson(query);

  // Check key value
  keyValValidator(parsedData, errors, config);

  return createOutput(errors, rawData, parsedData);
};

export default CMCDQueryValidator;
