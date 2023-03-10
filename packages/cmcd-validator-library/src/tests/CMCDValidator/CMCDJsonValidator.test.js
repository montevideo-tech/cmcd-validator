import { jsonTestCases } from '../testCases/jsonTestCases';
import { CMCDJsonValidator } from '../../index';

for (let i = 0; i < jsonTestCases.length; i += 1) {
  it(jsonTestCases[i].description, () => {
    const res = CMCDJsonValidator(jsonTestCases[i].json);
    expect(res).toStrictEqual(jsonTestCases[i].output);
  });
}
