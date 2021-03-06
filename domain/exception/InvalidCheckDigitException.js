import ErrorCodes from "../ErrorCodes.js"

class InvalidCheckDigitException extends Error{
    constructor(message){
        super(message)
    }

    getCode(){
        return ErrorCodes.INVALID_CHECK_DIGIT
    }
}

export default InvalidCheckDigitException