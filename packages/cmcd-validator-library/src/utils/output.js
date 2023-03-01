export const createOutput = (errors, rawData, parsedData) => {
  const response = {
    valid: errors.length === 0,
    errors,
    parsedData,
    rawData,
  };
  return response;
};
