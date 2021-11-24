class GenericErrorConverter {
    convert(error){
        return {
            "message" : error.message,
            "code" : "0003"
        }
    }
}

export default GenericErrorConverter 
