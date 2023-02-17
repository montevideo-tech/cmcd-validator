import { keyTypes } from "./constants.js";
import { createError } from "./error.js";

export const queryValidator = (queryString) => {
  const error = [];

  // Check if the URL is encoded and if there is something before CMCD request
  if (decodeURI(queryString) === queryString) {
    error.push(createError("parameter-encoding"));
  } else {
    const query = queryString.split("?").pop();

    //Check if the query is correct
    const requests = decodeURIComponent(query).split("CMCD=");
    requests.shift();

    if (requests.length > 1) {
      error.push(createError("incorrect-format"));
    } else {
      const values = decodeURIComponent(query).split("CMCD=")[1].split(",");
      values[values.length - 1] = values[values.length - 1].split("&")[0];

      // console.log("values\n", values);

      const keys = []

      // Check: key/value is separated by =
      for (const val of values) {
        const [key, value] = val.split("=");
        keys.push(key)

        //Check: string require ""
        if (
          (keyTypes[key] === "String" &&
            !(
              value.indexOf('"') == 0 &&
              value.lastIndexOf('"') == value.length - 1
            )) ||
          (keyTypes[key] === "Token" &&
            value.indexOf('"') == 0 &&
            value.lastIndexOf('"') == value.length - 1)
        ) {
          error.push(createError("invalid-value", key, value));
        }

        // Check: if the key does not have value it must be a bool
        if (
          (typeof value === "undefined" && keyTypes[key] !== "Boolean") ||
          value === "true"
        ) {
          error.push(createError("wrong-type-value", key, value));
        }
      }
      // Check if keys are unique
      console.log("keys\n", keys)
      console.log((new Set(keys)).size !== keys.length)
      if ((new Set(keys)).size !== keys.length){
        error.push(createError("dupliated-key"))
      }
    }
  }

  return {
    queryString,
    error,
  };
};
