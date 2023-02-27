export const keyTypes = {
  br: 'number',
  bl: 'number',
  bs: 'boolean',
  cid: 'string',
  d: 'number',
  dl: 'number',
  mtp: 'number',
  nor: 'string',
  nrr: 'string',
  ot: 'token',
  pr: 'number',
  rtp: 'number',
  sf: 'token',
  sid: 'string',
  st: 'token',
  su: 'boolean',
  tb: 'number',
  v: 'number',
};

export const errorTypes = {
  'unknown-key': 'Key is not part of reserved keys',
  'invalid-value': 'Value does not meet requirements',
  'wrong-type-value': 'Value type is incorrect',
  'incorrect-format': 'Format is incorrect',
  'parameter-encoding': 'Parameter is not encoded',
  'missing-key': 'Key is missing',
  'invalid-header': 'Header is not valid',
  'invalid-json': 'Json format is not valid',
  'unnecessary-key': 'This key must not be sent with the current value.',
  'duplicated-key': 'Key/Keys is not unique.',
  'duplicated-header': 'Header is duplicted.',
  'no-header': 'There is no cmcd headres.',
  'empty-header': 'There is a header with no content.'
};

export const cmcdHeader = {
  'CMCD-Object': ['br', 'd', 'ot', 'tb'],
  'CMCD-Request': ['bl', 'dl', 'mtp', 'nor', 'nrr', 'su'],
  'CMCD-Session': ['cid', 'pr', 'sf', 'sid', 'st', 'v'],
  'CMCD-Status': ['bs', 'rtp'],
};
