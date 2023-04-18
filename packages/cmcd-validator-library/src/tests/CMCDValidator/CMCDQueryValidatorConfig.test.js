import { queryConfigTestCases } from '../testCases/queryConfigTestCases';
import { CMCDQueryValidator } from '../../index';

for (let i = 0; i < queryConfigTestCases.length; i += 1) {
  it(queryConfigTestCases[i].description, () => {
    const res = CMCDQueryValidator(queryConfigTestCases[i].query, queryConfigTestCases[i].config);
    expect(res).toStrictEqual(queryConfigTestCases[i].output);
  });
}
