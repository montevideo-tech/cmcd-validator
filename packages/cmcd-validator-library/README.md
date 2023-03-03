# cmcd-validator

The cmcd-validator is an easy-to-use npm package that enables video developers to set up a service for validating the CMCD implementation of any player in real-time, with any type of content.

## Install

You can install the package using npm:

```npm
npm install @montevideo-tech/cmcd-validator
```

# Usage

Example with CMCDQueryValidator function:

```javascript
 import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';

 const cmcdQueryString = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_1280x720_4000k/bbb_30fps_1280x720_4000k_26.m4v?CMCD=bl%3D7200%2Cbr%3D4952%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4000%2Cdl%3D7200%2Cmtp%3D18600%2Cnor%3D%22bbb_30fps_1280x720_4000k_27.m4v%22%2Cot%3Dv%2Crtp%3D13800%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D14932";

 const validatorOutput = CMCDQueryValidator(cmcdQueryString)
```
**validatorOutput:**
```json
{
  "valid": false,
  "errors": [
    {
      "type": "parameter-encoding",
      "key": "nor",
      "value": "bbb_30fps_1280x720_4000k_27.m4v",
      "description": "Parameter is not encoded"
    }
  ],
  "parsedData": {
    "bl": 7200,
    "br": 4952,
    "cid": "21cf726cfe3d937b5f974f72bb5bd06a",
    "d": 4000,
    "dl": 7200,
    "mtp": 18600,
    "nor": "bbb_30fps_1280x720_4000k_27.m4v",
    "ot": "v",
    "rtp": 13800,
    "sf": "d",
    "sid": "b248658d-1d1a-4039-91d0-8c08ba597da5",
    "st": "v",
    "tb": 14932
  },
  "rawData": "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_1280x720_4000k/bbb_30fps_1280x720_4000k_26.m4v?CMCD=bl%3D7200%2Cbr%3D4952%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cd%3D4000%2Cdl%3D7200%2Cmtp%3D18600%2Cnor%3D%22bbb_30fps_1280x720_4000k_27.m4v%22%2Cot%3Dv%2Crtp%3D13800%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Ctb%3D14932"
}
```

# Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

1.Fork the repository.
2.Check the active issues and project board to see what we're working on.
3.Create a new branch for your feature or bug fix.
4.Make your changes.
5.Submit a pull request.

# License

The CMCD Validator is licensed under the Apache License, Version 2.0.