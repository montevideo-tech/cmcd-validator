/* eslint-disable import/prefer-default-export */
import { keyValValidator } from './keysValueValidator.js';

const prueba = {
  bl: 10509,
  br: 'hola',
  cid: 89,
  d: 4000.44,
  dl: 10500,
  mtp: 106400,
  nor: '"..%2F300kbps%2Fsegment35.m4v',
  nrr: '2345g',
  rtp: 28500,
  su: false,
  sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5',
  st: 90,
  tb: 14932,
};

export const testfunc = () => {
  const erroresArray = [];
  keyValValidator(prueba, erroresArray);
  console.log(erroresArray);
};
