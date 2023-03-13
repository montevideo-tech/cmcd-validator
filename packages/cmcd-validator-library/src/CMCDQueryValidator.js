import { queryValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { parseQueryToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';

const CMCDQueryValidator = (query, warningFlag = true) => {
  const errors = [];
  const rawData = query;
  const warnings = [];

  // Check query
  const valid = queryValidator(query, errors);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseQueryToJson(query);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(parsedData), warnings);
  }

  // Check key value
  keyValValidator(parsedData, errors, warnings, warningFlag);
  

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDQueryValidator;
