//  console.log([]+[]);

// what will be output of below

// function b(){
//     console.log(`the length is ${this.length}`)
// };

// let a = {
//     length: 10,
//    method:function(b){
//     arguments[0]();
//    }
// }
// a.method(5,b)

// what will be output of below

// let a = 'constructor'
// console.log(a[a](03));

// what will be output of below

// console.log(("banglasesh").__proto__.__proto__.__proto__);

// what will be output of below 
let myfun = function(){
    return[].slice.call(arguments).sort();
};

console.log(myfun(1,2,3,9,4,2,4,))


