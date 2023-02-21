const checkQuoutes = (value) => value.indexOf('"') === 0 && value.lastIndexOf('"') === value.length - 1;

export default checkQuoutes;
