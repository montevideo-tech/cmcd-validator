export const headerConfigTestCases = [
  {
    description: 'Test: Correct Header with configuration using specifickey',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
      {
        valid: true,
        errors: [],
        warnings: [],
        parsedData: {
          br: 67,
          d: 4011,
          ot: 'a',
          tb: 67,
          bl: 31700,
          dl: 31700,
          mtp: 10600,
          nor: '..%2F300kbps%2Fsegment35.m4v',
          sf: 'd',
          sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
          st: 'v',
          rtp: 100,
        },
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
  {
    description: 'Test: Ignore bs error when add br and sid specificKey',
    header:
      'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: bs,br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['br', 'sid'],
    },
    output: {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        bl: 31700,
        br: 67,
        bs: true,
        d: 4011,
        dl: 31700,
        mtp: 10600,
        nor: '..%2F300kbps%2Fsegment35.m4v',
        ot: 'a',
        rtp: 100,
        sf: 'd',
        sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
        st: 'v',
        tb: 67,
      },
      rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: bs,br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    },
  },
  {
    description: 'Test: Correct header with configuration using only customKey',
    header:
      'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,com.qualabs-br,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      customKey: [
        {
          key: 'com.qualabs-br',
          type: 'boolean',
          headerType: 'CMCD-Object',
        },
      ],
    },
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        'com.qualabs-br': true,
        br: 67,
        d: 4011,
        ot: 'a',
        tb: 67,
        bl: 31700,
        dl: 31700,
        mtp: 10600,
        nor: '..%2F300kbps%2Fsegment35.m4v',
        sf: 'd',
        sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
        st: 'v',
        rtp: 100,
      },
      rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,com.qualabs-br,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    },
  },
  {
    description: 'Test: Correct header with configuration setting two specifickeys but providing just one in the query',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
      {
        valid: true,
        errors: [], // its ok doesen't have any error here?
        warnings: [],
        parsedData: {
          d: 4011,
          ot: 'a',
          tb: 67,
          bl: 31700,
          dl: 31700,
          mtp: 10600,
          nor: '..%2F300kbps%2Fsegment35.m4v',
          sf: 'd',
          sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
          st: 'v',
          rtp: 100,
        },
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
  {
    description: 'Test: Correct Query with configuration using only specifickey, ingoring the error in st key',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=qualabs\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
      {
        valid: true,
        errors: [],
        warnings: [],
        parsedData: {
          br: 67,
          d: 4011,
          ot: 'a',
          tb: 67,
          bl: 31700,
          dl: 31700,
          mtp: 10600,
          nor: '..%2F300kbps%2Fsegment35.m4v',
          sf: 'd',
          sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
          st: 'qualabs',
          rtp: 100,
        },
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=qualabs\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
  {
    description: 'Test: Incorrect Query with configuration using only specifickey, with wrong type in br key',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=-2300,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['br', 'sid'],
    },
    output:
      {
        valid: false,
        errors: [
          {
            description: "The 'br' value must greater than 0.",
            key: 'br',
            type: 'invalid-value',
            value: -2300,
          },
        ],
        warnings: [],
        parsedData: {
          bl: 31700,
          br: -2300,
          d: 4011,
          dl: 31700,
          mtp: 10600,
          nor: '..%2F300kbps%2Fsegment35.m4v',
          ot: 'a',
          rtp: 100,
          sf: 'd',
          sid: 'b62ac932-1967-4368-8e9a-31df70ef2bc5',
          st: 'v',
          tb: 67,
        },
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=-2300,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
  {
    description: 'Test: Incorrect Query with configuration using specificKey with wrong key',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['brc', 'sid'],
    },
    output:
      {
        valid: false,
        errors: [
          {
            description: 'The key does not mach with CMCD keys',
            key: 'brc',
            type: 'unknown-specific-key',
            value: undefined,
          },
        ],
        warnings: [],
        parsedData: undefined,
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
  {
    description: 'Test: Incorrect Query with configuration using only specifickey with wrong value type',
    header:
        'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,su=qualabs,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
    config: {
      specificKey: ['su', 'sid'],
    },
    output:
      {
        valid: true,
        errors: [
          {
            description: 'Value type is incorrect',
            key: 'su',
            type: 'wrong-type-value',
            value: '23',
          },
        ],
        warnings: [],
        parsedData: undefined,
        rawData: 'GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: es-ES,es;q=0.9\nCMCD-Object: br=67,d=4011,ot=a,tb=67\nCMCD-Request: bl=31700,dl=31700,mtp=10600,su=23,nor="..%2F300kbps%2Fsegment35.m4v"\nCMCD-Session: sf=d,sid="b62ac932-1967-4368-8e9a-31df70ef2bc5",st=v\nCMCD-Status: rtp=100\nConnection: keep-alive\nHost: dash.akamaized.net\nOrigin: https://reference.dashif.org\nReferer: https://reference.dashif.org/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\nsec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Linux"\n',
      },
  },
];

// --------------------------------------------------------

// export const queryConfigTestCases = [
//   {
//     description:
//       "Test: Correct Query with configuration using only specifickey, adding 'st' wrong value",
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
//     config: {
//       specificKey: ['su', 'sid'],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'qualabs',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dqualabs%2Csu',
//     },
//   },
//   {
//     description: 'Test: Correct Query with configuration using only customKey',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'com.qualabs-br': false,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description:
//       'Test: Correct Query with configuration using customKey and specificKey',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'boolean',
//           header: 'CMCD-Object',
//         },
//       ],
//       specificKey: ['br', 'sid'],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'com.qualabs-br': false,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description:
//       'Test: Correct Query with configuration using customKey with two keys',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'boolean',
//         },
//         {
//           key: 'com.qualabs-bs',
//           type: 'number',
//         },
//       ],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'com.qualabs-br': false,
//         'com.qualabs-bs': 45,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description:
//       'Test: incorrect Query with configuration using only customKey with wrong type value',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'qualabs',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           description: 'The type does not mach with CMCD types',
//           key: 'com.qualabs-br',
//           type: 'wrong-custom-type',
//           value: 'qualabs',
//         },
//       ],
//       warnings: [],
//       parsedData: undefined,
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Incorrect Query with configuration using only customKey sending true value',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dtrue%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           type: 'wrong-type-value',
//           key: 'com.qualabs-br',
//           value: 'true',
//           description: 'Value type is incorrect',
//         },
//       ],
//       warnings: [],
//       parsedData: undefined,
//       rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dtrue%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #1',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: '--qualabs-br--',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           type: 'invalid-custom-key',
//           key: '--qualabs-br--',
//           value: undefined,
//           description: 'Custom key names MUST carry a hyphenated prefix',
//         },
//       ],
//       warnings: [
//         {
//           description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
//           key: undefined,
//           type: 'customkey-without-reversedns',
//           value: undefined,
//         },
//       ],
//       parsedData: undefined,
//       rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #2',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: '-qualabs-',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           type: 'invalid-custom-key',
//           key: '-qualabs-',
//           value: undefined,
//           description: 'Custom key names MUST carry a hyphenated prefix',
//         },
//       ],
//       warnings: [
//         {
//           description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
//           key: undefined,
//           type: 'customkey-without-reversedns',
//           value: undefined,
//         },
//       ],
//       parsedData: undefined,
//       rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #3',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: '-',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           type: 'invalid-custom-key',
//           key: '-',
//           value: undefined,
//           description: 'Custom key names MUST carry a hyphenated prefix',
//         },
//       ],
//       warnings: [
//         {
//           description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
//           key: undefined,
//           type: 'customkey-without-reversedns',
//           value: undefined,
//         },
//       ],
//       parsedData: undefined,
//       rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Incorrect Query with configuration using customKey with a wrong key name #4',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br.com%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'qualabs-br.com',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           type: 'invalid-custom-key',
//           key: 'qualabs-br.com',
//           value: undefined,
//           description: 'Custom key names MUST carry a hyphenated prefix',
//         },
//       ],
//       warnings: [
//         {
//           description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
//           key: undefined,
//           type: 'customkey-without-reversedns',
//           value: undefined,
//         },
//       ],
//       parsedData: undefined,
//       rawData: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br.com%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description: 'Test: Warning bad Reverse DNS on customKey',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'qualabs-br',
//           type: 'boolean',
//         },
//       ],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [
//         {
//           description: 'Customkey without Reverse DNS, could be: com.example-customkeyname',
//           key: undefined,
//           type: 'customkey-without-reversedns',
//           value: undefined,
//         },
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'qualabs-br': false,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=qualabs-br%3Dfalse%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description:
//       'Test: first stage checking if custom config is not persited, adding customKey config #1',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-br',
//           type: 'boolean',
//         },
//         {
//           key: 'com.qualabs-bs',
//           type: 'number',
//         },
//       ],
//     },
//     output: {
//       valid: true,
//       errors: [],
//       warnings: [
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'com.qualabs-br': false,
//         'com.qualabs-bs': 45,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
//   {
//     description:
//       'Test: Second stage checking if custom config is not persited, without custom key config #2',
//     query:
//       'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     config: {
//       customKey: [
//         {
//           key: 'com.qualabs-bs',
//           type: 'number',
//         },
//       ],
//     },
//     output: {
//       valid: false,
//       errors: [
//         {
//           description: "The key 'com.qualabs-br' is not reserved.",
//           key: 'com.qualabs-br',
//           type: 'unknown-key',
//           value: 'false',
//         },
//       ],
//       warnings: [
//         {
//           type: 'no-alphabetical-order',
//           key: undefined,
//           value: undefined,
//           description: 'Keys are not arranged alphabetically',
//         },
//       ],
//       parsedData: {
//         cid: '21cf726cfe3d937b5f974f72bb5bd06a',
//         ot: 'i',
//         'com.qualabs-br': 'false',
//         'com.qualabs-bs': 45,
//         sf: 'd',
//         sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
//         st: 'v',
//         su: true,
//       },
//       rawData:
//         'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=com.qualabs-br%3Dfalse%2Ccom.qualabs-bs%3D45%2Ccid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu',
//     },
//   },
// ];
