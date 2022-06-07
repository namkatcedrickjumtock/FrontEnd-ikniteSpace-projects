// ##### Sum of integers in string 7 kyu


// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.


// steps
// 1- extract intergers from arg
// 2- return null if args interger is negative
// 3- converts numbers in arg into interger and calculate sum


// solution 1
function sumOfIntegersInStrin(s){
          let  derivedInt = s.match(/\d+/g) // 'null
          console.log(derivedInt)
          if (derivedInt === null) {
           return 0
          }
          let calSum  = derivedInt.reduce((a,b) =>  +a + +b)
          return +calSum
  }


  // solution 2
  function sumOfIntegersInString(s) {
    return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
  }
//   test
console.log(sumOfIntegersInString("h3ll0w0rld")) //3
console.log(sumOfIntegersInString("2 + 3 = ")) //5
console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter.")) //1
console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")) //3868
console.log(sumOfIntegersInString("Dogs are our best friends.")) //0
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng.")) //18
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog.")) //3635

