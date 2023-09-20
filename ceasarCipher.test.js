import ceasarCipher from "./ceasarCipher.js";

test('shift 1', () => {
    expect(ceasarCipher('defend the east wall of the castle', 1))
    .toMatch(/^efgfoe uif fbtu xbmm pg uif dbtumf$/)
})

test('keep case 1', () => {
    expect(ceasarCipher('dEfend the eAst wall Of the cAStle', 1))
    .toMatch(/^eFgfoe uif fBtu xbmm Pg uif dBTumf$/)
})

test('punctuation 5', () => {
    expect(ceasarCipher('Hi, Hello Zoidberg!', 5))
    .toMatch(/^Mn, Mjqqt Etnigjwl!$/)
})

