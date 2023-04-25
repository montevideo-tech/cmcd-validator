#  CMCD-Validator

[![license](https://img.shields.io/badge/license-Apache--2.0-red?style=flat-square)](https://github.com/montevideo-tech/cmcd-validator/blob/develop/LICENSE)

The CMCD-Validator is a JavaScript library that helps you debug and test HTTP requests with CMCD information as defined in
[CTA\-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf) in any type of video player.

If you just want to paly with with this library, you can try the [demo app](https://montevideo-tech.github.io/cmcd-validator/) implemented with Video.js, Dash.js, hls.js and Shaka Player.

## Installation

You can use the CDN verison of the validator adding this tag to your document's `<head>`. Then the `window['cmcd-validator-debug']` object will be avaialbe to use it
```html
<script src='https://cdn.jsdelivr.net/npm/@montevideo-tech/cmcd-validator@latest/dist/cmcd-validator.umd.js'></script>
```

Or install it with npm if you are creating a Node.js application
```
npm install @montevideo-tech/cmcd-validator
```

## Basic Usage

This simple example shows how to check a CMCD request in standard JavaScript using the 3 main functions of the library:
```html
<html>
  <head>
    <!-- Import the cmcd-validator library-->
    <script src="https://cdn.jsdelivr.net/npm/@montevideo-tech/cmcd-validator@latest/dist/cmcd-validator.umd.js"></script>
  </head>

  <body>
    <script type="module">
      // Validate a request with CMCD params
      var queryValidation = window["cmcd-validator-debug"].CMCDQueryValidator("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=br%3D3200%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu")
      console.log(queryValidation)

      // Validate CMCD headers in a HTTP request
      var headerValidation = window["cmcd-validator-debug"].CMCDHeaderValidator('GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n')
      console.log(headerValidation)

      // Validate a JSON String with CMCD parameters
      var jsonValidation = window["cmcd-validator-debug"].CMCDJsonValidator('{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}')
      console.log(jsonValidation)

    </script>
  </body>
</html>

```

## Repository content

This repository contains the following packages:

* **cmcd-validator-library:**
	 Library to validate CMCD standard queries, headers and JSON format .
	 
*  **cmcd-validator-demo-app:**
	Is a test app that intercepts Shaka player queries and validate them using cmcd-validator-library.


## Setup

To install all packages dependencies run: 
```bash
$ npm install
```
To build all packages run:

```bash
$ npm run build
```

### [cmcd-validator-library](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-library)

To build only the library run:
```bash
$ npm run build-library
```

### [cmcd-validator-demo-app](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-demo-app)


To launch the demo app first you need to build the **cmcd-validator-library** and then run the following command:

```bash
$ npm run demo
```

## How to report a bug
To report a bug please click on **Get started** in this [link](https://github.com/montevideo-tech/cmcd-validator/issues/new/choose) and fill the form.
