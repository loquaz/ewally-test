import InvalidCheckDigitException from "../../domain/exception/InvalidCheckDigitException.js";
import InvalidDigitableLineException from "../../domain/exception/InvalidDigitableLineException.js";
import ErrorJsonConverter from "./ErrorJsonConverter.js";
import GenericErrorConverter from "./GenericErrorConverter.js";

class ErrorConverterFactory {
    static getErrorConverter(error){
        if( error instanceof InvalidDigitableLineException || error instanceof InvalidCheckDigitException )
            return new ErrorJsonConverter()
            
        return new GenericErrorConverter()
    }
}

export default ErrorConverterFactory