// // #### problem : Two to one 


// Take 2 strings s1 and s2 including only letters from a  to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a =              "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// steps 
// 1- scombine both args
// 2- sort through and eliminate any duplicates



function longest(s1, s2) {
    let combineValues = s1.concat( s2).split('').sort()
    return [...new Set(combineValues)].join('')
  }





  console.log(longest("aretheyhere", "yestheyarehere"))// "aehrsty")
// longest("loopingisfunbutdangerous", "lessdangerousthancoding") //"abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions")// "acefghilmnoprstuy")