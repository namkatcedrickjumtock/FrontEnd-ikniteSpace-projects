// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.



// steps
// 1- if input less than 2 return false
// 2- if the input is divisible by 2,3 or 5 and is greater than 5 return false
// 3- if the input is not divisible by 2,3 or 5 and less than 5 false else true

function isPrime(num) {

    let maximumDivisibleValue = Math.sqrt(num) 
    if (num < 2) return false;
    if (num == 2) return true;

    for (let itemCount = 2; itemCount < maximumDivisibleValue; itemCount++) {
        if (num % itemCount == 0) {
            return false;
        }
    }
    return true


}

module.exports = isPrime
// 1054639243
// console.log(isPrime(1054639243));
