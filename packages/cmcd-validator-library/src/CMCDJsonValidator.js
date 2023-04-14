import { jsonIsValid } from './inputValidator/index.js';
import { keyValValidator } from './keyValueValidator/index.js';
import keySortedAlphabetically from './utils/keySortedAlphabetically.js';
import { createOutput } from './utils/output.js';
import { setConfig } from './inputValidator/configValidator/setConfig.js';

const CMCDJsonValidator = (jsonString, config, warningFlag = true) => {
  const errors = [];
  const rawData = jsonString;
  const warnings = [];

  const [validConfig,
    extendedKeyTypes] = setConfig(config, errors, warnings, warningFlag);
  // check config
  if (!validConfig) {
    return createOutput(errors, warnings, rawData);
  }

  // Check json
  const valid = jsonIsValid(
    jsonString,
    errors,
    config,
    extendedKeyTypes,
  );

  if (!valid) {
    return createOutput(errors, warnings, rawData);
  }

  const jsonObj = JSON.parse(jsonString);

  if (warningFlag === true) {
    keySortedAlphabetically(Object.keys(jsonObj), warnings);
  }

  // Check key value
  keyValValidator(jsonObj, errors, warnings, config, extendedKeyTypes, warningFlag);

  return createOutput(errors, warnings, rawData, jsonObj, warnings);
};

export default CMCDJsonValidator;
