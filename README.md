#  CMCD-Validator

###  Table  of  contents


*  [CMCD  Validation  Library  usage](#cmcd-validation-library-usage)

*  [Repository content](#repository-content)

*  [Setup](#setup)

*  [General information](#general-information)

	*  [Objective  of  the  CMCD  Validator  tool](#objective-of-the-cmcd-validator-tool)

    *  [The  main  Milestones](#the-main-milestones-we-would-like-to-cover-to-achieve-the-cmcd-validator-are:)

*  [Technologies](#technologies)



## CMCD Validation Library usage


### Install

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

## Repository content

This repository contains the following packages:

* **cmcd-validator-library:**
	 Library to validate CMCD standard queries, headers and JSON format .
	 
*  **cmcd-validator-demo-app:**
	Is a test app that intercepts Shaka player queries and validate them using cmcd-validator-library.
​

## Setup

To install all packages dependencies run: 
```bash
$ npm install
```
To build all packages run:

```bash
$ npm run build
```

### cmcd-validator-library

To build only the library run:
```bash
$ npm run build-library
```

### cmcd-validator-demo-app

To lunch the demo app first you need to build the **cmcd-validator-library** and then  lunch the following command:

```bash
$ npm run demo
```

​

## General information

​

### Objective of the CMCD Validator tool

We propose to create a open-source service that enables any video developer to set up in a local or cloud environment, in less than 7 steps, a service that enables him/her validate the CMCD implementation of any player in real time with any type of content.

​

###  The  main  Milestones  we  would  like  to  cover  to  achieve  the  CMCD  validator  are:

​

*  **M1:  (Publish  a  library):**  Publish  in  NPM  a  CMCD  validator  library  (for  Node)  that  can  be  used  by  a  video  developer  in  a  testing  script,  an  automated  testing  environment,  or  to  batch  a  analysis  of  already  collected  data.

​

*  **M2:  (A  simple  web  validator):**  The  goal  is  to  create  a  simple  node  application  using  the  library  that  also  serves  a  web  page  where  any  tester  or  video  developer  can  copy-paste  the  CMCD  headers/queryparams/json  from  some  CDN  or  Web  server  log  and  have  a  visual  response  saying  if  there  are  errors,  missing  parameters,  extra  parameters,  encoding  errors,  etc...

​

*  **M3  (a  service):**  create  or  integrate  complete  ETL  solution  in  order  to  achieve:  

​

>  1.  (Real  time  analysis):  Throw  a  web  page,  a  video  developer  or  a  tester,  will  be  able  to  see  in  real  time  the  CMCD  messages  and  its  analysis.  _Hint:  The  M2  web  validator  can  be  reused_

​

>  2.  (Video  agnostic)  The  user  must  be  able  to  test  with  any  type  of  content  that  make  sense  in  their  environment  with  this  service.  It  must  support  any  kind  of  combination  of  this  :  HLS,  DASH,  Smooth  Streaming,  with/without  CMAF,  with/without  DRM,  audio  and  video  embedded.  _Hint:  A  CDN/Web  server  proxy  can  help  to  bypass  data  and  extract  the  CMCD  data._

​

>  3.  (Player  agnostic):  The  service  should  be  player  agnostic,  it  can  validate  CMCD  implementations  in  players  that  runs  in  browsers,  native  mobile  players,  STBs,  Smart  TVs,  etc...  _Hint:  the  service  can  receive  a  video  URL  and  return  a  URL  that  pints  to  the  proxy  witch  the  user  has  to  configure  in  the  device_

​

This is the final diagram of what we want to achieve in M3:

​

![CMCD-Analizer-Diagrams](https://user-images.githubusercontent.com/99991582/218837416-2d7c8cea-65a5-4486-b888-87130ad39c15.png)

​

##  Technologies

Project is going to be created with:

*  NodeJS

*  React  

*  MongoDB  

*  Docker