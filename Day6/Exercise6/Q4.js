// Question:04
// Write a function ("findMax") which executes some logic that finds the
// largest number in a list of arguments. Pass the array from task 1 split
// up into multiple arguments to that function.


const findMax = ((farr,arr) => {

 let max =farr;


 for (let i of arr){
    if(i>max){
        max=i
    }
 }
 return max;

});


const arr = [1, 85, 17, 70, 85];
const [a1,...arr2] = arr;
console.log(`The maximum from this ${arr}:${findMax(a1,arr2)}`);