// array

const  myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeros[0]);

// Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()                  // remove the last element

// myArr.unshift(9)             // Insert the element at first position
// myArr.shift()                // remove the first element from array

// console.log(myArr.includes(9));               // Boolean result
// console.log(myArr.indexOf(3));                // the index no. of asked Value

// const newArr = myArr.join()                    // Join and Convert the array to String

// console.log(myArr);                            // [0, 1, 2, 3, 4, 5 ]
// console.log(newArr);                           // 0,1,2,3,4,5


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    // it make changes in original array(1,2,3)should be removed from Original array
console.log("C ", myArr);
console.log(myn2);
