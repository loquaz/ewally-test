class BarCode {

    constructor(digitChkerMod11){        
        this.digitChecker = digitChkerMod11       
    }

    buildFromDigitableLine(dl, bankAttributes){

        const field1    = dl.getField( 1 )
        const field2    = dl.getField( 2 )
        const field3    = dl.getField( 3 )
        let barCodeTail = this.buildBarCodeTail( field1, field2, field3 ) 

        console.log( barCodeTail );

        this.barCode = dl.getFinantialInstitutionCode().toString()
        this.barCode += dl.getCurrenceCode().toString()
        this.barCode += "X"
        this.barCode += dl.getDueDate().toString()
        this.barCode += dl.getAmount().toString()
        this.barCode += barCodeTail
        /*
        this.barCode += bankAttributes.AGREEMENT_NUMBER
        this.barCode += "7777777" // SEQUENCIAL FORNECIDO PELO CLIENTE
        this.barCode += bankAttributes.RELATIONSHIP_AGENCY_NUMBER
        this.barCode += bankAttributes.CHECKING_ACCOUNT_NUMBER
        this.barCode += bankAttributes.CHARGING_MODE_NUMBER
        */
        return this._barCode()
    }

    _barCode(){
        let splitedBarCode              = this.barCode.split("X")
        let barCodeWithoutCheckDigit    = splitedBarCode[0] + splitedBarCode[1]
        return splitedBarCode[0] + this.generateCheckDigit(barCodeWithoutCheckDigit) + splitedBarCode[1]
    }

    generateCheckDigit(value){
        return this.digitChecker.getCheckDigit(value)
    }

    buildBarCodeTail( field1, field2, field3 ){
        return field1.substring(4,9) + field2.substring(0,10) + field3.substring(0,10) 
    }  

}

export default BarCode