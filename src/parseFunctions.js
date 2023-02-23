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
    const [key, value] = pair.split(':');
<<<<<<< HEAD
    if (CMCDheaders[key]) {
      if (value !== undefined) {
        const subPairs = value.split(',');
        subPairs.forEach((subPair) => {
          // eslint-disable-next-line no-param-reassign
          subPair = subPair.replace(/ /g, '');
          if (!subPair.includes('=')) {
            result[subPair] = true;
          } else {
            let [subKey, subValue] = subPair.split('=');
            if (subValue !== undefined) {
              subValue = Number.isNaN(subValue) ? subValue.replace(/"/g, '') : Number(subValue);
              if (subValue === 'true') subValue = true;
              if (subValue === 'false') subValue = false;
              result[subKey] = subValue;
            }
    if (CMCDheaders[key] && value) {
      const subPairs = value.split(',');
      subPairs.forEach((subPair) => {
        subPair = subPair.replace(/ /g, '');
        if (!subPair.includes('=')) {
          result[subPair] = true;
        } else {
          let [subKey, subValue] = subPair.split('=');
          if (subValue) {
            subValue = isNaN(subValue) ? subValue.replace(/"/g, '') : Number(subValue);
            if (subValue === 'true') subValue = true;
            if (subValue === 'false') subValue = false;
            result[subKey] = subValue;
>>>>>>> corrections in the code
          }
        }
      });
    }
  });
  return result;
};

export { parseHeaderToJSON, parseQueryparamToJSON };
