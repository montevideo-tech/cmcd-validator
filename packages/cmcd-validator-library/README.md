<h3 align="center">
	<b>
	  <a  href="https://montevideotech.dev/summer-camp-2023/"><img decoding="async" width="300"  src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-02-1024x653.png" ></a><br>
  </b>
</h3>

# cmcd-validator-library

## Table of contents

* [Introduction](#introduction)
* [Install](#install)
* [Usage](#usage)
  * [How to import the library](#how-to-import-the-library)
  * [How to call the functions to validate CMCD](#how-to-call-the-functions-to-validate-cmcd)
  * [Input of the library](#input-of-the-library)
  * [Output of the library](#output-of-the-library)
  * [Example](#example)
* [Contributing](#contributing)
* [License](#license)

## Introduction

Welcome to cmcd-validator-library. The cmcd-validator is an easy-to-use npm package that enables video developers to set up a service for validating the Common-Media-Client-Data (CMCD) standard implementation of any player in real-time, with any type of content. It supports queries, headers and JSON formats through this three functions:

- **CMCDQueryValidator**
- **CMCDHeaderValidator**
- **CMCDJsonValidator**

Whether you're building a video player from scratch or updating an existing one, this package is an essential addition to any video developer's toolkit.

## Install

You can install the package using npm:

```bash
npm install @montevideo-tech/cmcd-validator
```

## Usage

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
* `warningFlag:` this flag needs to be true in order to see the warnings in the library output..

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

Our goal is to test all the CMCD's keys plus a personal custome key called `com.qualabs-bs` which is a bool. So if we want the library to include this custome key, we need to set the cofiguration as following:

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

So the code should look like the next:

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

## License

The CMCD Validator is licensed under the Apache License, Version 2.0.
