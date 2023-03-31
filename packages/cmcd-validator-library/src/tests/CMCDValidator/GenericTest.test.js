import { genericTestCases } from '../testCases/genericTestCases';
import { CMCDQueryValidator, CMCDHeaderValidator, CMCDJsonValidator } from '../../index';

for (let i = 0; i < genericTestCases.length; i += 1) {
  it(genericTestCases[i].description, () => {
    let res = CMCDQueryValidator(genericTestCases[i].query);
    // console.log(res);
    expect(res.valid).toStrictEqual(genericTestCases[i].output.valid);
    expect(res.errors).toStrictEqual(genericTestCases[i].output.errors);
    expect(res.warnings).toStrictEqual(genericTestCases[i].output.warnings);
    expect(res.parsedData).toStrictEqual(genericTestCases[i].output.parsedData);
    expect(res.rawData).toStrictEqual(genericTestCases[i].query);

    res = CMCDHeaderValidator(genericTestCases[i].header);
    expect(res.valid).toStrictEqual(genericTestCases[i].output.valid);
    expect(res.errors).toStrictEqual(genericTestCases[i].output.errors);
    expect(res.warnings).toStrictEqual(genericTestCases[i].output.warnings);
    expect(res.parsedData).toStrictEqual(genericTestCases[i].output.parsedData);
    expect(res.rawData).toStrictEqual(genericTestCases[i].header);

    res = CMCDJsonValidator(genericTestCases[i].json);
    // console.log(res);
    expect(res.valid).toStrictEqual(genericTestCases[i].output.valid);
    expect(res.errors).toStrictEqual(genericTestCases[i].output.errors);
    expect(res.warnings).toStrictEqual(genericTestCases[i].output.warnings);
    expect(res.parsedData).toStrictEqual(genericTestCases[i].output.parsedData);
    expect(res.rawData).toStrictEqual(genericTestCases[i].json);
  });
}
