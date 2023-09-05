// Question:01
// write a program create car class and properties like 
// name,model,weight,color and method start(),drive(),brake(),stop()   



//create  the Car class
class Car {

  constructor (name,model,weight,color){
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;

  }

    start () {
        console.log("please start the Car");
    }

    drive(){
        console.log("please drive the Car");
    }

    brake(){
        console.log("please take brake here!");
    }

    stop(){
        console.log("please stop the Car");
    }
}

//create the object of that class

const c1 = new Car('BMW',"BMw X5", "5200 pound",'Blue');

c1.start();
c1.drive();
c1.brake();
c1.start();