// Question2
// write a program create a constructor function with parameter
//  and create object and accessing properties.



//create constructor with paramete


function Student(name,city,std) {

     this.name = name;
     this.city = city;
     this.std = std;
    this.greet = ()=>{
        console.log("I'm Student")
     }



}


//crates object

const s1 = new Student('Ashu',"Rajkot",7);
const s2 = new Student('Mihir',"Solanki",8);


//adding function in s1
s1.greet = function () {
    console.log("Hi, I'm new Student");
}

console.log(s1.name,s2.name);
console.log(s1.greet()); 
console.log(s1.city,s2.city);