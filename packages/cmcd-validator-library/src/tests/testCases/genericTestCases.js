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
  // Correct input nrr = start -
  {
    description: 'Correct input nrr = start -',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-",su
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
        "nrr": "12323-",
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
        nrr: '12323-',
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
  // Correct input nrr = - end
  {
    description: 'Correct input nrr = - end',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%22-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="-48763",su
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
        "nrr": "-48763",
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
        nrr: '-48763',
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
  // Incorrect input nrr format
  {
    description: 'Incorrect input nrr format #1',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2248763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="48763",su
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
        "nrr": "48763",
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
          description: 'Invalid Nrr format',
          type: 'incorrect-format',
          key: 'nrr',
          value: '48763',
        },
      ],
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
        nrr: '48763',
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
  // Incorrect input nrr format
  {
    description: 'Incorrect input nrr format #2',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2248763--1234%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="48763--1234",su
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
        "nrr": "48763--1234",
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
          description: 'Invalid Nrr format',
          type: 'incorrect-format',
          key: 'nrr',
          value: '48763--1234',
        },
      ],
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
        nrr: '48763--1234',
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
  // Correct input bl with ot = a
  {
    description: 'Correct input bl with ot = a',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Da%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=a,tb=6000
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
        "ot": "a",
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
        ot: 'a',
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
  // Correct input bl with ot = av
  {
    description: 'Correct input bl with ot = av',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dav%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=av,tb=6000
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
        "ot": "av",
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
        ot: 'av',
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
  // Correct input bl with ot = i, with warning for bl key
  {
    description: 'Correct input bl with ot = i',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Di%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=i,tb=6000
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
        "ot": "i",
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'i',
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
  // Correct input bl with ot = c
  {
    description: 'Correct input bl with ot = c',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dc%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=c,tb=6000
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
        "ot": "c",
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'c',
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
  // Correct input bl with ot = tt
  {
    description: 'Correct input bl with ot = tt',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dtt%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=tt,tb=6000
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
        "ot": "tt",
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'tt',
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
  // Correct input bl with ot = k
  {
    description: 'Correct input bl with ot = k',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dk%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=k,tb=6000
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
        "ot": "k",
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'k',
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
  // Correct input bl with ot = o
  {
    description: 'Correct input bl with ot = o',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Do%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=o,tb=6000
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
        "ot": "o",
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'o',
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
  // Correct input bl without ot
  {
    description: 'Correct input bl without ot',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,tb=6000
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
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
  // Incorrect input bl not round to nearest
  {
    description: 'Correct input bl without ot',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21301%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21301,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,tb=6000
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
        "bl": 21301,
        "br": 3200,
        "bs": true,
        "cid": "faec5fc2-ac30-11ea-bb37-0242ac130002",
        "d": 4004,
        "dl": 18500,
        "mtp": 48100,
        "nor": "..%2F300kbps%2Ftrack.m4v",
        "nrr": "12323-48763",
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
          description: 'bl value is not rounded to the nearest 100ms.',
          type: 'invalid-value',
          key: 'bl',
          value: 21301,
        },
      ],
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21301,
        },
      ],
      parsedData: {
        bl: 21301,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..%2F300kbps%2Ftrack.m4v',
        nrr: '12323-48763',
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
  // Correct input sf = h
  {
    description: 'Correct input sf = h',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dh%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=h,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
        "sf": "h",
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
        sf: 'h',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
    },
  },
  // Correct input sf = s
  {
    description: 'Correct input sf = s',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Ds%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=s,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
            "sf": "s",
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
            sf: 's',
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            st: 'v',
            su: true,
            tb: 6000,
          },
        },
  },
  // Correct input sf = o
  {
    description: 'Correct input sf = o',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Do%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=o,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
            "sf": "o",
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
            sf: 'o',
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            st: 'v',
            su: true,
            tb: 6000,
          },
        },
  },
  // Incorrect input sf = m
  {
    description: 'Incorrect input sf = m',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dm%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=m,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
            "sf": "m",
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
              description: 'sf value does not meet the necessary requirements. Must be one of the following values: d,h,s,o.',
              type: 'invalid-value',
              key: 'sf',
              value: 'm',
            },
          ],
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
            sf: 'm',
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            st: 'v',
            su: true,
            tb: 6000,
          },
        },
  },
  // Correct input st = l
  {
    description: 'Correct input st = l',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=l
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
        "st": "l",
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
        st: 'l',
        su: true,
        tb: 6000,
      },
    },
  },
  // Correct input v != 1
  {
    description: 'Correct input v != 1',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000%2Cv%3D2',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=l,v=2
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
        "st": "l",
        "su": true,
        "tb": 6000,
        "v": 2
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
        st: 'l',
        su: true,
        tb: 6000,
        v: 2,
      },
    },
  },
  // Correct input v == 1, with warning
  {
    description: 'Correct input v == 1, with warning',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dl%2Csu%2Ctb%3D6000%2Cv%3D1',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=l,v=1
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
        "st": "l",
        "su": true,
        "tb": 6000,
        "v": 1
    }`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          description: 'Client should omit this field if the version is 1',
          type: 'v-value',
          key: 'v',
          value: 1,
        },
      ],
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
        st: 'l',
        su: true,
        tb: 6000,
        v: 1,
      },
    },
  },
  // Correct input warning no sid
  {
    description: 'Correct input warning no sid',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Cst%3Dl%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,st=l
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
        "st": "l",
        "su": true,
        "tb": 6000
    }`,
    output:
    {
      valid: true,
      errors: [],
      warnings: [
        {
          type: 'no-sid-received',
          key: undefined,
          value: undefined,
          description: 'No sid received from CMCD message',
        },
      ],
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
        st: 'l',
        su: true,
        tb: 6000,
      },
    },
  },
  // Correct input warning pr = 1
  {
    description: 'Correct input warning pr = 1',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
        "pr": 1,
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
      warnings: [
        {
          type: 'pr-value',
          key: 'pr',
          value: 1,
          description: 'Should only be sent if not equal to 1.00',
        },
      ],
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
        pr: 1,
        rtp: 12000,
        sf: 'd',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 6000,
      },
    },
  },
  // Incorrect input sf = Qualabs
  {
    description: 'Incorrect input sf = Qualabs',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3DQualabs%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=Qualabs,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
            "sf": "Qualabs",
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
              type: 'invalid-value',
              key: 'sf',
              value: 'Qualabs',
              description: 'sf value does not meet the necessary requirements. Must be one of the following values: d,h,s,o.',
            },
          ],
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
            sf: 'Qualabs',
            sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            st: 'v',
            su: true,
            tb: 6000,
          },
        },
  },
  // Incorrect input ot = Qualabs
  {
    description: 'Incorrect input ot = Qualabs',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3DQualabs%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=Qualabs,tb=6000
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
        "ot": "Qualabs",
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
          type: 'invalid-value',
          key: 'ot',
          value: 'Qualabs',
          description: 'ot value does not meet the necessary requirements. Must be one of the following values: m,a,v,av,i,c,tt,k,o.',
        },
      ],
      warnings: [
        {
          description: 'bl key should only be sent with an object type of a, v or av',
          key: 'bl',
          type: 'bl-with-wrong-ot-value',
          value: 21300,
        },
      ],
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
        ot: 'Qualabs',
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
  // Incorrect input st = Qualabs
  {
    description: 'Incorrect input st = Qualabs',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3DQualabs%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=Qualabs
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
        "st": "Qualabs",
        "su": true,
        "tb": 6000
    }`,
    output:
    {
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'st',
          value: 'Qualabs',
          description: 'st value does not meet the necessary requirements. Must be one of the following values: v,l.',
        },
      ],
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
        st: 'Qualabs',
        su: true,
        tb: 6000,
      },
    },
  },
  // Incorrect input with su = false
  {
    description: 'Incorrect input su = false ',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%3Dfalse%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%3Dfalse%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su=false
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
        "su": false,
        "tb": 6000
    }`,
    output:
    {
      valid: false,
      errors: [
        {
          type: 'unnecessary-key',
          key: 'su',
          value: false,
          description: 'The su key should not be sent if the value is false',
        },
      ],
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
        su: false,
        tb: 6000,
      },
    },
  },
  // Incorrect input br negative
  {
    description: 'Incorrect input br negative',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D-3200%2Cbs%3Dfalse%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=-3200,d=4004,ot=v,tb=6000
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
        "br": -3200,
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
      valid: false,
      errors: [
        {
          type: 'invalid-value',
          key: 'br',
          value: -3200,
          description: 'The br value must be greater than 0.',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: -3200,
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
  // Incorrect input cid overlength
  {
    description: 'Incorrect input cid overlength',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
CMCD-Object: br=3200,d=4004,ot=v,tb=6000
CMCD-Status: bs,rtp=12000
CMCD-Session: cid="faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002",pr=1.08,sf=d,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
        "cid": "faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002",
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
          type: 'invalid-value',
          key: 'cid',
          value: 'faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002',
          description: 'Invalid value for key cid. Maximum length is 64 characters.',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002faec5fc2-ac30-11ea-bb37-0242ac130002',
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
  // Incorrect input nor unencoded
  {
    description: 'Incorrect input nor unencoded',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22../300kbps/track.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="../300kbps/track.m4v",nrr="12323-48763",su
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
        "nor": "../300kbps/track.m4v",
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
          type: 'parameter-encoding',
          key: 'nor',
          value: '../300kbps/track.m4v',
          description: 'The key: nor must be URLencoded.',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '../300kbps/track.m4v',
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
  // Correct input with nor key without any character to encode.
  {
    description: 'Correct input with nor key without any character to encode.',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D48100%2Cnor%3D%22..300kbps-track.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=48100,nor="..300kbps-track.m4v",nrr="12323-48763",su
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
        "nor": "..300kbps-track.m4v",
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
          type: 'incorrect-format',
          key: 'nor',
          value: '..300kbps-track.m4v',
          description: 'The key: nor must be a relative path.',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 48100,
        nor: '..300kbps-track.m4v',
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
  // Correct input with nor key correctly encoded
  {
    description: 'Correct input with nor key correctly encoded.',
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
    description: 'Incorrect query with mtp = 0',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cmtp%3D0%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,mtp=0,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
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
        "mtp": 0,
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
          type: 'unnecessary-key',
          key: 'mtp',
          value: 0,
          description: 'The mtp key should not be sent if the value is 0',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        mtp: 0,
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
    description: 'Incorrect query with nor not being a relative path',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cnor%3D%22https%253A%252F%252Fdash.akamaized.net%252Fakamai%252Fbbb_30fps%252Fbbb_30fps_3840x2160_12000k%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,nor="https%3A%2F%2Fdash.akamaized.net%2Fakamai%2Fbbb_30fps%2Fbbb_30fps_3840x2160_12000k%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
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
        "nor": "https%3A%2F%2Fdash.akamaized.net%2Fakamai%2Fbbb_30fps%2Fbbb_30fps_3840x2160_12000k%2F300kbps%2Ftrack.m4v",
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
          type: 'incorrect-format',
          key: 'nor',
          value: 'https%3A%2F%2Fdash.akamaized.net%2Fakamai%2Fbbb_30fps%2Fbbb_30fps_3840x2160_12000k%2F300kbps%2Ftrack.m4v',
          description: 'The key: nor must be a relative path.',
        },
      ],
      warnings: [],
      parsedData: {
        bl: 21300,
        br: 3200,
        bs: true,
        cid: 'faec5fc2-ac30-11ea-bb37-0242ac130002',
        d: 4004,
        dl: 18500,
        nor: 'https%3A%2F%2Fdash.akamaized.net%2Fakamai%2Fbbb_30fps%2Fbbb_30fps_3840x2160_12000k%2F300kbps%2Ftrack.m4v',
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
    description: 'Correct query with nor being a relative path.',
    query: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=bl%3D21300%2Cbr%3D3200%2Cbs%2Ccid%3D%22faec5fc2-ac30-11ea-bb37-0242ac130002%22%2Cd%3D4004%2Cdl%3D18500%2Cnor%3D%22..%252F300kbps%252Ftrack.m4v%22%2Cnrr%3D%2212323-48763%22%2Cot%3Dv%2Cpr%3D1.08%2Crtp%3D12000%2Csf%3Dd%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D6000',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=21300,dl=18500,nor="..%2F300kbps%2Ftrack.m4v",nrr="12323-48763",su
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
];
