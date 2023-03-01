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
  noCMCDRequest: 'no-CMCD-request',
  unknownKey: 'unknown-key',
  invalidValue: 'invalid-value',
  wrongTypeValue: 'wrong-type-value',
  incorrectFormat: 'incorrect-format',
  parameterEncoding: 'parameter-encoding',
  missingKey: 'missing-key',
  invalidHeader: 'invalid-header',
  invalidJson: 'invalid-json',
  duplicateKey: 'duplicate-key',
  unnecessaryKey: 'unnecessary-key',
  duplicateHeader: 'duplicate-header',
};

export const errorDescription = {
  noCMCDRequest: 'No CMCD request found',
  unknownKey: 'Key is not part of reserved keys',
  invalidValue: 'Value does not meet requirements',
  wrongTypeValue: 'Value type is incorrect',
  incorrectFormat: 'Format is incorrect',
  parameterEncoding: 'Parameter is not encoded',
  missingKey: 'Key is missing',
  invalidHeader: 'Header is not valid',
  invalidJson: 'Json format is not valid',
  duplicateKey: 'Key/Keys are not unique',
  unnecessaryKey: 'This key must not be sent with the current value',
  duplicateHeader: 'Header is duplicated',
};

export const CMCDheaders = {
  'CMCD-Object': [],
  'CMCD-Request': [],
  'CMCD-Session': [],
  'CMCD-Status': [],
};
