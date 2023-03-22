import { createWarning } from './warning.js';
import { warningTypes } from './constants.js';

const keySortedAlphabetically = (cmcdKeys, warnings, requestID) => {
  // cmcdKeys must be an array
  if (JSON.stringify(cmcdKeys) !== JSON.stringify(cmcdKeys.sort())) {
    warnings.push(createWarning(warningTypes.noAlphabeticalOrder, requestID));
  }
};

export default keySortedAlphabetically;
