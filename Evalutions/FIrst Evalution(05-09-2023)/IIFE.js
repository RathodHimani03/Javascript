// Immediate invoked function expression


// Syntax:
// (function functionName() {
//     // function logic
//    })();

// use:
// 1.one of the good ways to hide data from the global scope as it creates its own scope
// 2. suppose we want that  when our application will start directly database will 
  // connect at that  this immediate function will helpful


  //Named IIFE 
(function greeting() {
    return "Hello";
   })();      //write semicolon at the end           //will return Hello


   (function (a, b) {
    return a + b;
   })(2, 3);        //write semicolon at the end        //will return 5


   //simple IIFE(unNamed IIFE)
   (function greeting() {
    return "Hello";
   })();      //write semicolon at the end           //will return Hello


   (function (a, b) {
    return a + b;
   })(2, 3); 

//    One of the primary uses for an IIFE is to create private scope (i.e., private state).
//  Variables in JavaScript are traditionally scoped to a function.


const counter = (function () {
 let count = 0;
 
 
 return function () {
   count += 1;
 
 
   return count;
 };
})();

counter(); //1
counter();  //2
counter();  //3

	
count; // Uncaught ReferenceError: count is not defined 