// ################# problem:  Multiples of 3 or 5      6 kyu

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// ### Steps
// 1- return 0 if arg is negative
// 2- iterate through given arg
// 3- perform Modules with 3 or 5
// 4- return sum



function solution(number){
   if (number < 0) {
       return 0;
   }else{
    let sum = 0;
    for (let index = 0; index < number; index++) {
        if (index % 3  == 0|| index % 5 == 0) {
            sum += index
        }
    }
    return sum;
   }
}


// solution from CodeWars 2
function solution2(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }

// test
console.log(solution(30))
console.log(solution(0))
