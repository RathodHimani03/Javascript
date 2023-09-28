// class User {
//     //in typescript we have to add property as a field
//     name: string;
//     age: number;
//     //it forces us to use this setup  because this in the end just leads to cleaner code

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


interface Greetable {
    name:string
}

interface Printable{
    print():void;
}

//we can  write class also like below

class User implements Greetable,Printable{
    constructor(public name: string, private age: number) {
        this.name = name;
        this.age = age;
    }

     print() {
         console.log(this.name)
     }

}

let  user = new User('Ashu',20);

console.log(user.name)

class Admin extends User {
    constructor(name:string,age:number,private permission:string[]){
        super(name,age);

    }
}









const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const button = document.querySelector('button');

function add(a: number, b: number) {
    return a + b;
}

//create enum type
//Use below two approch for literal type & union
enum OutputMode { CONSOLE, ALERT }
type PrintMode = 'console' | 'alert';


function printResult(result: number, printMode: OutputMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result)
    }
    if (printMode === OutputMode.ALERT) {

        alert(result);
    }
}

// function printResult(result,printMode:'console'|'alert') {
//     if(printMode === 'console'){
//         console.log(result)
//     }
//      if(printMode === 'alert'){

//         alert(result);
//     }
// }

// const result = add(5, 3);
// let isDone = false;

// printResult(result);




interface CalculationContainer{
    res:number;
    print():void
}



type calculationResult = CalculationContainer[];

//we can define our own type
// type calculationResult = { res: number, print: () => void }[];
// const results: calculationResult = [];
const results: Array<CalculationContainer> = [];

const names = ['Max']
button?.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    //   printResult(result);


    const resultContainer = {
        res: result,
        print() {
            console.log(this.res)
        }
    };

    results.push(resultContainer)
    //   results.push(5)
    // results[0].print()

    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});




function logAndEcho<T>(val:T){
    console.log(val);
    return val;
}


//in this function written anything so we can't directly do opration but we can do hte use of generic function

// logAndEcho("Hi there") 

logAndEcho<string>("Hi there").split(" ")