import ErrorCodes from "../../app/exception_handler/ErrorCodes.js"

class InvalidDigitableLineException extends Error{
    constructor(message){
        super(message)
    }

    getCode(){
        return ErrorCodes.INVALID_DIGITABLE_LINE
    }
}

export default InvalidDigitableLineException