class BankBillJsonConverter {
    constructor(bankBill){
        this.bankBill = bankBill
    }

    convert(){
        return {
            "barCode" : this.bankBill.getBarCode(),
            "amount" : this.bankBill.getAmount(),
            "experationDate" : this.bankBill.getExpirationDate()
        }
    }
}