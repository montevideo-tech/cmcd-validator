import { v4 as uuidv4 } from 'uuid';
import { headerValidator } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { parseHeaderToJson } from './parser/index.js';
import { createOutput } from './utils/output.js';
import { keyTypes } from './utils/constants.js';

const CMCDHeaderValidator = (header, warningFlag = true) => {
  const errors = [];
  const rawData = header;
  const warnings = [];
  const requestID = uuidv4();


  // Check header
  const valid = headerValidator(header, errors, requestID, warnings, warningFlag);

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  // Parsed to json
  const parsedData = parseHeaderToJson(header);

  // Check key value
  keyValValidator(parsedData, errors, requestID, warnings, null, keyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, parsedData);
};

export default CMCDHeaderValidator;
