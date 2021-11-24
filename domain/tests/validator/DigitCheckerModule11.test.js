const DigitChecker = require('../validator/DigitCheckerModule11')
const digitChecker = new DigitChecker()

test('Digito verificador de [ 154542549852124532542541254632254552336121 ] deve ser  [ 3 ]', () => {
    expect( digitChecker.getCheckDigit( "154542549852124532542541254632254552336121" ) ).toBe( 7 )
})