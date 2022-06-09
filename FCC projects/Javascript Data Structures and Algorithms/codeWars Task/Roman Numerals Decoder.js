
//Problems: Roman Numerals Decoder 6 kyu

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// // Example:
// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


// steps



// test 
       console.log( solution("I") )//, 21);
		// doTest('I', 1);
		// doTest('IV', 4);
		// doTest('MMVIII', 2008);
		// doTest('MDCLXVI', 1666);

		function convertToRoman(num) {
			var roman = '';
			  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
			  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
			  for (var i = 0; i < decimal.length; i++) {
				  while (decimal[i] <= num) {
					  roman += romanNum[i];
					  num -= decimal[i];
				  }
			  }
			  return roman;
		  };
		  
		  
		  convertToRoman(36);
