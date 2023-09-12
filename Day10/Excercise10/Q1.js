// Question:1
// write a program to calculate add,sub,div,mul of two input from users.     

const calculate = (a,b) =>
{

    console.log(`The Addition of ${a} and ${b}:${a+b}`)
    console.log(`The subtraction of ${a} and ${b}:${a-b}`)
    console.log(`The multiplication of ${a} and ${b}:${a*b}`)
    console.log(`The division of ${a} and ${b}:${a/b}`)
   
}

const num1 = prompt("Enter First number:")
const num2 = prompt("Enter Second number:")


calculate(num1,num2)