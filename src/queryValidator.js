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
                    if (keyTypes[key] != "Boolean"){
                        error.push(createError("wrong-type-value", key, value))
                    }
                }
            }
        }
    
        return queryString, error
}