const mavel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// mavel_heros.push(dc_heros)                     // push array inside an array as element

// console.log(mavel_heros);
// console.log(mavel_heros[3][1]);

const allheros = mavel_heros.concat(dc_heros)        // merge two arrays 
// console.log(allheros);

const all_new_heros = [...mavel_heros, ...dc_heros]        // merge two arrays 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]]

const real_another_array = another_array.flat(Infinity)      // make sigle array
console.log(real_another_array);



console.log(Array.isArray("Sachin"))
console.log(Array.from("Sachin"))
console.log(Array.from({name: "Sachin"}))                  // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));