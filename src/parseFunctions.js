import { keyTypes, CMCDheaders } from './constants.js';

const parseQueryToJson = (queryString) => {
  const values = decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
  const obj = {};
  values.forEach((value) => {
    const [key, val] = value.split('=');
    if (keyTypes[key] === 'Integer') {
      obj[key] = parseInt(val, 10);
    } else if (keyTypes[key] === 'Boolean') {
      obj[key] = !(val === 'false');
    } else {
      obj[key] = val.replaceAll('\'', '');
    }
  });
  return obj;
};

const parseHeaderToJSON = (headerString) => {
  const pairs = headerString.split('\n');
  const result = {};
  pairs.forEach((pair) => {
    const [key, value] = pair.split(':');
    if (CMCDheaders.includes(key)) {
      if (value !== undefined) {
        const subPairs = value.split(',');
        subPairs.forEach((subPair) => {
          subPair = subPair.replace(/ /g, '');
          if (!subPair.includes('=')) {
            result[subPair] = true;
          } else {
            let [subKey, subValue] = subPair.split('=');
            if (subValue !== undefined) {
              subValue = isNaN(subValue) ? subValue.replace(/"/g, '') : Number(subValue);
              if (subValue === 'true') subValue = true;
              if (subValue === 'false') subValue = false;
              result[subKey] = subValue;
            }
          }
        });
      }
    }
  });
  return result;
};

export { parseQueryToJson, parseHeaderToJSON };
