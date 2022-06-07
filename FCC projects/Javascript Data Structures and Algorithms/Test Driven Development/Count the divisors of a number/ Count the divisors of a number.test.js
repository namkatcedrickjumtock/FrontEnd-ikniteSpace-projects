const getDivisor = require("./ Count the divisors of a number")




it(`number of divisors when input`, () => {
    expect(getDivisor(1)).toBe(1)
});

it(`number of divisors when input`, () => {
    expect(getDivisor(10)).toBe(4)
});

it(`number of divisors when input`, () => {
    expect(getDivisor(11)).toBe(2)
});

it(`number of divisors when input`, () => {
    expect(getDivisor(54)).toBe(8)
})
