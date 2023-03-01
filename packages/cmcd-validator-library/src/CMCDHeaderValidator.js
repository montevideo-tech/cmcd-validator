import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';

const CMCDHeaderValidator = (header) => {
  const errors = [];
  const rawData = header;

  // Check header
  const valid = headerValidator(header, errors);

  if (!valid) {
    return createOutput(errors, rawData);
  }

  // Parsed to json
  const parsedData = parseHeaderToJson(header);

  // Check key value
  keyValValidator(parsedData, errors);

  return createOutput(errors, rawData, parsedData);
};

export default CMCDHeaderValidator;
