// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {

    let refinedValue = pin.match(/\d/g).join("").match(/\d/g).join('')

    console.log(refinedValue);
    
    console.log(refinedValue.length);

    return refinedValue.length != 4 || refinedValue.length != 6 ? false : true
}
// module.exports = validatePIN
console.log(validatePIN("1234"));