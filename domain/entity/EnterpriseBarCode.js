class EnterpriseBarCode {

    constructor(digitChkerMod10){        
        this.digitChecker = digitChkerMod10       
    }

    buildFromDigitableLine(dl){
        
        const fieldOne      =  dl.getField( 1 )       
        const fieldTwo      =  dl.getField( 2 )
        const fieldThree    =  dl.getField( 3 )
        const fieldFour     =  dl.getField( 4 )
        
        this.barCode = fieldOne.substring(0,3)
        this.barCode += "X"
        this.barCode += fieldOne.substring(4,11)
        this.barCode += fieldTwo.substring(0,11)
        this.barCode += fieldThree.substring(0,11)
        this.barCode += fieldFour.substring(0,11)

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

}

export default EnterpriseBarCode