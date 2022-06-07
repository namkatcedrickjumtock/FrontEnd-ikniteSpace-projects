// ****************** Thinkful - List Drills: Longest word kyu 8*************

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.


//*********** */ steps

// 1- Loop through the given words
// 2- create a variable name largestWord
// 3- for each iterative word check if it's greater than largestWord
// 4- if the above condition validate to true, set String length.

    // solution 1
    function  longes(words) {
        let unModifiedArr = [...words] 
        let largestWord = unModifiedArr[0].length;
        // console.log(largestWord)
       for (let keys in unModifiedArr) {
        // console.log(keys)
        if (unModifiedArr[keys].length > largestWord) {
            largestWord = unModifiedArr[keys].length
        } 
       }
       return largestWord;
    }


//     // solution 2
function longest(words) {
    let inputWordsArr = [...words]
    let lWords = inputWordsArr[0].length;
     inputWordsArr.map(elem =>{
        if (elem.length > lWords) {
            lWords = elem.length
        } 
     }
        );
        return lWords;
}

// solution 3
function longes(words) {
    return words.reduce((a,b) => a.length > b.length ? a : b).length;
  }
// ************ Test 
console.log(longest(['simple', 'is', 'better', 'than', 'complex']))//, --> 7);
console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']))//, --> 8);
console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']))//, -->9);