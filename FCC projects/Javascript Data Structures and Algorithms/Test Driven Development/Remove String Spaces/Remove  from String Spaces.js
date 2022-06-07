// Simple, remove the spaces from the string, then return the resultant string.


// steps 
// 1-  using regular expression remove empty spaces within strings

function noSpace(x) {
   // let removeSpaces =  x.replace(/\s/g,'')
   // return removeSpaces
   // return x
   return  x.split(" ").join("")
}

module.exports = noSpace