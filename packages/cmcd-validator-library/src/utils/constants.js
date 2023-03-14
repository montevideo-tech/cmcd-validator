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
  duplicatedHeader: 'duplicated-header',
  noHeader: 'no-header',
  emptyHeader: 'empty-header',
  unnecessaryKey: 'unnecessary-key',
  wrongCustomType: 'wrong-custom-type',
  invalidCustomKey: 'invalid-custom-key',
  unknownSpecificKey: 'unknown-specific-key',
  wrongCustomHeader: 'wrong-custom-header',
  queryMalformed: 'query-malformed',
  noAmpersandBetweenRequests: 'no-ampersand-between-requests:'
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
  duplicatedHeader: 'Header is duplicated',
  noHeader: 'There is no CMCD headers.',
  emptyHeader: 'There is a header with no content',
  unnecessaryKey: 'This key must not be sent with the current value',
  wrongCustomType: 'The type does not mach with CMCD types',
  invalidCustomKey: 'Custom key names MUST carry a hyphenated prefix',
  unknownSpecificKey: 'The key does not mach with CMCD keys',
  wrongCustomHeader: 'The header does not mach with CMCD headers',
  queryMalformed: 'The query is malformed',
  noAmpersandBetweenRequests: 'Ampersand required between two or more requests',  
};

export const cmcdHeader = {
  'CMCD-Object': ['br', 'd', 'ot', 'tb'],
  'CMCD-Request': ['bl', 'dl', 'mtp', 'nor', 'nrr', 'su'],
  'CMCD-Session': ['cid', 'pr', 'sf', 'sid', 'st', 'v'],
  'CMCD-Status': ['bs', 'rtp'],
};

export const warningTypes = {
  noAlphabeticalOrder: 'no-alphabetical-order',
  noSidReceived: 'no-sid-received',
  blWithWrongOtValue: 'bl-with-wrong-ot-value',
};

export const warningDescription = {
  noAlphabeticalOrder: 'Keys are not arranged alphabetically',
  noSidReceived: 'No sid received from CMCD message',
  blWithWrongOtValue: 'bl key should only be sent with an object type of a, v or av',
};
