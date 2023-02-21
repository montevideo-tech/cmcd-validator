export const createOutput = (errors, parsedData, rawData) => {
    const response =  {
        valid: errors.length === 0,
        errors,
        parsedData,
        rawData
    }  
    return JSON.stringify(response)
}