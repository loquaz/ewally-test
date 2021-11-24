import { bankBillUseCase } from "../../../config/IocContainer.js"

const digitableLine = "00190500954014481606906809350314337370000000100"
const bankBill      = bankBillUseCase.generate( digitableLine )

test("O fator de vencimento para a linha " + digitableLine + " deve ser  [ 3737 ]", () => {
    expect( bankBill.getExpirationDateFactor() ).toBe( "3737" )
})

test("O valor do boleto para a linha " + digitableLine + " deve ser  [ 0000000100 ]", () => {
    expect( bankBill.getAmount() ).toBe( "0000000100" )
})