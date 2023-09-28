"use strict";
// class User {
//     //in typescript we have to add property as a field
//     name: string;
//     age: number;
//     //it forces us to use this setup  because this in the end just leads to cleaner code
//we can  write class also like below
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
let user = new User('Ashu', 20);
console.log(user.name);
class Admin extends User {
    constructor(name, age, permission) {
        super(name, age);
        this.permission = permission;
    }
}
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const button = document.querySelector('button');
function add(a, b) {
    return a + b;
}
//create enum type
//Use below two approch for literal type & union
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
//we can define our own type
// type calculationResult = { res: number, print: () => void }[];
// const results: calculationResult = [];
const results = [];
const names = ['Max'];
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    //   printResult(result);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    //   results.push(5)
    // results[0].print()
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
//in this function written anything so we can't directly do opration but we can do hte use of generic function
// logAndEcho("Hi there") 
logAndEcho("Hi there").split(" ");
