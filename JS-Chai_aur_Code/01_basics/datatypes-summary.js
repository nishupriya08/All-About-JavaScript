// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;          // let userEmail = undefined (same)

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);  // false

const bigNumber = 54231726246738762;



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nishu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);
console.log(typeof anotherId);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "nishupriyadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nishu@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);