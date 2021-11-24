//import  BankBillUseCase from "../../usecase/BankBillUseCase.js"
//import DigitCheckerModule10 from "../../validator/DigitCheckerModule10.js"
//import DigitCheckerModule11 from "../../validator/DigitCheckerModule11.js"
import { bankBillUseCase } from "../../../config/iocContainer.js"


const digitableLine = "00190500954014481606906809350314337370000000100"
//const useCase       = new BankBillUseCase(new DigitCheckerModule10(), new DigitCheckerModule11())
const bankBill      = bankBillUseCase.generate( digitableLine )

test("O fator de vencimento para a linha " + digitableLine + " deve ser  [ 3737 ]", () => {
    expect( bankBill.getExpirationDateFactor() ).toBe( "3737" )
})

test("O valor do boleto para a linha " + digitableLine + " deve ser  [ 0000000100 ]", () => {
    expect( bankBill.getAmount() ).toBe( "0000000100" )
})