
const isPrime = require('./isprimeNumber');

let primeValues = [2, 3, 5, 7, 11, 13]

let notPrimeValues = [0, 1, 4, 6, 8, 10,1054639243]


it('checking if value is prime', () => {
    for (const indexes in primeValues) {
        let startCount = indexes;
        // console.log(indexes);
        expect(isPrime(primeValues[startCount])).toBe(true)
    }
})


it('checking if value is not prime', () => {
    for (const indexes in notPrimeValues) {
        let startCount = indexes;
        expect(isPrime(notPrimeValues[startCount])).toBe(false)
    }
})