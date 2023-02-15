export const createOutput = (error, parsedData, rawData) => {
    const response =  {
        valid: error.length > 0,
        error,
        parsedData,
        rawData
    }  
    return JSON.stringify(response)
}