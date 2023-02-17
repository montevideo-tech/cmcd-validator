
import { keyTypes } from './constants.js';
import { createError } from './error.js';
import {maxLength,isEncoded,validNrrFormat,validValue,roundToNearest, ignoredKey,isReserved} from './validateFunctions.js'

//keyValValidator takes as a parameter cmcdJson, which is a javascript object. The function iterates through it validating every key value pair.
export function keyValValidator(cmcdJson,errors){
    for(var key in cmcdJson){
        isReserved(errors,key);
        if((keyTypes[key]==='Integer') && (cmcdJson[key]<0)){
            console.log('The \''+ key +'\' value must greater than 0.');
            errors.push(createError('invalid-value',key,cmcdJson[key]));
        }
        switch(key){
            case 'bl':
                roundToNearest(errors,key,cmcdJson[key],100,'ms');
                if(!('ot' in cmcdJson)){
                    console.log('The \'' + key + '\'key should only be sent with the \'ot\' key.');
                    errors.push(createError('invalid-value',key,cmcdJson[key]));
                }
                break;
            case 'cid':
                maxLength(errors,key,cmcdJson[key]);
                break;
            case 'dl':
                roundToNearest(errors,key,cmcdJson[key],100,'ms');
                break;
            case 'mtp':
                roundToNearest(errors,key,cmcdJson[key],100,'kbps');
                break;
            case 'nor':
                isEncoded(errors,key,cmcdJson[key]);
                break;
            case 'nrr':
                validNrrFormat(errors,key,cmcdJson[key]);
                break;
            case 'ot':
                validValue(errors,key,cmcdJson[key],['m','a','v','av','i','c','tt','k','o']);
                break;
            case 'pr':
                ignoredKey(errors,key,cmcdJson[key],1);
                break;
            case 'rtp':
                roundToNearest(errors,key,cmcdJson[key],100,'kbps');
                break;
            case 'sf':
                validValue(errors,key,cmcdJson[key],['d','h','s','o']);
                break;
            case 'sid': 
                maxLength(errors,key,cmcdJson[key]);
                break;
            case 'st':
                validValue(errors,key,cmcdJson[key],['v','l']);
                break;
            case 'su':
                ignoredKey(errors,key,cmcdJson[key],false);
                break;
            case 'v':
                ignoredKey(errors,key,cmcdJson[key],1);
                break;      
        }
    }
}
