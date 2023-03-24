import { cmcdTypes } from '../utils/constants.js';

const parseQueryToJson = (queryString, extendedKeyTypes) => {
  const values = decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
  const obj = {};
  values.forEach((value) => {
    const [key, val] = value.split('=');
    if (extendedKeyTypes[key] === cmcdTypes.number) {
      obj[key] = parseFloat(val);
    } else if (extendedKeyTypes[key] === cmcdTypes.boolean) {
      obj[key] = !(val === 'false');
    } else {
      obj[key] = val.replaceAll('"', '');
    }
  });
  return obj;
};

export default parseQueryToJson;
