export const decodeQuery = (query) => {
  const decodedQuery = query.replace(/%3D|%22|%2C/g, (match) => {
    if (match === '%3D') {
      return '=';
    } if (match === '%22') {
      return '"';
    }
    if (match === '%2C') {
      return ',';
    }
    return '';
  });
  return decodedQuery;
};
