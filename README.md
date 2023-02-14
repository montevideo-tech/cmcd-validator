# CMCD-Validator

## Table of contents
* [General information](#general-info)
	* [Objective of the CMCD Validator tool](#objetives-of-the-CMCD-validator-tool)
    * [The main Milestones](#the-main-Milestones)
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Setup](#setup)


## General information

### Objective of the CMCD Validator tool
We propose to create a open-source service that enables any video developer to set up in a local or cloud environment, in less than 7 instructions, a service that enables him/her validate the CMCD implementation of any player in real time with any type of content.

### The main Milestones to achieve the CMCD validator we like to cover are:

* **M1: (Publish a library):** Publish in NPM a CMCD validator library (for Node) can be used by a video developer in a testing script, an automated testing environment, or for batch a analysis of already collected data.

* **M2: (A simple web validator):** The goal is to crate a simple node application using the library that also serves a web page where any tester or video developer can copy-paste the CMCD headers/queryparams/json from some CDN or Web server log and have a visual response saying if there are errors, missing parameters, extra parameters, encoding errors, etc...

* **M3 (a service):** crate or integrate complete ETL solution in order to achieve:   

> 1.  (Real time analysis): Throw a web page, a video developer or a tester, will be able to see in real time the CMCD messages and its analysis.  _Hint: The M2 web validator can be reused_

> 2.  (Video agnostic) The user must be able to test with any type of content that make sense in their environment with this service. it must support any kind of combination of this : HLS, DASH, Smooth Streaming, with/without CMAF, with/without DRM, audio and video embedded.  _Hint: A CDN/Web server proxy can help to bypass data and extract the CMCD data._

> 3.  (Player agnostic): The service should be player agnostic, it can validate CMCD implementations in players that runs in browsers, native mobile players, STBs, Smart TVs, etc...  _Hint: the service can receive a video URL and return a URL that pints to the proxy witch the user has to configure in the device_

This is the final diagram of what we want to achieve in M3:

![CMCD-Analizer-Diagrams](https://user-images.githubusercontent.com/99991582/218837416-2d7c8cea-65a5-4486-b888-87130ad39c15.png)

## Technologies
Project is going to be created with:
* NodeJS
* React 
* MongoDB 
* Docker
	
## Setup
To run this project, install it locally using npm and run it using the following commands:

```
$ npm install
$ npm run dev
```