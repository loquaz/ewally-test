import  DigitCheckerModule11 from "../../validator/DigitCheckerModule11.js"
const digitChecker = new DigitCheckerModule11()

test('Digito verificador de [ 154542549852124532542541254632254552336121 ] deve ser  [ 3 ]', () => {
    expect( digitChecker.getCheckDigit( "154542549852124532542541254632254552336121" ) ).toBe( 7 )
})