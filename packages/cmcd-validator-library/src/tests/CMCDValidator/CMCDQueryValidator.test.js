import { queryTestCases } from '../testCases/queryTestCases';
import { CMCDQueryValidator } from '../../index';

for (let i = 0; i < queryTestCases.length; i += 1) {
  it(queryTestCases[i].description, () => {
    const res = CMCDQueryValidator(queryTestCases[i].query);
    expect(res).toStrictEqual(queryTestCases[i].output);
  });
}
