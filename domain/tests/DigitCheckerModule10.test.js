const DigitChecker = require('../validator/DigitCheckerModule10')
const digitChecker = new DigitChecker()

test('Digito verificador de [ 659518485131865 ] deve ser  [ 9 ]', () => {
    expect( digitChecker.getCheckDigit( 659518485131865 ) ).toBe( 9 )
})

test('Digito verificador de [ 98731022 ] deve ser  [ 4 ]', () => {
    expect( digitChecker.getCheckDigit( 98731022 ) ).toBe( 4 )
})

test('Digito verificador de [ 0 ] deve ser  [ 0 ]', () => {
    expect( digitChecker.getCheckDigit( 0 ) ).toBe( 0 )
})