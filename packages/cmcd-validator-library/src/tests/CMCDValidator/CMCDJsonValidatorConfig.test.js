import { jsonConfigTestCases } from '../testCases/jsonConfigTestCases';
import { CMCDJsonValidator } from '../../index';

for (let i = 0; i < jsonConfigTestCases.length; i += 1) {
  it(jsonConfigTestCases[i].description, () => {
    // eslint-disable-next-line max-len
    const res = CMCDJsonValidator(jsonConfigTestCases[i].json, jsonConfigTestCases[i].config);
    expect(res).toStrictEqual(jsonConfigTestCases[i].output);
  });
}
