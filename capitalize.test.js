import capitalize from "./capitalize.js"

test("manuel -> Manuel", () => {
    expect(capitalize('manuel')).toMatch(/^Manuel/)
})

test("MANUEL -> Manuel", () => {
    expect(capitalize('MANUEL')).toMatch(/^Manuel/)
})

