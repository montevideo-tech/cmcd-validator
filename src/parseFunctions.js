import {cmcdTypes, keyTypes} from './constants.js'

export const parseQueryToJson=(queryString)=>{
    const values=decodeURIComponent(queryString).split('CMCD=')[1].split('&')[0].split(',');
    const obj={};
    for(const value of values){
        const [key,val]=value.split('=');
        if(keyTypes[key] === cmcdTypes.number){
            obj[key]=parseInt(val);
        }else if(keyTypes[key]===cmcdTypes.boolean){
            val === 'false' ? obj[key] = false : obj[key] = true;
        }else{
            obj[key]=val.replaceAll("\"","");
        }
    }
    return obj;
}