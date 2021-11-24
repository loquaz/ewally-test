class AmountBuilder {

    getAmount(amount){
        const decimalPart = amount.substring( amount.length-2 )
        const intPart     = parseInt( amount.substring( 0, amount.length-2 ) )
        return intPart + "." + decimalPart
    }
}

export default AmountBuilder