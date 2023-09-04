// Question:02
// Write a program to get the volume of a Cylinder 
// with four decimal places using object classes.      

class Cylinder{

    constructor(radius,Height){
        this.pi = 3.14;
        this.radius = radius;
        this.Height = Height;
    }
    

    findVolume(){
        
        const volume = this.pi *(this.radius**2)*this.Height;
         return volume;
    }

}


//making the object


const prompt=require("prompt-sync")({sigint:true}); //for taking userinput from the terminal of the VScode.


let r = prompt("Enter the radius of the Cylinder:");
let h = prompt("Enter the height of the Cylinder:");

const obj =  new Cylinder(r,h);

const Volume = obj.findVolume();

console.log(`The Volume of the Cylinder is:${Volume}`);