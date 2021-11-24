class BankBill {

    constructor(barCode, amount, dueDate){
        this.barCode    = barCode
        this.amount     = amount
        this.dueDate    = dueDate
    }

     getBarCode(){
         return this.barCode
     }

     getExpirationDateFactor(){
         return this.dueDate
     }

     getAmount(){
        return this.amount
    }
}

export default BankBill