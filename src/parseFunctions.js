import {keyTypes} from './constants'

export const parseQueryToJson=(queryString)=>{
    const values=decodeURIComponent(queryString).replace('?CMCD=','').split(',');
    const obj={};
    let key,val;
    for(const value of values){
        key=value.split('=')[0];
        val=value.split('=')[1];
        if(keyTypes[key] ==='Integer'){
            obj[key]=parseInt(val);
        }else if(keyTypes[key]==='Boolean'){
            if(val==='false'){
                obj[key]=false;
            }else{
                obj[key]=true;
            }
        }else{
            obj[key]=val.replaceAll("\"","");
        }
    }
    return obj;
}