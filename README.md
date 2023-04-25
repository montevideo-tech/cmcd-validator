#  CMCD-Validator

[![license](https://img.shields.io/badge/license-Apache--2.0-red?style=flat-square)](https://github.com/montevideo-tech/cmcd-validator/blob/develop/LICENSE)

The CMCD-Validator is a JavaScript library that helps you debug and test HTTP requests with CMCD information as defined in
[CTA\-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf) in any type of video player.

How to use it:
- Try it the [demo app for Shaka Player, hls.js, dash.js or Video.js](https://montevideo-tech.github.io/cmcd-validator/)
- Or install it in your own project `npm install @montevideo-tech/cmcd-validator` 

##  Table  of  contents
<!-- * [CMCD  Validation  Library  usage](#cmcd-validation-library-usage) -->
- [CMCD-Validator](#cmcd-validator)
  - [Table  of  contents](#table--of--contents)
  - [Repository content](#repository-content)
  - [Setup](#setup)
    - [cmcd-validator-library](#cmcd-validator-library)
    - [cmcd-validator-demo-app](#cmcd-validator-demo-app)
  - [How to report a bug](#how-to-report-a-bug)

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
