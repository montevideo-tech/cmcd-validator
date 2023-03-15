import { logger } from "../logger.js";

export const createOutput = (errors, warnings, rawData, parsedData) => {
  const response = {
    valid: errors.length === 0,
    errors,
    warnings,
    parsedData,
    rawData,
  };
  //logger.info(response);
  return response;
};
