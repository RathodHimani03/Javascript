// Immediate invoked function expression


// Syntax:
// (function functionName() {
//     // function logic
//    })();


(function greeting() {
    return "Hello";
   })();                  //will return Hello


   (function (a, b) {
    return a + b;
   })(2, 3);             //will return 5



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