const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);                      // h
console.log(gameName.__proto__);               // {}

console.log(gameName.length);                  // 8
console.log(gameName.toUpperCase());           // HITESHHC

console.log(gameName.charAt(2));               // t
console.log(gameName.indexOf('e'));            // 3

const newString = gameName.substring(0,4)
console.log(newString);                           // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);                       // hite

const newStringOne = "      hitesh     "
console.log(newStringOne);                                       //       hitesh    
console.log(newStringOne.trim());                                // hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))                          // https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'))                           // true


console.log(gameName.split('-'));                           // [ 'hitesh', 'hc', 'com' ](Converts string to Array on the basis of split term)