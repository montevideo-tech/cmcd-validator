<h3 align="right">
	<b>
	  <a  href="https://montevideotech.dev/summer-camp-2023/"><img decoding="async" width="300"  src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-02-1024x653.png" ></a><br>
  </b>
</h3>

# cmcd-validator

The cmcd-validator is an easy-to-use npm package that enables video developers to set up a service for validating the Common-Media-Client-Data (CMCD) standard implementation of any player in real-time, with any type of content. It supports queries, headers and JSON formats through this three functions:

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

Example with CMCDQueryValidator function:

```javascript
import { CMCDQueryValidator, CMCDHeaderValidator, CMCDJsonValidator } from "@montevideo-tech/cmcd-validator";

const cmcdQueryString = "https:...CMCD=bl%3D7200...";

const cmcdHeader = `GET ... HTTP/1.1
...
CMCD-Object: ...
CMCD-Request: ...
CMCD-Session: ...
CMCD-Status: ...
...`;

const cmcdJSON = "{...}";

const validatorOutput = CMCDQueryValidator(cmcdQueryString);
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
    ...
  },
  "rawData": "https:...CMCD=bl%3D7200..."
}
```

## Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

1. Fork the repository.
2. Check the active issues and project board to see what we're working on.
3. Create a new branch for your feature or bug fix.
4. Make your changes.
5. Submit a pull request.

## License

The CMCD Validator is licensed under the Apache License, Version 2.0.