const getKeyByValue = (object, value) => Object.keys(object).find((key) => object[key] === value);

export default getKeyByValue;
