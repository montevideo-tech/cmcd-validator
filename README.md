#  CMCD-Validator

[![license](https://img.shields.io/badge/license-Apache--2.0-red?style=flat-square)](https://github.com/montevideo-tech/cmcd-validator/blob/develop/LICENSE)

##  Table  of  contents
<!-- * [CMCD  Validation  Library  usage](#cmcd-validation-library-usage) -->
- [CMCD-Validator](#cmcd-validator)
  - [Table  of  contents](#table--of--contents)
  - [Repository content](#repository-content)
  - [Setup](#setup)
    - [cmcd-validator-library](#cmcd-validator-library)
    - [cmcd-validator-demo-app](#cmcd-validator-demo-app)
  - [General information](#general-information)
    - [Objective of the CMCD Validator tool](#objective-of-the-cmcd-validator-tool)
    - [The  main  Milestones  we  would  like  to  cover  to  achieve  the  CMCD  validator  are:](#the--main--milestones--we--would--like--to--cover--to--achieve--the--cmcd--validator--are)
  - [How to report a bug](#how-to-report-a-bug)
  - [Technologies](#technologies)

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

### [cmcd-validator-library](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-library)

To build only the library run:
```bash
$ npm run build-library
```
You can find the npm 

### [cmcd-validator-demo-app](https://github.com/montevideo-tech/cmcd-validator/tree/develop/packages/cmcd-validator-demo-app)


To launch the demo app first you need to build the **cmcd-validator-library** and then run the following command:

```bash
$ npm run demo
```

## General information
### Objective of the CMCD Validator tool

We want to create an open-source service that, in less than 7 steps, sets up a local or a cloud environment tool that enables video developers to validate the CMCD implementation of any player in real time with any type of content.

​

###  The  main  Milestones  we  would  like  to  cover  to  achieve  the  CMCD  validator  are:

* **M1:  (Publish  a  library):**  Publish  in  NPM  a  CMCD  validator  library  (for  Node)  that  can  be  used  by  a  video  developer  in  a  testing  script,  an  automated  testing  environment,  or  to  batch  a  analysis  of  already  collected  data.

* **M2:  (A  simple  web  validator):**  Create  a  simple  node  application  using  the  library  that  also  serves  a  web  page  where  any  tester  or  video  developer  can  copy-paste  the  CMCD  headers/queryparams/json  from  some  CDN  or  Web  server  log  and  have  a  visual  response  displaying any errors,  missing  parameters,  extra  parameters,  encoding  errors,  etc...

* **M3  (a  service):**  create  or  integrate  complete  ETL  solution  in  order  to  achieve: 

> 1.  (Real  time  analysis):  Throw  a  web  page,  a  video  developer  or  a  tester,  will  be  able  to  see  in  real  time  the  CMCD  messages  and  its  analysis.  _Hint:  The  M2  web  validator  can  be  reused_
>  2.  (Video  agnostic)  The  user  must  be  able  to  test  with  any  type  of  content  that  make  sense  in  their  environment  with  this  service.  It  must  support  any  kind  of  combination  of  this  :  HLS,  DASH,  Smooth  Streaming,  with/without  CMAF,  with/without  DRM,  audio  and  video  embedded.  _Hint:  A  CDN/Web  server  proxy  can  help  to  bypass  data  and  extract  the  CMCD  data._
>  3.  (Player  agnostic):  The  service  should  be  player  agnostic,  it  can  validate  CMCD  implementations  in  players  that  runs  in  browsers,  native  mobile  players,  STBs,  Smart  TVs,  etc...  _Hint:  the  service  can  receive  a  video  URL  and  return  a  URL  that  pints  to  the  proxy  witch  the  user  has  to  configure  in  the  device_

This is the final diagram of what we want to achieve in M3:
​

![CMCD-Analizer-Diagrams](https://user-images.githubusercontent.com/99991582/218837416-2d7c8cea-65a5-4486-b888-87130ad39c15.png)

## How to report a bug
To report a bug please click on **Get started** in this [link](https://github.com/montevideo-tech/cmcd-validator/issues/new/choose) and fill the form.
​
##  Technologies
This project uses:

*  NodeJS
*  React  
*  MongoDB  
*  Docker
