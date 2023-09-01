// Question:01
// write a program create multiple objects with constructor function.  


//constructor function 

function Person() {

    this.name = 'Ashutosh',
    this.age = 10;
     this.city = 'Rajkot',
     this.greet = () => {
        console.log("Hello Friends!");
     }
}

//make object from this constructor funcstion

const pObj1 = new Person();

const pObj2 = new Person();

const pObj3 = new Person();

//check the value of the objects

console.log(pObj1.name,pObj2.name,pObj3.name); 