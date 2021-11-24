class DigitableLine {
    
    constructor(line, digitCheckerMod10, digitCheckerMod11){
        this.line               = line
        this.digitCheckerMod10  = digitCheckerMod10
        this.digitCheckerMod11  = digitCheckerMod11
    }

    validate(){
        const fieldsPositions = 5
        for(let idx = 1; idx <= fieldsPositions; idx++){
            let field                       = this.getField( idx )
            let fieldWithoutDigitChecker    = field.toString().substring( 0, field.toString().length-1 )
            let fieldDigitChecker           = parseInt( field.substring(field.toString().length-1, field.toString().length) )
            if(this.digitCheckerMod10.getCheckDigit( fieldWithoutDigitChecker ) === fieldDigitChecker) 
                console.log( "------->", idx, field, fieldDigitChecker, this.digitCheckerMod10.getCheckDigit(fieldWithoutDigitChecker) );
        }

    }

    getField(position){
        let initPosition, endPosition
        switch (position) {
            case 1: initPosition = 0,  endPosition  = 10; break;
            case 2: initPosition = 10, endPosition  = 21; break;
            case 3: initPosition = 21, endPosition  = 32; break;        
            case 4: initPosition = 32, endPosition  = 33; break;
            case 5: initPosition = 33, endPosition  = 47; break;
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
        let fieldFive = this.getField( 5 )
        return fieldFive.substring(4,14)
    }

    getDueDate(){
        let fieldFive = this.getField( 5 )
        return fieldFive.toString().substring(0,4)
    }
    
}

export default DigitableLine