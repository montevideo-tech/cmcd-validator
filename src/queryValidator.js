// import { createError } from "./error.js";

export const queryValidator = (queryString) => {
  const error = [];

  //Check if the query is correct
  const query = queryString.split("?").pop();
  console.log("query \n", query);
  
  const requests = decodeURIComponent(query).split("CMCD=");
  requests.shift();
  console.log("requests \n", requests);
  
  if (requests.length > 1) {
    // error.push(createError("incorrect-format"));
    // console.error("Error \n", error);
  } else {
    
    //Check 3
    const values = decodeURIComponent(query).split("CMCD=")[1].split(",");
    values[values.length - 1] = values[values.length - 1].split("&")[0];

    console.log("values\n", values);

    // Check 1,2
    for (const val of values) {
      const [key, value] = val.split("=");
      // console.log(key)

      //Check 7
      if (typeof value === "String" && !(value.indexOf("\"") == 0 && value.lastIndexOf("\"") == value.length-1)){
        // error.push(createError("invalid-value", key, value));
      }

      if (typeof value === "undefined") {
        console.log("key bool \n", key);

        //Check 2
        if (keyTypes[key] !== "Boolean") {
        //   error.push(createError("wrong-type-value", key, value));
        }
        
      }
    }
  }
  return queryString, error;
};
