class GenericErrorConverter {
    convert(error){
        return {
            "message" : error.message,
            "code" : "error.getCode()"
        }
    }
}

export default GenericErrorConverter 
