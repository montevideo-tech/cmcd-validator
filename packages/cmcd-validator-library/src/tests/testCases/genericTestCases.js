export const genericTestCases = [
  // Correct input
  {
    description: 'Incorrect query with mtp = 0',
    query: 'https://dxclj9vp3m44c.cloudfront.net/hls/Costa_Rica_144_1080_00001.ts?CMCD=bl%3D0%2Cbr%3D1811%2Ccid%3D%221111-111111-111111-11111%22%2Cd%3D9812.5%2Cdl%3D0%2Cnor%3D%22https%3A%2F%2Fdxclj9vp3m44c.cloudfront.net%2Fhls%2FCosta_Rica_144_1080_00002.ts%22%2Cot%3Dv%2Csf%3Dh%2Csid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22%2Cst%3Dv%2Csu%2Ctb%3D1811.024',
    header: `GET /akamai/bbb_30fps/bbb_a64k/bbb_a64k_10.m4a HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
CMCD-Request: bl=0,dl=0,nor="https%3A%2F%2Fdxclj9vp3m44c.cloudfront.net%2Fhls%2FCosta_Rica_144_1080_00002.ts",su
CMCD-Object: br=1811,d=9812.5,ot=v,tb=1811.024
CMCD-Session: cid="1111-111111-111111-11111",sf=h,sid="6e2fb550-c457-11e9-bb97-0800200c9a66",st=v
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
        "bl": 0,
        "br": 1811,
        "cid": "1111-111111-111111-11111",
        "d": 9812.5,
        "dl": 0,
        "nor": "https%3A%2F%2Fdxclj9vp3m44c.cloudfront.net%2Fhls%2FCosta_Rica_144_1080_00002.ts",
        "ot": "v",
        "sf": "h",
        "sid": "6e2fb550-c457-11e9-bb97-0800200c9a66",
        "st": "v",
        "su": true,
        "tb": 1811.024
    }`,
    output:
    {
      valid: false,
      errors: [],
      warnings: [],
      parsedData: {
        bl: 0,
        br: 1811,
        cid: '1111-111111-111111-11111',
        d: 9812.5,
        dl: 0,
        nor: 'https%3A%2F%2Fdxclj9vp3m44c.cloudfront.net%2Fhls%2FCosta_Rica_144_1080_00002.ts',
        ot: 'v',
        sf: 'h',
        sid: '6e2fb550-c457-11e9-bb97-0800200c9a66',
        st: 'v',
        su: true,
        tb: 1811.024,
      },
    },
  },
];
