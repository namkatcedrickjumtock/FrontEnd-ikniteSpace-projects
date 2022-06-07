
// // ### valid numbers to 2 decimal places 7kyu
// Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

// Please check the criteria for a valid number:

// optional + or - symbol in front

// optional digits before a decimal point (digits are characters ranging from '0' to '9')

// a decimal point

// exactly two digits after the point

// nothing else

// Examples of valid and non-valid numbers

// List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

// List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]

// steps
// 1- if args is not Number return false
// 2- if args length from the decimal is more than or less than two return false
// 3 return false if arg contains symbols after the dot decimal



function validNumber(num){
    let sortFromDot = num.match(/[\.]\d+/g)
    console.log(sortFromDot)
    
    // let splittedNumbers = inputArg.split(/\./)
    // if(splittedNumbers[1].length > 2){
    //     return false
    // } else{
    //     return true
    // }
    
         
  }
// console.log(validNumber('6'))
// console.log(validNumber('00.0'))



// // Test
validNumber("0.004.6") //,true)
validNumber("23.001") //true)?
validNumber("-.00") //,true)
// validNumber(".30"), //true)
// validNumber("0.40") //,true)
// validNumber("34443.33")//),true)

// validNumber(".0a"), //false)
// validNumber("1.00.") //),false)
// validNumber(".+00") //,false)
// validNumber("w.00") //,false)
// validNumber("..00") //,false)
// validNumber("1,00") //,false)

