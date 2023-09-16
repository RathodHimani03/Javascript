//Many ways to iterate the object

//For in loop


const obj =  {

    name:"Himani",
    city:"Rajkot",
    hobbies: ['Sketching',"Singing","Painting"],
    greeting : function() {
        console.log("Hello Everyone!")
    }
}

// ------------------------------------
// for(let i in obj)
// {
//     console.log(i,obj[i]);
// }
// output
// name Himani
// city Rajkot
// hobbies [ 'Sketching', 'Singing', 'Painting' ]
// greeting [Function: greeting]

// -----------------------------

//get keys from the object
// Object.keys(obj).forEach(i => {
//     console.log(i)
// })

// name
// city
// hobbies
// greeting

// ----------------------------------------

//get values from object
// Object.values(obj).forEach(i => {
//     console.log(i)
// })

// Himani
// Rajkot
// [ 'Sketching', 'Singing', 'Painting' ]
// [Function: greeting]

// --------------------------------------------

//get keys and values both

const entries = Object.entries(obj);

// console.log(entries)

//[
//     [ 'name', 'Himani' ],
//     [ 'city', 'Rajkot' ],
//     [ 'hobbies', [ 'Sketching', 'Singing', 'Painting' ] ],
//     [ 'greeting', [Function: greeting] ]
//   ]

// const a = [];

// for(let i=0;i<entries.length;i++){
//     a.push(entries[i][0],entries[i][1])
// }

// console.log(a)
//[
//     'name',
//     'Himani',
//     'city',
//     'Rajkot',
//     'hobbies',
//     [ 'Sketching', 'Singing', 'Painting' ],
//     'greeting',
//     [Function: greeting]
//   ]



// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }



// -------------------------------------------------------------------------------


// Difference between Object.assign() and Object.create()


// Create method is used to create object instance with an already declared
//  object properties and it’s prototype and assign it to a newly created prototype 
//  object and return’s empty object.


// const obj = {
//     name: "angularfeed",
//     version: 1
//    }
// obj.prototype = {
//     type: "blog"
//    }
// const angObj = Object.create(obj);
// console.log(angObj); // {}
// console.log(angObj.name); // angularfeed
// console.log(angObj.prototype.type); // blog

// ----------------

// Assign method is used to assign object properties from source object to
//  the target object and also return’s the target object.

// const sourceObj = {
//     name: "ngfeed",
//     ver: 1
//    }
// const targetObj = {
//     name: "jsfeed",
//     ver: 1,
//     type: "academy"
//    }
// sourceObj.prototype = {
//      location: "Bangalore"
//    }
// const resultObj = Object.assign(targetObj, sourceObj);
// console.log(sourceObj); // {name: "ngfeed", ver: 1}
// console.log(targetObj); //{name: "ngfeed", ver: 1,type: "academy"}
// console.log(resultObj); // {name: "ngfeed", ver: 1,type: "academy"}
// console.log(targetObj.prototype.location); // Bangalore


// --------------------------------------------------------------------------------

//splice Vs slice


// --splice affect the original values
// --slice doesn't effect the origine values

let arr = [
    "educative",
    4,
    [1,3],
    {type: "animal"}
  ];
//   let slicedValues = arr.slice(1,3);
//   console.log(arr);//['educative', 4, Array(2), {…}]
//   console.log(slicedValues); //[4, Array(2)]

// let returnedArr = arr.splice(2,1,{name: "educative"});
// console.log(arr); //['educative', 4, {…}, {…}]
// console.log(returnedArr);/[Array(2)] [1,3]



