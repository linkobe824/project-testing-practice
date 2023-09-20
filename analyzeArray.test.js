import analyzeArray from "./analyzeArray.js";

test('object', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toEqual({average: 4, min: 1, max: 8, length: 6})
})

test('not all numbers', () => {
    expect(analyzeArray([2,3,"nan", null])).toMatch(/^Not all numbers$/);
})