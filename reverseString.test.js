import reverseString from "./reverseString.js"

test('manuel -> leunam', () => {
    expect(reverseString('manuel')).toMatch(/^leunam/)
})

test('man28uel -> leu82nam', () => {
    expect(reverseString('man28uel')).toMatch(/^leu82nam/)
})

