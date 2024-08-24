// let score = "33ab"

// console.log(typeof score)                         // string
// console.log(typeof (score))                       // string 


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);                // number
// console.log(valueInNumber);                       // NaN

// ========================================================================================
let score = null

console.log(typeof score)                         // object
console.log(typeof (score))                       // object

let valueInNumber = Number(score)
console.log(typeof valueInNumber);               // number
console.log(valueInNumber);                      // 0

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);                                  //true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);                            // 33
console.log(typeof stringNumber);                     // string

// ***************************** Operations ***************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);                 // 12
console.log(1 + "2")                  // 12
console.log("1" + 2 + 2);             // 122
console.log(1 + 2 + "1");             // 31

console.log(true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)