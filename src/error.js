import { errorTypes } from "./constants.js";

export const createError = (type, key, value) => {
  if (typeof type != "string" || errorTypes.hasOwnProperty(type) == false) {
    console.error("Type not defined");
    return -1;
  }

  return {
    type,
    key,
    value,
    description: errorTypes[type],
  };
};
