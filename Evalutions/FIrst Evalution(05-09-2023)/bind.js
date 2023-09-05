
// bind

const student = {
    name:"Himani"
}


function printVal() {
    console.log(this.name );
}

const print = printVal.bind(student);

print(); //Himani

// -----------------------------------------------------------------------

// Call

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway"); //'John Doe,Oslo,Norway'

// ------------------------------------------------------------------------------

//Apply

function addUp(){
    //Using arguments to capture the arbitrary number of inputs
const args = Array.from(arguments); 
this.x = args.reduce((prev, curr) => prev + curr, 0);
console.log("x = ", this.x);
}

function driverFunc(){
const obj = {
    inps: [1,2,3,4,5,6]
}
addUp.apply(obj, obj.inps);
}

driverFunc() //x =  21