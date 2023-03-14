import { CMCDQueryValidator } from '../index.js';


const urlI3 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const urlI4 = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/

const  ampersandVerify= (query) => {
  const regex = /\?(.+)(?=CMCD)/;
  const match = query.match(regex);
  if (match && !match[1].includes('&')) {
    return false;
  } else {
    return true;
  }
}
const query = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu"

const match = query.match(urlI4);

// console.log(ampersandVerify(query));

console.log(match);