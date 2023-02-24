export const cmcdTypes = {
  number: 'number',
  boolean: 'boolean',
  token: 'token',
  string: 'string',
};

export const keyTypes = {
  br: cmcdTypes.number,
  bl: cmcdTypes.number,
  bs: cmcdTypes.boolean,
  cid: cmcdTypes.string,
  d: cmcdTypes.number,
  dl: cmcdTypes.number,
  mtp: cmcdTypes.number,
  nor: cmcdTypes.string,
  nrr: cmcdTypes.string,
  ot: cmcdTypes.token,
  pr: cmcdTypes.number,
  rtp: cmcdTypes.number,
  sf: cmcdTypes.token,
  sid: cmcdTypes.string,
  st: cmcdTypes.token,
  su: cmcdTypes.boolean,
  tb: cmcdTypes.number,
  v: cmcdTypes.number,
};

export const errorTypes = {
  unknownKey: 'unknown-key',
  invalidValue: 'invalid-value',
  wrongTypeValue: 'wrong-type-value',
  incorrectFormat: 'incorrect-format',
  parameterEncoding: 'parameter-encoding',
  missingKey: 'missing-key',
  invalidHeader: 'invalid-header',
  invalidJson: 'invalid-json',
  duplicateKey: 'duplicate-key',
};

export const errorDescription = {
  unknownKey: 'Key is not part of reserved keys',
  invalidValue: 'Value does not meet requirements',
  wrongTypeValue: 'Value type is incorrect',
  incorrectFormat: 'Format is incorrect',
  parameterEncoding: 'Parameter is not encoded',
  missingKey: 'Key is missing',
  invalidHeader: 'Header is not valid',
  invalidJson: 'Json format is not valid',
  duplicateKey: 'Key/Keys are not unique',
};
