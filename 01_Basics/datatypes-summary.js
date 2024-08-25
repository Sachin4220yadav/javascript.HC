// Primitive (Javascript is Dynamically typed Language)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

const bigNumber = 2345454556767865764534n



//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"sachin",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);                        // bigint
console.log(typeof scoreValue);                       // number 
console.log(typeof isLoggedIn);                      // boolean
console.log(typeof userEmail);                       // undefined
console.log(typeof myFunction);                      // function
console.log(typeof heros);                           // object
console.log(typeof anotherid);                       // symbol



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "sachinyadavdotcom"             // primitive datatypes uses Stack memory i.e---
let anothername = myYoutubename                      // -- we get copy of a value 
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",                    //Non-Primitive Datatypes uses Heap memory i.e---
    upi: "user@ybl"                                 //--- we get refrence value
}

let userTwo = userOne

userTwo.email = "sachin@google.com"

console.log(userOne.email);
console.log(userTwo.email);
