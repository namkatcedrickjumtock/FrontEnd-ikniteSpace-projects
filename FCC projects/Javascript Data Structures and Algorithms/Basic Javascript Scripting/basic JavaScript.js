
// *Destructing objects in Javascript
// NB:
// - Object destructering can be done with dynamic paramters or local parameters
// - sinlge desctructing
// - Default desctructing
// - Aliases
// - Dynamic Desctructing

var Students = {
    names: "Cedrick",
    age:23,
    status:"single",
    courses: {
        CENG1: "Engineering Maths",
        CENG2: "Computer Programing",
        dept: {
            room1: "CM",
            room2: "HRM"
        }
    }   
}

// object dessctructing can also be perform on arrays
var shopItems = [
    "bread","sugar","books",
    "bike","eggs","milk",
    23,45
];

// multiple object destructing
const {names, age} = Students;
// console.log([names,age]); //more than one value can be access using this methos

// default object destructing
 const {name = undefined} = Students;
//  console.log(names);

// assigning new valuse to the extracted object's properties
var newName = "Namkat Cedrick";
var newAge = 50;

//  object aliases (simple a new name given to an acessed property name)
const {name:aliasName} = Students;
// console.log(aliasName);

// Accesing Deep objects using desctructuring
const {courses:{dept:{room1}}} = Students;
// console.log(room1);

// rest objects after distructuring that holds the remain properties in the object
const {status, ...remain} = Students;
console.log(status, remain);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const  failureItems = [];
  for (const items of arr) {
      var generatedTxt = `<li class="text-warning">${items}</li>`;
      failureItems.push(generatedTxt);
  
 }
    // Only change code above this line
  
    return failureItems;
  }
 
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);


//   classes in ES6 are use to create contructors.. it's important to note that
// it's not a full flesh classes like in other programing languages like python, ruby
// but a representation of an object and it follows a camekCase notation.

class vegetable{

}



// ########################### truncating a string
// simply means reducing the string wit respect to passed length
function truncateString(str, num) {
  return str.length > num? str.slice(0,num) +"...":str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



// Falsy Bouncer
// Remove all falsy values from an array.
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
