import DueDateBuilder from "../../builder/DueDateBuilder"
import BASE_DATE from "../../../domain/constants"
import BankBillUseCase from "../../../domain/usecase/BankBillUseCase"
import DigitCheckerModule10 from "../../../domain/validator/DigitCheckerModule10"
import DigitCheckerModule11 from "../../../domain/validator/DigitCheckerModule11"
import BankBillJsonConverter from "../../converter/BankBillJsonConverter" 
import AmountBuilder from "../../builder/AmountBuilder"

const digitableLine1    = "00190500954014481606906809350314337370000000100"
const digitableLine2    = "21290001192110001210904475617405975870000002000"
const digitableLine3    = "21290001192110001210904475617405975870000056223"
const useCase           = new BankBillUseCase(new DigitCheckerModule10(), new DigitCheckerModule11())
const bankBill1         = useCase.generate( digitableLine1 )
const bankBill2         = useCase.generate( digitableLine2 )
const bankBill3         = useCase.generate( digitableLine3 )
const jsonConverter     = new BankBillJsonConverter( new DueDateBuilder( BASE_DATE ), new AmountBuilder() )
const response1         = jsonConverter.convert( bankBill1 )
const response2         = jsonConverter.convert( bankBill2 )
const response3         = jsonConverter.convert( bankBill3 )
const barCodeDigits1    = "00193373700000001000500940144816060680935031"
const barCodeDigits2    = "21299758700000020000001121100012100447561740"
const barCodeDigits3    = "21291758700000562230001121100012100447561740"

test("a data de vencimento para a linha " + digitableLine1 + " deve ser  [ 2007-12-31 ]", () => {
    expect( response1.expirationDate ).toBe( "2007-12-31" )
})

test("o codigo de barras para a linha " + digitableLine1 + " deve ser  [ " + barCodeDigits1 + " ]", () => {
    expect( response1.barCode ).toBe( barCodeDigits1 )
})

test("o valor do boleto para a linha " + digitableLine1 + " deve ser  [ 1.00 ]", () => {
    expect( response1.amount ).toBe( "1.00" )
})

test("a data de vencimento para a linha " + digitableLine2 + " deve ser  [ 2018-07-16 ]", () => {
    expect( response2.expirationDate ).toBe( "2018-07-16" )
})

test("o codigo de barras para a linha " + digitableLine2 + " deve ser  [ " + barCodeDigits2 + " ]", () => {
    expect( response2.barCode ).toBe( barCodeDigits2 )
})

test("o valor do boleto para a linha " + digitableLine2 + " deve ser  [ 20.00 ]", () => {
    expect( response2.amount ).toBe( "20.00" )
})

test("o codigo de barras para a linha " + digitableLine3 + " deve ser  [ " + barCodeDigits3 + " ]", () => {
    expect( response3.barCode ).toBe( barCodeDigits3 )
})

test("o valor do boleto para a linha " + digitableLine3 + " deve ser  [ 562.23 ]", () => {
    expect( response3.amount ).toBe( "562.23" )
})