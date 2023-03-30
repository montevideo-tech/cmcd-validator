export const genericTestCases = [
  // Correct input
  {
    description: 'Correct input #1',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=sid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Session: sid="6e2fb550-c457-11e9-bb97-0800200c9a66"
Connection: keep-alive
Host: dash.akamaized.net
Origin: https://reference.dashif.org
Referer: https://reference.dashif.org/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"`,
    json: `
    {"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData:
      {
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
      },
    },
  },
  {
    description: 'Correct input #2',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
Connection: keep-alive
Host: dash.akamaized.net
Origin: https://reference.dashif.org
Referer: https://reference.dashif.org/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"`,
    json: `
    {
        "bl": 21300,
        "br": 3200,
        "bs": true,
        "cid": "faec5fc2-ac30-11ea-bb37-0242ac130002",
        "d": 4004,
        "dl": 18500,
        "mtp": 48100,
        "nor": "..%2F300kbps%2Ftrack.m4v",
        "nrr": "12323-48763",
        "ot": "v",
        "pr": 1.08,
        "rtp": 12000,
        "sf": "d",
        "sid": "6e2fb550-c457-11e9-bb97-0800200c9a66",
        "st": "v",
        "su": true,
        "tb": 6000
    }`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
    },
  },
  {
    description: 'Correct input #3',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bs%2Crtp%3D15000%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Status: bs,rtp=15000
CMCD-Session: sid="6e2fb550-c457-11e9-bb97-0800200c9a66"
Connection: keep-alive
Host: dash.akamaized.net
Origin: https://reference.dashif.org
Referer: https://reference.dashif.org/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"`,
    json: `
    {
        "bs":true,
        "rtp":15000,
        "sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"
    }`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        bs: true,
        rtp: 15000,
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
      },
    },
  },
  // Correct input bool = false
  {
    description: 'Correct input bool = false ',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%3Dfalse%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs=false,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
Connection: keep-alive
Host: dash.akamaized.net
Origin: https://reference.dashif.org
Referer: https://reference.dashif.org/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"`,
    json: `
    {
        "bl": 21300,
        "br": 3200,
        "bs": false,
        "cid": "faec5fc2-ac30-11ea-bb37-0242ac130002",
        "d": 4004,
        "dl": 18500,
        "mtp": 48100,
        "nor": "..%2F300kbps%2Ftrack.m4v",
        "nrr": "12323-48763",
        "ot": "v",
        "pr": 1.08,
        "rtp": 12000,
        "sf": "d",
        "sid": "6e2fb550-c457-11e9-bb97-0800200c9a66",
        "st": "v",
        "su": true,
        "tb": 6000
    }`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: false,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
        ot: 'v',
        pr: 1.08,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
    },
  },
  // Bool = true
  {
    description: 'Bool = false ',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%3Dtrue%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs=true,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
Connection: keep-alive
Host: dash.akamaized.net
Origin: https://reference.dashif.org
Referer: https://reference.dashif.org/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"`,
    json: `
    {
        "bl": 21300,
        "br": 3200,
        "bs": true,
        "cid": "faec5fc2-ac30-11ea-bb37-0242ac130002",
        "d": 4004,
        "dl": 18500,
        "mtp": 48100,
        "nor": "..%2F300kbps%2Ftrack.m4v",
        "nrr": "12323-48763",
        "ot": "v",
        "pr": 1.08,
        "rtp": 12000,
        "sf": "d",
        "sid": "6e2fb550-c457-11e9-bb97-0800200c9a66",
        "st": "v",
        "su": true,
        "tb": 6000
    }`,
    output:
    {
      valid: false,
      errors: [
        {
          description: 'If the value is TRUE, the = and the value must be omitted',
          key: 'bs',
          type: 'incorrect-format',
          value: 'true',
        },
      ],
      warnings: [],
      parsedData: undefined,
    },
  },
];
