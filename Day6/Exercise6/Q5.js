// Question:3
// Tweak the "findMax" function such that it finds both the minimum and
// maximum and returns those as an array. Then use destructuring when
//  calling the function to store the two results in separate constants.


const findMaxMin = ((arr) => {

    let max = arr[0];
    let min = arr[0];

    let maxmin = [];
   
    for (let i of arr){
       if(i>max){
           max=i
       }else if(i<min){
        min=i
       }
    }
    maxmin.push(max,min);
    return maxmin;
   
   });
   
   
   const arr = [1, 85, 17, 70, 85];
   const output = findMaxMin(arr);
  
   const [max,min] = output; //destructuring
   console.log(`The maximum and minimumfrom this ${arr}: maximum is ${max} and min is ${min}`);