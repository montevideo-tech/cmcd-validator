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
  'unknown-key': 'Key is not part of reserved keys',
  'invalid-value': 'Value does not meet requirements',
  'wrong-type-value': 'Value type is incorrect',
  'incorrect-format': 'Format is incorrect',
  'parameter-encoding': 'Parameter is not encoded',
  'missing-key': 'Key is missing',
  'invalid-header': 'Header is not valid',
  'invalid-json': 'Json format is not valid',
  'dupliated-key': 'Key/Keys are not unique',
};
