
//function inside function

const calcSqure = (n) => {

    const  squre = (n1) => {

        return n1 ** 2;
    }
    

    let output = squre(n);

    return output;

}

let takeInput = prompt("Enter the number:");


let squreOfNumber = calcSqure(takeInput);

console.log(`The squre of ${takeInput} is:` + squreOfNumber);








