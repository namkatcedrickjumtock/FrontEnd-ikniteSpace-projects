// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// *********** steps *******
// 1- set vowels to remove
// 2- convert all input strings into lower case
// 3- splite the strings into a separate words of array 
// 4- loop through the array and checks ifs any words matches these vowels

// let testingValues = "aeiou";

function defendingTrollsSection(trollsectionText) {
    let charArr = trollsectionText.split("");
    // console.log(charArr);

    for (let keys = 0; keys < charArr.length; keys++) {
        if (charArr[keys].toLowerCase() == "a" || charArr[keys].toLowerCase() == "e"|| charArr[keys].toLowerCase() == "i" || charArr[keys].toLowerCase() == "o" || charArr[keys].toLowerCase() == "u" ) {
                charArr.splice(keys,1);
                keys--;
        }
}
let finalStr = charArr.join("");
console.log(finalStr);
}
// defendingTrollsSection("This website is for losers LOL!");
// defendingTrollsSection("No offense but,\nYour writing is among the worst I've ever read");
// defendingTrollsSection("What are you, a communist?");



function DisemVowels(params) {
        let vowelsCharactersRegex = /[aeiou]/g;
        return params.toLowerCase().replace(vowelsCharactersRegex,"");
}

// DisemVowels("This website is for losers LOL!");
console.log(DisemVowels("This website is for losers LOL!"))
