// Question:3
// Create an array of numbers (of your choice) and perform three array
// operations on it: filter for numbers greater than 5, map every number to
// an object which holds the number on some property (e.g. "num") and
// reduce the array to a single number (the multiplication of all numbers).   


let n = prompt('Enter the length of array:');  //taking user input

let pArray = [];

//taking the items of array from the user
for (let i = 0; i < n; i++) {

    let p = parseInt(prompt('Enter the items'));
    pArray.push(p);

}

//operation:1 ---> filter for greater than 5

const fArray = pArray.filter(a => a > 5);

// print the output and show on ui
const body = document.querySelector('body');
const output = document.createElement('h1');
output.textContent = "Output";
body.append(output);
const statement = document.createElement('p');
statement.textContent = `Opration2:After filter array [${pArray}] get  output is: [${fArray}]`;
body.append(statement);

console.log(pArray, fArray);


//operation:2 
// map every number to an object which holds the number on some property (e.g. "num") and
// reduce the array to a single number (the multiplication of all numbers).  


const obj = [
{ num: 1, item: 'pen', price: 30 },{num:2,item:'pencil',price:90},
{ num: 3, item: 'chocolate', price: 100 }, { num: 4, item: 'bread', price: 50 },
{ num: 5, item: 'ice cream', price: 40 }, { num: 6, item: 'pizza', price: 190 },
{ num: 7, item: 'sandwich', price: 80 }, { num: 8, item: 'bottle', price: 20 },
]

const mrArray = obj.map( objnum => objnum.num).reduce((mulval,curval) =>  mulval*curval,1);

const statement2 = document.createElement('p');
statement.textContent = `Operation1:After Mapping Reducing get  output is: ${mrArray}`;
body.append(statement2);
console.log(mrArray);




