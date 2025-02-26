
// 1. Remove falsy values from array
let value = ['😋', false,undefined,0,NaN,'🍔',null,'👑','𐐘💥╾━╤デ╦︻ඞා'];
let fruits = value.filter(Boolean);
console.log(fruits);

// 2. Convert any value to boolean


console.log(!!"Monirul ");

// 3. Resizing any array

let animals = ['🦇','🕷️','🎃','👻','💀']

animals.length = 3;

console.log(animals);

// 4. Flatten multi-dimensional array


let emoji = ['🎶',['🦇','🕷️'],['🎃',['👻','💀'],'🕷️']]

console.log(emoji.flat(Infinity));

// 5. Short conditionals

let a =  20 
if(a === 20){
  console.log("🎶")
} else{
    console.log("🦇");
}

a === 20 && console.log("🕷️")

a=== 23 || console.log("🎃")

// 6. Replace all occurrences of a string

let quote = " React is a js framework & this framework is one of the most poupler framework right now"

console.log(quote.replace(/framework/g, "library"));


// 7. Log values with variable names
 const library1= "React";
 const library2= "jQuery";

//  this

// console.log(`library1 - ${library1}`)
// console.log(`library2 - ${library2}`)

// we do this

console.log({library1})
console.log({library2})


// 8. Know performance of task

let startTime = performance.now();

for(let i = 0; i < 50 ; i ++){
    console.log(i);
}

let EndTime = performance.now();

console.log(` loop took ${startTime- EndTime } milliseconds to finish`)