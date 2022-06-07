// Bingo ( Or Not ) (7kyu)

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// STEPS TO FOLLOW
// - 

// defining a array with corresponding values with 1 = A downward sequencing. for BINGO win word
// 2 = B
// 9 = I
// 14 = N
// 7 = G
// 15 = 0
// BINGO = [2,9,14,7,15]
let bingoMatch = [2,9,14,7,15];

// func computes and return if there's a match or there's a found
function bingo(data) {
 let s =  veryInputData(data);
 console.log(s);
  }

  function veryInputData(params){
    let veryingParam = params.replace(/[A-Z| a-z]/g,"");
    return veryingParam;
  }
  
bingo([1,3,4,5,"4"]);