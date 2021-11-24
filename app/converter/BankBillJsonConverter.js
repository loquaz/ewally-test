class BankBillJsonConverter {
    constructor(expirationDateBuilder, amountBuilder){
        this.expirationDateBuilder  = expirationDateBuilder
        this.amountBuilder          = amountBuilder
    }

    convert(bankBill){
        return {
            "barCode" : bankBill.getBarCode(),
            "amount" : this.amountBuilder.getAmount( bankBill.getAmount() ),
            "expirationDate" : this.expirationDateBuilder.getDueDate( parseInt( bankBill.getExpirationDateFactor() ) )
        }
    }
}

export default BankBillJsonConverter