// // ######### Sum up the random string 8 kyu 

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

// Note:

// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treated as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:

// str = "In 2015, I want to know how much does iPhone 6+ cost?"
// The numbers are 2015, 6

// Sum is 2021.


// Steps
// 1- return 0 if sorted is zero
// 2- using Regular expression sort out only occurance of digit within the given string
// 3- convert the extracted digits (strings) into intergers and caculate the sum

// solution 1

function sumFromStrin(str){z
  let sorted = str.match(/\d+/g);
   if (sorted ===  0) {
     return 0;
   } else {
    let r =  sorted.reduce((a,b) => +a + +b); ["1",'2']
    return +r;
   }
  }

// solution 2
  function sumFromString(str) {
    return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
  }






// ############======#  Test
console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")) // ==> 2021)
console.log(sumFromString("1+1=2")) //== 4)
console.log(sumFromString("e=mc^") )//== 2)


