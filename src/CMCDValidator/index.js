// import { errorTypes } from '../utils/constants.js';

// export const createError = (type, key, value) => {
//   if (!errorTypes[type]) {
//     console.error('Error type not defined');
//     return -1;
//   }

//   return {
//     type,
//     key,
//     value,
//     description: errorTypes[type],
//   };
// };

// export const createOutput = (errors, parsedData, rawData) => {
//   const response = {
//     valid: errors.length === 0,
//     errors,
//     parsedData,
//     rawData,
//   };
//   return JSON.stringify(response);
// };
