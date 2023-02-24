import { cmcdTypes, keyTypes, CMCDheaders } from './constants.js';

const parseQueryparamToJSON = (queryString) => {
  const values = decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
  const obj = {};
  values.forEach((value) => {
    const [key, val] = value.split('=');
    if (keyTypes[key] === cmcdTypes.number) {
      obj[key] = parseInt(val, 10);
    } else if (keyTypes[key] === cmcdTypes.boolean) {
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
    // eslint-disable-next-line prefer-const
    let [key, value] = pair.split(':');
    if (!CMCDheaders[key]) {
      return;
    }
    value = value.replace(/ /g, '');
    const subPairs = value.split(',');
    subPairs.forEach((subPair) => {
      if (!subPair.includes('=')) {
        result[subPair] = true;
      } else {
        // eslint-disable-next-line prefer-const
        let [subKey, subValue] = subPair.split('=');
        subValue = Number.isNaN(Number(subValue)) ? subValue.replace(/"/g, '') : Number(subValue);
        if (keyTypes[subKey] === 'boolean' && subValue === 'false') subValue = false;
        result[subKey] = subValue;
      }
    });
  });
  return result;
};

export { parseHeaderToJSON, parseQueryparamToJSON };
