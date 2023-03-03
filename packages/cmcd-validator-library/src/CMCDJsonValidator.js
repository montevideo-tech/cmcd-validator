import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import { createOutput } from './utils/output.js';

const CMCDJsonValidator = (jsonString) => {
  const errors = [];
  const rawData = jsonString;

  // Check json
  const valid = jsonIsValid(jsonString, errors);

  if (!valid) {
    return createOutput(errors, rawData);
  }

  const jsonObj = JSON.parse(jsonString);

  // Check key value
  keyValValidator(jsonObj, errors);

  return createOutput(errors, rawData, jsonObj);
};

export default CMCDJsonValidator;
