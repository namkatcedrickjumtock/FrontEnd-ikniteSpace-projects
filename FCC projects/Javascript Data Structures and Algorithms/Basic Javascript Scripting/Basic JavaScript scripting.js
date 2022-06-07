// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// ######################## SOLUTION ########################

// steps 
// - consider it's a multidimentional array
// loop through the 2 dimensional array
// - must return the highest number within the sub dimensional array

function largestOfFour(arr) {
    let arrMaxNum = [];
 
    for(let i=0; i<arr.length; i++){
      let sMaxNum = arr[i][0];
      for(let j =0; j<arr[i].length; j++){
        if(arr[i][j] >= sMaxNum){
          sMaxNum = arr[i][j];
        }
      }
      arrMaxNum.push(sMaxNum);
    }
    return arrMaxNum;
 }

//Test 
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 largestOfFour([[3,2,3,5], [5,2,5,6,0], [,1,6,4,8], [6,7,9,0]]);








//  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// ## Steps
// - check input type must be string
// - split characters into individual  
// - loop through character and get the first character if each word
// - return the  modified strings with capitalized format

// ############################ Title case Sentence ###############
function titleCase(str) { 
  let generatedString = str.split(" ");
  let capitalizedText = generatedString.map((elem) =>  elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase());
  // console.log(capitalizedText);
}

// Test
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("split characters into individual elements"));







// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
   newArr.splice(n,1,...arr1);
  return newArr;
}

// test
frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([5, 6, 30], [40, 50, 60], 5);
frankenSplice([11, 22, 33], [24, 53, 62], 4);



// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  var newArr= [];
  for (var i= 0; i < arr.length; i++){
    if (arr[i])
      newArr.push(arr[i]);
  }
  return newArr;
}

//Test 
bouncer([7, "ate", "", false, 9]);
bouncer([4,0,undefined,null,"hey"]);
bouncer([null,undefined,0,"ate",'be']);






















// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
