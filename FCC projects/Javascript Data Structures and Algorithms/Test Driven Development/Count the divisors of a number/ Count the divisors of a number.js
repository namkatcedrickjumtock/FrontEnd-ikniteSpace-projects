// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
    let numberOfDivisors = 0
    for (let index = 1; index <= n; index++) {
        // n % index == 0 ? numberOfDivisors += 1 : false
        if (n % index == 0)  numberOfDivisors += 1
    }
    return numberOfDivisors
}
module.exports = getDivisorsCnt

// console.log(getDivisorsCnt(54));