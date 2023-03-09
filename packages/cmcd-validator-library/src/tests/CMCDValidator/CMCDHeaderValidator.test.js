import { headerTestCases } from '../testCases/headerTestCases';
import { CMCDHeaderValidator } from '../../index';

for (let i = 0; i < headerTestCases.length; i += 1) {
  it(headerTestCases[i].description, () => {
    const res = CMCDHeaderValidator(headerTestCases[i].header);
    expect(res).toStrictEqual(headerTestCases[i].output);
  });
}
