 class CheckDigitModule10 {
    calculateModule(number){
        let multiplier      = 2
        let total           = 0
        let reversedNumbers = number.toString().split("").reverse()
        
        reversedNumbers.forEach( currentNumber => {
            let currentMultiplication = parseInt( currentNumber ) * multiplier
            if(currentMultiplication > 9) 
                currentMultiplication = this.reduceToOneDigitValue( currentMultiplication )   
            total += currentMultiplication
            multiplier = this.switchMultiplier(multiplier)
        });
        return total
    }

    reduceToOneDigitValue(value) {
        let splitedValue = value.toString().split("")
        let total = parseInt(splitedValue[0]) + parseInt(splitedValue[1])
        if(total > 9) total = reduceToOneDigitValue( total )
        return total
    }

    switchMultiplier(value) {
        return (value === 1) ? 2 : 1
    }

    getCheckDigit(number){
        let checkDigit = 10 - (this.calculateModule(number) % 10)
        return ( checkDigit === 10 ) ? 0 : checkDigit
    }
}

export default CheckDigitModule10