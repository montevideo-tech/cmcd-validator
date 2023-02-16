import { errorTypes } from "./constants.js";

export const createError = (type, key, value) => {
  if (typeof type !== "String" || !errorTypes[type]) {
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
