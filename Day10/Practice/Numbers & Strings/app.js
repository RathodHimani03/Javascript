

// every numeber is  a float unlike other programming language js
//  doesn't know special Integer type


let x= 123;
y = new Number(123) //object

// don't create number object

console.log(x == y )//true =>Number object produce  unexpected result

console.log( x === y) //false

console.log(0.2+0.4) //0.6000000000000001

//toString() method

let n = 5;

//binary take base 2
console.log(n.toString(2) ) //101

console.log(0.2+0.4 == 0.6 ) //false -because it's work with binary values

//big int

console.log(9999999999999999)//10000000000000000
console.log(9999999999999999n) //9999999999999999n

// some of the methods

Math.abs(-5) //5
Math.random() //creates a random number

Number.isFinite(10) //  `true
Number.isFinite(Infinity) //false


//creates random number between max and min

function randomIntBetween(max,min){
    return Math.floor(Math.random() * (max - min +1) + min);
}


console.log(
    randomIntBetween(1,9))



//Tagged Templates

function prodDescription(Strings,pname,pprice){

    console.log(Strings); // [ "This product ", " is ", "" ]
    console.log(pname); //Javascript
    console.log(pprice); //60
    return "This is my Product";

}


const price = 60.00;
const name = 'Javascript'

const produceOutput =  prodDescription`This product ${name} is ${price}`;

console.log(produceOutput)



//Regular Expression

const regex = /^\S+@\S+\.\S+$/

const userinput = 'test.com';

console.log(regex.test(userinput)) //false
console.log(regex.test('ashu@gmail.com')) //true

//some more examples

const regex2 = /hello/

console.log(regex2.test('this is hello.....')); //true
console.log(regex2.test('hi, Hello.....')); //false
console.log(regex2.test('hi')); //false

const regex3 = /(H|h)ow are you?/
console.log(regex3.test('hello, howare you?')) //false
console.log(regex3.test('hello, how are you?')) //true
console.log(regex3.test('hello, how areyou?')) //false
console.log(regex3.test('hello, How are you?')) //true

//

const regex4 = /.ello/ //itmean the ending should be ello you can take anything as starting
console.log(regex4.test('hello')) //true
console.log(regex4.test('ello')) //false
console.log(regex4.test('jarello')) //true
console.log(regex4.test('  Jello')) //true


//we can use exec which return array
// console.log(regex4.exec('Hi! Jello')) //Array [ "Jello" ]
// 0: "Jello"
// ​
// groups: undefined
// ​
// index: 4
// ​
// input: "Hi! Jello"
// ​
// length: 1


console.log('hi aello'.match(regex4)) //same result as above




