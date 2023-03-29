<h3 align="right">
	<b>
	  <a  href="https://montevideotech.dev/summer-camp-2023/"><img decoding="async" width="300"  src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-02-1024x653.png" ></a><br>
  </b>
</h3>

# cmcd-validator

The cmcd-validator is an easy-to-use [npm package](https://www.npmjs.com/package/@montevideo-tech/cmcd-validator) that enables video developers to set up a service for validating the Common-Media-Client-Data (CMCD) standard implementation of any player in real-time, with any type of content. It supports queries, headers and JSON formats through this three functions:

- **CMCDQueryValidator**
- **CMCDHeaderValidator**
- **CMCDJsonValidator**

Whether you're building a video player from scratch or updating an existing one, this package is an essential addition to any video developer's toolkit.

## Installation

You can install the package using npm:

```bash
npm install @montevideo-tech/cmcd-validator
```

### Usage

Example with **CMCDQueryValidator**, **CMCDHeaderValidator**, **CMCDJsonValidator** functions:

```javascript
import { CMCDQueryValidator, CMCDHeaderValidator, CMCDJsonValidator } from "@montevideo-tech/cmcd-validator";


const cmcdQueryString = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu';

const cmcdHeaderString = 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="bbb_a64k_11.m4a"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n';

const cmcdJSONString = '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}';


const queryValidatorOutput = CMCDQueryValidator(cmcdQueryString);

const headerValidatorOutput = CMCDQueryValidator(cmcdHeaderString);

const jsonValidatorOutput = CMCDQueryValidator(cmcdJSONString);
```

#### **Validator output format:**

```json
{
 "valid": <bool>,
 "errors": [
    {
      "type": <missing-header|parameter-value|parameter-encoding|missing-parameter|invalid-header|unknown-parameter|invalid-header-encoding|invalid-json|etc...>,
      "key": <string>
      "value": <any-type>
      "description": <string>
    },
    {...},
  ]
  "parsedData": <json>
  "rawData": <string>
}
```

**Where:**

-   `valid`:  `true`  when there are no errors;  `false`  otherwise.
-   `errors`: an array of the errors present in the CMCD data that was sent, each object is a different error with the following structure:
    -   `type`: the type of error encountered. This is a string that describes the error. 
    -   `key`: the key of the CMCD data that has the error.
    -   `value`: the value of the CMCD data for that key.
    -   `description`: a brief description of the error.
-   `parsedData`: the CMCD data that was sent but in JSON format. 
-   `rawData`: the library input.

## Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

1. Fork the repository.
2. Check the active issues and project board to see what we're working on.
3. Create a new branch for your feature or bug fix.
4. Make your changes.
5. Submit a pull request.

## License

The CMCD Validator is licensed under the Apache License, Version 2.0.