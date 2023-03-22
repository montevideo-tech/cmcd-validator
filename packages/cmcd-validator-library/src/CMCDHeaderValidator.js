import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';

const CMCDHeaderValidator = (header, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  const warnings = [];

  // Check header
  const valid = headerValidator(header, errors, warnings, warningFlag);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseHeaderToJson(header);

  // Check key value
  keyValValidator(parsedData, errors, warnings, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
