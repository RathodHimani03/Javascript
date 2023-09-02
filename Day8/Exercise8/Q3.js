// Question:3
// write a program create a constructor function using a prototype.       




function Fruites (name,color,price){

    this.name = name,
    this.color = color;
    this.price = price;
    

}


let f1 = new Fruites("Apple","Red",60);
let f2 = new Fruites("Orange","Orange",80);



//now adding new properties in constructor with using prototype

Fruites.prototype.numCount = 5;  //5
Fruites.prototype.test = () =>{
    console.log("This is healthy");

}
console.log(f1.numCount,f2.numCount); //5
console.log(f1.test);