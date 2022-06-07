// ##### Problem:  Ceasar Cipher    6 kyu

// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task
// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

// Examples
// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.


//## steps

// 1- iterate over characrters
// 2- Derived each characters unicode plus the key
// 3-convert the above unicode code into characters

let alphabet = 
// test
// console.log(encryptor(13, ''),)//                 '');

console.log(encryptor(0, 'no cypher'),)//          'no cypher');
console.log(encryptor(13, 'Caesar Cipher'))// 'Pnrfne Pvcure');
console.log(encryptor(-5, 'Hello World!'))//   'Czggj Rjmgy!');
console.log(encryptor(27, 'Whoopi Goldberg'))// 'Xippqj Hpmecfsh');