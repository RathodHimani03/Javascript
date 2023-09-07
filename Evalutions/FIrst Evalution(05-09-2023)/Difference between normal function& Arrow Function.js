// 1. arrow function and regular function doesn't have their own this 

// Example:

this.name = "Ashu";
let myFun = {
    name : "Mihir",

    // Arrow function default points to global this
    arrow : () => {
        console.log(this.name) //no 'this' binding here
    },
	myFun1 : function () {
		console.log(this.name); // 'this' binding works here
	}
}
myFun.arrow();  //Ashu
myFun.myFun1(); //Mihir

// -------------------------------------------------------------------------------------

// 2.Since regular functions are constructible, they can be called using the ‘new’ keyword. 
// However, the arrow functions are only ‘callable’ and not constructible. 

let x = function(){
    console.log(arguments);
    };
    var y= new x(1,2,3); //Arguments{ 0:1, 1:2, 2:3,.....}

// arrowfunction
// run-time error on trying to construct a non-constructible arrow 
// function using the new keyword.

    let x1 = ()=> {
        console.log(arguments);
    };
    new x1(1,2,3)  //error: x1 is not a constructor

// ----------------------------------------------------------------------------------------


// 3.Arrow functions cannot be accessed before initialization

// 4.Arrow functions cannot be declared


