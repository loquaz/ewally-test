class EnterpriseDigitableLine {
    
    constructor(line, digitCheckerMod10){
        this.line               = line
        this.digitCheckerMod10  = digitCheckerMod10
    }

    validate(){
        const fieldsPositions = 4
        for(let idx = 1; idx <= fieldsPositions; idx++){
            let field                       = this.getField( idx )
            let fieldWithoutDigitChecker    = field.toString().substring( 0, field.toString().length-1 )
            let fieldDigitChecker           = parseInt( field.substring(field.toString().length-1, field.toString().length) )
            if(this.digitCheckerMod10.getCheckDigit( fieldWithoutDigitChecker ) !== fieldDigitChecker){
                this.errorMessage =  "Digito verificador invalido no campo [ " + idx + " ]"
                return false
            }            
        }
        return true
    }

    getField(position){
        let initPosition, endPosition
        switch (position) {
            case 1: initPosition = 0,  endPosition  = 12; break;
            case 2: initPosition = 12, endPosition  = 24; break;
            case 3: initPosition = 24, endPosition  = 36; break;        
            case 4: initPosition = 36, endPosition  = 48; break;
            default: break;
        }
        return this.line.substring( initPosition, endPosition )
    }

    getFinantialInstitutionCode(){
        return this.line.substring(0,3)
    }

    getCurrenceCode(){
        return this.line.substring(3, 4)
    }

    getAmount(){
        let fieldOne = this.getField( 1 )
        let fieldTwo = this.getField( 2 )
        return fieldOne.substring(4,11) + fieldTwo.substring(0,4)
    }

    getDueDate(){
        let fieldFive = this.getField( 5 )
        return fieldFive.toString().substring(0,4)
    }

    getErrorMessage(){
        return this.errorMessage
    }
    
}

export default EnterpriseDigitableLine