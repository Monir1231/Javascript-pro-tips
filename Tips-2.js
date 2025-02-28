// 1. How to swap values?

// let array = [1,2,3,4,5]

// let team = array[1];
// array[1] = array[4]

// array[4] = team

// console.log(array);

// 2. How to copy things to clipboard?


// function copyToKeyboar(str){
//  let element = document.createElement('textarea');
//  element.value = str;
//  document.body.appendChild(element);
//  element.select()
//  document.execCommand("copy");
//  document.body.removeChild(element);
// }
// function handleClick(){
//     let text = document.querySelector('#text');
//     copyToKeyboar(text.innerText);
   
    
// }

// 3. How to destructure objects by aliases?

// const language={
//     name:'Javascript',
//     founded:'1995',
//     founder:'Brenden Eich'
// }

// const {name:LangName, founded : year} = language

// console.log(LangName,year);


// 4. How to get value as data type?

// let element = document.querySelector("#number").valueAsNumber;

// console.log(typeof element)

// 5. How to remove duplicates from an array?

// const array = [1,2,3,4,5,3,2,1,4];

// console.log([...new Set(array)]);


// 6. How to compare two arrays by values?///

// const hasSameElements = (a,b) =>{
//     return a.length === b.length && a.every((v,i) => v=== b[i]);
// };

// console.log(hasSameElements([1,3],[1,4]));


// 7. How to shuffle an array?

// let myarray = [1,2,3,5,6,7,8]

// let array = myarray.sort(() => Math.random()-0.5);

// console.log(array);

// let array = [1,2,3,4,5,6];

// for(let i= array.length- 1; i > 0 ; i--){
//   const k = Math.floor(Math.random()* (i *1));

//   [array[i],array[k]] = [array[k],array[i]];

//   console.log(array)}

// 8. How to use Comma Operato

// let x = 3
// x= (x++,x);
// console.log(x);

// let y = (2,3);
// console.log(y)

let array = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

for(let i = 0, j=2; i <2 ; i ++ , j--){
    console.log("a[" + i + "][" + j + "]=" + array[i][j]);
}