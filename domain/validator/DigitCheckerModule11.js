class DigitCheckerModule11 {
    calculateModule(number){
        let multiplier      = 2
        let total           = 0
        let reversedNumbers = number.toString().split("").reverse()
        
        reversedNumbers.forEach( currentNumber => {            
            let currentMultiplication = parseInt( currentNumber ) * multiplier
            total += currentMultiplication
            multiplier = this.switchMultiplier(multiplier)
        });
        return total
    }    

    switchMultiplier(value) {
        return (value < 9) ? ++value : 2
    }

    getCheckDigit(number){
        let checkDigit = 11 - (this.calculateModule(number) % 11)
        return ( checkDigit === 10 || checkDigit === 11 || checkDigit === 0 ) ? 1 : checkDigit
    }
}

export default DigitCheckerModule11