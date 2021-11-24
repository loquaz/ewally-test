import DueDateBuilder from "../../builder/ExpirationDateBuilder"
import BASE_DATE from "../../../domain/constants"
import BankBillJsonConverter from "../../converter/BankBillJsonConverter" 
import AmountBuilder from "../../builder/AmountBuilder"
import { bankBillUseCase } from "../../../config/iocContainer.js"

const regularDigitableLine1    = "00190500954014481606906809350314337370000000100"
const regularDigitableLine2    = "21290001192110001210904475617405975870000002000"
const regularDigitableLine3    = "21290001192110001210904475617405975870000056223"
const regularBankBill1         = bankBillUseCase.generate( regularDigitableLine1 )
const regularBankBill2         = bankBillUseCase.generate( regularDigitableLine2 )
const regularBankBill3         = bankBillUseCase.generate( regularDigitableLine3 )

const enterpriseDigitableLine1 = "826800000000538200478211807588370120160000000002"
const enterpriseBankBill1      = bankBillUseCase.generate( enterpriseDigitableLine1 )

const jsonConverter     = new BankBillJsonConverter( new DueDateBuilder( BASE_DATE ), new AmountBuilder() )
const response1         = jsonConverter.convert( regularBankBill1 )
const response2         = jsonConverter.convert( regularBankBill2 )
const response3         = jsonConverter.convert( regularBankBill3 )
const response4         = jsonConverter.convert( enterpriseBankBill1 )
const barCodeDigits1    = "00193373700000001000500940144816060680935031"
const barCodeDigits2    = "21299758700000020000001121100012100447561740"
const barCodeDigits3    = "21291758700000562230001121100012100447561740"

test("a data de vencimento para a linha " + regularDigitableLine1 + " deve ser  [ 2007-12-31 ]", () => {
    expect( response1.expirationDate ).toBe( "2007-12-31" )
})

test("o codigo de barras para a linha " + regularDigitableLine1 + " deve ser  [ " + barCodeDigits1 + " ]", () => {
    expect( response1.barCode ).toBe( barCodeDigits1 )
})

test("o valor do boleto para a linha " + regularDigitableLine1 + " deve ser  [ 1.00 ]", () => {
    expect( response1.amount ).toBe( "1.00" )
})

test("a data de vencimento para a linha " + regularDigitableLine2 + " deve ser  [ 2018-07-16 ]", () => {
    expect( response2.expirationDate ).toBe( "2018-07-16" )
})

test("o codigo de barras para a linha " + regularDigitableLine2 + " deve ser  [ " + barCodeDigits2 + " ]", () => {
    expect( response2.amount ).toBe( "20.00" )
})

test("o codigo de barras para a linha " + regularDigitableLine3 + " deve ser  [ " + barCodeDigits3 + " ]", () => {
    expect( response3.barCode ).toBe( barCodeDigits3 )
})

test("o valor do boleto para a linha " + regularDigitableLine3 + " deve ser  [ 562.23 ]", () => {
    expect( response3.amount ).toBe( "562.23" )
})


test("a data de vencimento para a linha " + enterpriseDigitableLine1 + " deve ser  [ 2018-07-16 ]", () => {
    expect( response4.expirationDate ).toBe( "2018-07-16" )
})

test("o valor do boleto para a linha " + enterpriseDigitableLine1 + " deve ser  [ 53.82 ]", () => {
    expect( response4.amount ).toBe( "53.82" )
})