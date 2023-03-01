import { cmcdTypes, keyTypes } from '../utils/constants.js';

const parseQueryToJson = (queryString) => {
  const values = decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
  const obj = {};
  values.forEach((value) => {
    const [key, val] = value.split('=');
    if (keyTypes[key] === cmcdTypes.number) {
      obj[key] = parseInt(val, 10);
    } else if (keyTypes[key] === cmcdTypes.boolean) {
      obj[key] = !(val === 'false');
    } else {
      obj[key] = val.replaceAll('"', '');
    }
  });
  return obj;
};

export default parseQueryToJson;
