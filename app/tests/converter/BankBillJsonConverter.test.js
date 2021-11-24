import DueDateBuilder from "../../builder/DueDateBuilder"
import BASE_DATE from "../../../domain/constants"
import BankBillUseCase from "../../../domain/usecase/BankBillUseCase"
import DigitCheckerModule10 from "../../../domain/validator/DigitCheckerModule10"
import DigitCheckerModule11 from "../../../domain/validator/DigitCheckerModule11"
import BankBillJsonConverter from "../../converter/BankBillJsonConverter" 

const digitableLine = "00190500954014481606906809350314337370000000100"
const useCase       = new BankBillUseCase(new DigitCheckerModule10(), new DigitCheckerModule11())
const bankBill      = useCase.generate( digitableLine )
const jsonConverter = new BankBillJsonConverter( bankBill, new DueDateBuilder( BASE_DATE ) )
const response      = jsonConverter.convert()
const barCodeDigits = "00193373700000001000500940144816060680935031"

test("a data de vencimento para a linha " + digitableLine + " deve ser  [ 2007-12-31 ]", () => {
    expect( response.expirationDate ).toBe( "2007-12-31" )
})

test("o codigo de barras para a linha " + digitableLine + " deve ser  [ " + barCodeDigits + " ]", () => {
    expect( response.barCode ).toBe( barCodeDigits )
})