import { createError } from "./error.js";

export const queryValidator = (queryString) => {
    
    const error = []
    //Me quedo con lna info de interes
    const query = queryString.split("?").pop()
    console.log("query \n", query)
    
    
    
    //Chequear si hay mas de un CMCD= y el & por si se agrega algo mas despues
    const requests = decodeURIComponent(query).split('CMCD=')
    requests.shift()
    console.log("requests \n", requests)
        if(requests.length > 1) {
            error.push(createError("incorrect-format"))
            console.error("Error \n", error)
        }
        else {
            //Saco el & por si hay uno despues del test
            const values = decodeURIComponent(query).split('CMCD=')[1].split(',');
            // console.log("values", values)
            values[values.length-1] = values[values.length-1].split("&")[0]

            console.log('values\n', values)

            // Separo entre = cada valor de value
            // Chequear si hay un key = value
            // Si hay value y es true esta mal
            // Si no hay value es porque la key tiene que ser bool (fijarme en lo de Martu)

            // console.log(values[5].split('='))

            for(const val of values){
                const [key, value] = val.split("=")
                // console.log(key)

                if(typeof(value) === "undefined"){
                    console.log("key bool \n", key)

                    //chequear en lo que hizo Martu si es un bool, si no reportar error
                    if ()

                }

                
                
            }
        }
    
        return queryString, error
    



    
    
    


}



//?CMCD=sid%3D%226e2fb550-c457-11e9-bb97-0800200c9a66%22

//https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_3840x2160_12000k/bbb_30fps_3840x2160_12000k_0.m4v?CMCD=cid%3D%2221cf726cfe3d937b5f974f72bb5bd06a%22%2Cot%3Di%2Csf%3Dd%2Csid%3D%22b248658d-1d1a-4039-91d0-8c08ba597da5%22%2Cst%3Dv%2Csu















