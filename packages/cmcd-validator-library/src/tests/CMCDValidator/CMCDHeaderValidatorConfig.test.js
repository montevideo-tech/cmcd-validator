import { headerConfigTestCases } from '../testCases/headerConfigTestCases';
import { CMCDHeaderValidator } from '../../index';

for (let i = 0; i < headerConfigTestCases.length; i += 1) {
  it(headerConfigTestCases[i].description, () => {
    // eslint-disable-next-line max-len
    const res = CMCDHeaderValidator(headerConfigTestCases[i].header, headerConfigTestCases[i].config);
    expect(res).toStrictEqual(headerConfigTestCases[i].output);
  });
}
