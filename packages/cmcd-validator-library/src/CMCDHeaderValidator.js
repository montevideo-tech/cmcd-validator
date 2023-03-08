import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';

const CMCDHeaderValidator = (header) => {
  const errors = [];
  const warnings = [];
  const rawData = header;

  // Check header
  const valid = headerValidator(header, errors);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseHeaderToJson(header);

  // Check key value
  keyValValidator(parsedData, errors, warnings);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
