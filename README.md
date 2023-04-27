# CMCD-Validator

[![license](https://img.shields.io/badge/license-Apache--2.0-red?style=flat-square)](https://github.com/montevideo-tech/cmcd-validator/blob/develop/LICENSE)

Welcome to cmcd-validator-library. The cmcd-validator is an easy-to-use [npm package](https://www.npmjs.com/package/@montevideo-tech/cmcd-validator) that enables video developers to set up a service for validating the Common-Media-Client-Data (CMCD) standard implementation ([CTA\-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf)) of any player in real-time, with any type of content. It supports queries, headers and JSON format.

Whether you're building a video player from scratch or updating an existing one, this package is an essential addition to any video developer's toolkit.

If you just want to paly with with this library, you can try the [demo app](https://montevideo-tech.github.io/cmcd-validator/) which validates CMCD requests generated by Video.js, Dash.js, hls.js and Shaka Player.

## Table of contents

* [Install](#install)
* [Basic Example](#basic-example)
* [Usage](#usage)
  * [How to import the library](#how-to-import-the-library)
  * [How to call the functions to validate CMCD](#how-to-call-the-functions-to-validate-cmcd)
  * [Input of the library](#input-of-the-library)
  * [Output of the library](#output-of-the-library)
  * [Example](#example)
* [Contributing](#contributing)
* [License](#license)

## Install

You can use the CDN verison of the validator adding this tag to your document's `<head>`. Then the `window.CMCDValidator` object will be avaialbe to use it
```html
<script src='https://cdn.jsdelivr.net/npm/@montevideo-tech/cmcd-validator@latest/dist/cmcd-validator.umd.js'></script>
```

Or install it with npm if you are creating a Node.js application
```bash
npm install @montevideo-tech/cmcd-validator
```

## Basic Example

This simple example shows how to check a CMCD request in standard JavaScript using the 3 main functions of the library:

- **CMCDQueryValidator**
- **CMCDHeaderValidator**
- **CMCDJsonValidator**

```html
<html>
  <head>
    <!-- Import the cmcd-validator library-->
    <script src="https://cdn.jsdelivr.net/npm/@montevideo-tech/cmcd-validator@latest/dist/cmcd-validator.umd.js"></script>
  </head>

  <body>
    <script type="module">
      // Validate a request with CMCD params
      var queryValidation = window.CMCDValidator.CMCDQueryValidator("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu")
      console.log(queryValidation)

      // Validate CMCD headers in a HTTP request
      var headerValidation = window.CMCDValidator.CMCDHeaderValidator('GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n')
      console.log(headerValidation)

      // Validate a JSON String with CMCD parameters
      var jsonValidation = window.CMCDValidator.CMCDJsonValidator('{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}')
      console.log(jsonValidation)

    </script>
  </body>
</html>

```

# Usage

### How to import the library
To import this library in your project, you can do it in the following way:

```js
import { CMCDQueryValidator, CMCDHeaderValidator, CMCDJsonValidator } from "@montevideo-tech/cmcd-validator";
```

### How to call the functions to validate CMCD
The media client data can be sent by one of three means:
* As a custom HTTP request header,
* As a HTTP query argument,
* As a JSON object independent of the HTTP object request.

It is for this reason that the library has three main functions:

* CMCDHeaderValidator
* CMCDQueryValidator
* CMCDJsonValidator

### Input of the library
Each of these functions receive the following parameters in the following order:

* `query, header or json:` string where there are the CMCD parameters to check. 
* `config:` json where you can define:
  * `specific keys`: the list of CMCD keys that you want to check for any errors.
  * `custom keys`: personal customizable keys that you want to validate.
    * `key`: name of the key.
    * `type`: type of the key (*bool, string, token, number*).
    * `header`: which CMCD header your custom key will be sent in, in case a header request is used.
* `warningFlag:` this flag needs to be true in order to see the warnings in the library output.

### Output of the library
On the other hand, these functions have the same output:
```json
{
 "valid": <bool>,
 "errors": [
    {
      "type": <string>,
      "key": <string>,
      "value": <any-type>,
      "description": <string>,
    },
    {...},
  ],
  "warnings": [
    {
      "type": <string>,
      "key": <string>,
      "value": <any-type>,
      "description": <string>
    }
    {...},
  ],
  "parsedData": <json>,
  "rawData": <string>
},
```

Where:

- `valid`:  `true`  when there are no errors;  `false`  otherwise.
- `errors`: an array of the errors present in the CMCD data that was sent, each object is a different error with the following structure:
  - `type`: the type of error encountered. This is a string that describes the error. 
  - `key`: the key of the CMCD data that has the error.
  - `value`: the value of the CMCD data for that key.
  - `description`: a brief description of the error.
- `warnings`: an array of the warnings present in the CMCD data that was sent, each object is a different warning with the following structure:
  - `type`: the type of warning encountered. This is a string that describes the warning. 
  - `key`: the key of the CMCD data that has the warning.
  - `value`: the value of the CMCD data for that key.
  - `description`: a brief description of the warning. 
- `parsedData`: the CMCD data that was sent but in JSON format. 
- `rawData`: the library input.


### Example
In this section we will give an example of how to use the library.

Imagine we have the following query:

`https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-bs%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu`

Our goal is to test all the CMCD's keys plus a personal custom key called `com.qualabs-bs` which is a bool. So if we want the library to include this custom key, we need to set the cofiguration as following:

```json
config = 
{
  "customKey": [
    {
      "key": 'com.qualabs-bs',
      "type": 'boolean',
    },
  ],
}
```

So the code should look like this:

```js
const cmcdQueryString = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-bs%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu';

const config = 
{
  "customKey": [
    {
      "key": 'com.qualabs-bs',
      "type": 'boolean',
    },
  ],
}

const output = CMCDQueryValidator(cmcdQueryString, config, true)
```

For this case, our output is going to be:

```json
output: {
      "valid": true,
      "errors": [],
      "warnings": [
        {
          "type": "no-alphabetical-order",
          "key": undefined,
          "value": undefined,
          "description": "Keys are not arranged alphabetically",
        },
      ],
      "parsedData": {
        "com.qualabs-bs": false,
        "cid": "21cf726cfe3d937b5f974f72bb5bd06a",
        "ot": "i",
        "sf": "d",
        "sid": "b248658d-1d1a-4039-91d0-8c08ba597da5",
        "st": "v",
        "su": true,
      },
      "rawData":
        "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-bs%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu",
    },
``` 

In this case we can see that we don't have any errors which means the query is valid. Even thought there's a warning telling us that *Keys are not arranged alphabetically*, this not affect the validity of the query. This can be seen in the **paresedData**.


## Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

1. Fork the repository.
2. Check the active issues and project board to see what we're working on.
3. Create a new branch for your feature or bug fix.
4. Make your changes.
5. Submit a pull request.



### Repository content

This repository contains the following packages:

* **cmcd-validator-library:**
	 Library to validate CMCD standard queries, headers and JSON format .
	 
*  **cmcd-validator-demo-app:**
	Is a test app that intercepts Shaka player queries and validate them using cmcd-validator-library.


### Setup

To install all packages dependencies run: 
```bash
$ npm install
```
To build all packages run:

```bash
$ npm run build
```

#### [cmcd-validator-library](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-library)

To build only the library run:
```bash
$ npm run build-library
```

#### [cmcd-validator-demo-app](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-demo-app)


To launch the demo app first you need to build the **cmcd-validator-library** and then run the following command:

```bash
$ npm run demo
```

## How to report a bug
To report a bug please click on **Get started** in this [link](https://github.com/montevideo-tech/cmcd-validator/issues/new/choose) and fill the form.

# License
The CMCD Validator is licensed under the Apache License, Version 2.0.
