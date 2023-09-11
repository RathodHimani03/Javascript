function add(num1,num2){
    
    return num1+num2;
}

console.log(add(1,5));
console.log(add(12,15));

function addRandom(num1){

    return num1 + Math.random();

}


let prevResult = 0;

function addMoreNumbers(num1,num2){

    const sum = num1 + num2;
    prevResult = sum;//side effect
    return sum;
}

console.log(addMoreNumbers(12,12))


const hobbies = ['sports','cooking']

function printHobbies(h){

    h.push("New Hobby");//side effect
    console.log(h)
}

printHobbies(hobbies)

//factory function - function that creates an object and return it


mul = 1.1;
function createTaxCalculator(tax){

    function calculateTax(amount){
        console.log(mul);
        return amount * tax;
    }
    
    return calculateTax;
}
// mul = 9.1; //function will take the latest value 

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeTaxAmount = createTaxCalculator(0.25)

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

let username = "Max";

function greetUser(){
    //  let name = Username; //still take new value 
     let name = "Anna"; 
         console.log("Hi" + name); //Hi Anna  here not take latest value becaue first check the inner value 
         
}

let name = "harry" //function will not take this value

username = "Himani";  //function will take this username because it's a  new value
greetUser()