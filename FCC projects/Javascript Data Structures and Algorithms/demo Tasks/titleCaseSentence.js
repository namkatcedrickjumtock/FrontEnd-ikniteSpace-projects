// ## Problem: TitleCase Sentence;

//  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// ## Steps
// - check input type must be string
// - split characters into individual  elements
// - loop through characters and get the first character of each word
// - return the  modified strings with capitalized format

// ############################ Title case Sentence ###############

function titleCase(str) { 
    let generatedString = str.split(" "); // ["word", "word2"]
    let capitalizedText = generatedString.map((elem) =>  elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase()).join(" ");

    // console.log(capitalizedText);
    return capitalizedText;
    // return capitalizedText;
  }
  

 // Test


titleCase("I'm a little tea pot") // I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") //Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //Here Is My Handle Here Is My Spout.