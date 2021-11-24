import BankBill from "../entity/BankBill"
import BarCode from "../entity/BarCode"
import DigitableLine from "../entity/DigitableLine"

class BankBillUseCase {

    constructor(digitCheckerMod10, digitCheckerMod11){
        this.digitCheckerMod10  = digitCheckerMod10
        this.digitCheckerMod11  = digitCheckerMod11
    }

    generate(digitableLine){
        const digitableLineObj  = new DigitableLine(digitableLine, this.digitCheckerMod10)
        const barCodeObj        = new BarCode(this.digitCheckerMod11)
        return new BankBill( barCodeObj.buildFromDigitableLine( digitableLineObj ), digitableLineObj.getAmount(), digitableLineObj.getDueDate() )
    }
}

export default BankBillUseCase