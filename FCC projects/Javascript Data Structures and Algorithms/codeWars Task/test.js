// function caesarCipher(k, s) {
//     var n = 26; // alphabet letters amount
//     if (k < 0) {
//         return caesarCipher(s, k + n);
//     }
//     return s.split('')
//         .map(function (c) {
//             if (c.match(/[a-z]/i)) {
//                 var code = c.charCodeAt();
//                 var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
//                 return String.fromCharCode(((code - shift + k) % n) + shift);
//             }
//             return c;
//         }).join('');
// }


// console.log(caesarCipher(13, ''))
// console.log(caesarCipher(0, "no cypher"))
// console.log(caesarCipher(13, "Caesar Cipher'"))
// // console.log(caesarCipher(-5, "Hello World!"))
// // console.log(caesarCipher(27, "Whoopi Goldberg'"))

let alphabetObject = {
    
}