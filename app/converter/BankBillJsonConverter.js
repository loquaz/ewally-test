class BankBillJsonConverter {
    constructor(bankBill, expirationDateBuilder){
        this.bankBill               = bankBill
        this.expirationDateBuilder  = expirationDateBuilder
    }

    convert(){
        return {
            "barCode" : this.bankBill.getBarCode(),
            "amount" : this.bankBill.getAmount(),
            "expirationDate" : this.expirationDateBuilder.getDueDate( parseInt( this.bankBill.getExpirationDateFactor() ) )
        }
    }
}

export default BankBillJsonConverter