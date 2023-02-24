import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseQueryToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';

const CMCDQueryValidator = (query) => {
  const errors = [];
  const rawData = query;

  // Check query
  const valid = queryValidator(query, errors);

  if (!valid) {
    return createOutput(errors, rawData);
  }

  // Parsed to json
  const parsedData = parseQueryToJson(query);

  // Check key value
  keyValValidator(parsedData, errors);

  return createOutput(errors, rawData, parsedData);
};

export default CMCDQueryValidator;
