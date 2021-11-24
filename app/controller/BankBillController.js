class BankBillContoller {

    constructor(bankBillUseCase, converter){
        this.bankBillUseCase    = bankBillUseCase
        this.converter          = converter
    }

    bankBill( digitableLine ) {
        return this.converter.convert( this.bankBillUseCase.generate( digitableLine ) ) 
    }

}

export default BankBillContoller 