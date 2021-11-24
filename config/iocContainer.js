import AmountBuilder from "../app/builder/AmountBuilder.js"
import ExpirationDateBuilder from "../app/builder/ExpirationDateBuilder.js"
import BankBillContoller from "../app/controller/BankBillController.js"
import BankBillJsonConverter from "../app/converter/BankBillJsonConverter.js"
import BASE_DATE from "../domain/constants.js"
import BankBillUseCase from "../domain/usecase/BankBillUseCase.js"
import DigitCheckerModule10 from "../domain/validator/DigitCheckerModule10.js"
import DigitCheckerModule11 from "../domain/validator/DigitCheckerModule11.js"

const expirationDateBuilder = new ExpirationDateBuilder( BASE_DATE )
const amountBuilder         = new AmountBuilder()
const bankBillJsonConverter = new BankBillJsonConverter( expirationDateBuilder, amountBuilder )
export const digitCheckerMod10     = new DigitCheckerModule10()
export const digitCheckerMod11     = new DigitCheckerModule11()
export const bankBillUseCase       = new BankBillUseCase( digitCheckerMod10, digitCheckerMod11 )
export const bankBillController    = new BankBillContoller( bankBillUseCase, bankBillJsonConverter )
