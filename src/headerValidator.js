/* eslint-disable import/prefer-default-export */
import { cmcdHeader } from './constants.js';
import { checkKeyInCorrectHeader } from './formatFunctions.js';

export const headerVal = (headerString, errors) => {
  const headers = headerString.split('\n');
  const cmcdHeadersArray = [];
  headers.forEach((element) => {
    if (element.split(':')[0] in cmcdHeader) {
      cmcdHeadersArray.push(element);
    }
  });
  // If array is empty, then there are no cmcd headers. If it is not empty then validate headers.
  if (cmcdHeadersArray.length > 0) {
    // check if keys have the correct header, create the keyValueArray with all the key value pairs.
    let keyValueArray = [];
    cmcdHeadersArray.forEach((element) => {
      const [header, keysArray] = element.split(':');
      keyValueArray = keyValueArray.concat(keysArray.split(','));
      checkKeyInCorrectHeader(header, keysArray, errors);
    });
    // check if each key value pair is valid
    // keyValueArray.forEach((element) => {

    // })
  }
};
