import { REGULAR_DIGITABLE_LINE_SIZE, ENTERPRISE_DIGITABLE_LINE_SIZE } from "../constants.js"
import BankBill from "../entity/BankBill.js"
import InvalidCheckDigitException from "../exception/InvalidCheckDigitException.js"
import InvalidDigitableLineException from "../exception/InvalidDigitableLineException.js"
import BarCodeFactory from "../factory/BarCodeFactory.js"
import DigitableLineFactory from "../factory/DigitableLineFactory.js"

class BankBillUseCase {

    constructor(digitCheckerMod10, digitCheckerMod11){
        this.digitCheckerMod10  = digitCheckerMod10
        this.digitCheckerMod11  = digitCheckerMod11
    }

    generate(digitableLine){
        
        if( digitableLine.length !== ENTERPRISE_DIGITABLE_LINE_SIZE && digitableLine.length !== REGULAR_DIGITABLE_LINE_SIZE  )
            throw new InvalidDigitableLineException( "Tamanho da linha digitavel invalido" )

        const digitableLineObj = new DigitableLineFactory().getInstance( digitableLine )
        
        if( !digitableLineObj.validate() )
            throw new InvalidCheckDigitException( digitableLineObj.getErrorMessage() )
        
        const barCodeObj = new BarCodeFactory().getInstance( digitableLine )
        return new BankBill( barCodeObj.buildFromDigitableLine( digitableLineObj ), digitableLineObj.getAmount(), digitableLineObj.getDueDate() )
    }
}

export default BankBillUseCase