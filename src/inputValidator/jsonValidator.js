import { errorTypes } from '../utils/constants.js';
import { createError } from '../utils/error.js';

const jsonIsValid = (jsonString, errors) => {
  let valid = true;
  const keyvalue = jsonString.split(",");
  const keys = [];
  keyvalue.forEach((key) => {
    keys.push(key.split(":")[0]);
  })
  //console.log(keys);
  if ((new Set(keys)).size !== keys.length) {
    errors.push(createError(errorTypes.duplicateKey));
    return false;
  }
  try {
    const obj = JSON.parse(jsonString);
    // Check if there's double key
    Object.keys(obj).forEach((key) => {

      if ((keyTypes[key] === cmcdTypes.number && checkQuotes(obj[key]))
      ) {
        valid = false;
        error.push(createError(errorTypes.wrongTypeValue, key, value));
        //return false;
      }

    })
  

  } catch (error) {
    errors.push(createError(errorTypes.invalidJson));
    valid = false;
  }

  
  return valid;
};

export default jsonIsValid;
