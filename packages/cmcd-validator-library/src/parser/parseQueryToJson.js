const parseQueryToJson = (queryString, extendedKeyTypes) => {
  const values = decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
  const obj = {};
  values.forEach((value) => {
    if (!value.includes('=')) {
      obj[value] = true;
    } else {
      // eslint-disable-next-line prefer-const
      let [key, val] = value.split('=');
      val = Number.isNaN(Number(val)) ? val.replace(/"/g, '') : Number(val);
      if (extendedKeyTypes[key] === 'boolean' && val === 'false') val = false;
      obj[key] = val;
    }
  });
  return obj;
};

export default parseQueryToJson;
