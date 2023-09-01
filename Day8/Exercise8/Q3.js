// Question:3
// write a program create a constructor function using a prototype.       




function Fruites (){


    this.name = "Apple",
    this.color = "Red";
    this.price = 60;
    

}


let f1 = new Fruites();
let f2 = new Fruites();

//now adding new properties in constructor with using prototype

Fruites.prototype.numCount = 5;  //5

console.log(f1.numCount,f2.numCount); //5