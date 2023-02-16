export const createError = (type, key, value) => {

  //This need to be moved to payload file
  const typesErrors = {
    "unknown-key": "Key is not part of reserved keys",
    "invalid-value": "Value does not meet requirements",
    "wrong-type-value": "Value type is incorrect",
    "incorrect-format": "Format is incorrect",
    "parameter-encoding": "Parameter is not encoded",
    "missing-key": "Key is missed",
    "invalid-header": "Header is not valid",
    "invalid-json": "Json format is not valid",
  };

  if (typeof type != "string" || typesErrors.hasOwnProperty(type) == false) {
    console.error("Type not defined");
    return -1;
  }

  return JSON.stringify({
    type,
    key,
    value,
    description: typesErrors[type],
  });
};
