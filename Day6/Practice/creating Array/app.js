const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// const moreNumbers = Array(5);  ---will make array with 5 unknown elements

// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const iterateString =  Array.from('sting');
console.log(iterateString);  //[ "s", "t", "i", "n", "g" ]


//array operation

const hobbies = ['singing','dancing']
hobbies.push('Writing'); //will add in last
hobbies.pop() //will remove item from last
hobbies.unshift('Coding'); //shift every items to right
hobbies.shift() //shift everyitems to left



//splice method (startingpoint,give count want to remove,replaceelement with deleted )

const name = ["Ashu","kuldeep","mihir","vivek","rakesh","foram","amita"]
name.splice(4,3,"friends") //[ "Ashu", "kuldeep", "mihir", "vivek", "friends" ]
name.splice(3)// [ "Ashu", "kuldeep", "mihir" ]
name.splice(1,0,"vivek") //[ "Ashu", "vivek", "kuldeep", "mihir" ]
name.splice(-1,1)  //[ "Ashu", "vivek", "kuldeep" ]
console.log(name)



//slice method   -selecting range,coping array
// slice(start,endindex) //will not include last index,you cant use' negative index


const storedresult = [1,2,6,-0.8,4,77]
// const testresult = storedresult;//same reference of storedresult
// const testresult = storedresult.slice(2,9); 
const testresult = storedresult.concat([2,4,143]); 
testresult.push(9)
storedresult.concat([143,2])

console.log(storedresult,testresult)


//find index of perticular items
const x =[1.2,3.4,5,6,88,4,324,55,4,0]
// const newx = x.indexOf(4)  //5
const newx = x.lastIndexOf(4)  //8
console.log(newx)

//it will work fine for primitive values but not with reference values
const ref = [{name:"ashu"},{name:"mihir"}]
console.log(ref.indexOf({name:"ashu"}))  //it will return -1

//find and findindex method
const persons = [{name:"ashu"},{name:"mihir"}]
const operation = ref.find((person,idx,persons) => {
    return person.name === "ashu";
})  

const operation2 = ref.findIndex((person,idx,persons) => {
    return person.name === "mihir";
})  

console.log(operation2)



//includes 
const greeting = ['hi',"hello","how are you"];
console.log(greeting.includes('hello'));




// //forEachloop
// const prices = [50,56,33,56,99,4.8]
// const tex = 0.5

// const newlist = []

// prices.forEach((price,idx,prices) =>
//  {
//     const nprice = {
//         index : idx,
//        price : price*tex
//     };

//     newlist.push(nprice);
// });

// console.log(prices,newlist)


//map

const prices = [50,56,33,56,99,4.8]
const tex = 0.5

const newlist = prices.map((price,idx,prices) =>
 {
    const nprice = {
        index : idx,
       price : price*tex
    };

    return nprice;
});

console.log(prices,newlist)


//sorting 

const num = [10.3,6.9,4.4,33.0,5]

// console.log(num.sort()) //it will not sort perfectly

const sorted = num.sort((a,b) => {

    if(a>b){
        return 1;
    }else if ( a === b){
        return 0;
    }
    else{
        return -1;
    }
})


console.log(sorted);
console.log(sorted.reverse());//reverse the array


//filtring the aray with filter method

const arr = [10.2,3.7,6.9,4.3,5.2]

const farr = arr.filter((a,idx,arr) => {
    return a>6;
})

console.log(farr);


//reduce method

const arr2 = arr.slice();

const sum = arr2.reduce((prevValue,curValue,curIndex,arr) => {
    return prevValue+curValue;
},0);

console.log(sum);


//we can apply reduce method directly after map
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum2 = originalArray.map(obj => obj.price)
.reduce((sumVal, curVal) => sumVal + curVal, 0);

console.log(sum2);


//split and join


//split - string to array
const  data = "new york;10.99;2000";
const datasplit =  data.split(';');
datasplit[1] = +datasplit[1]
console.log(datasplit);

//join - array to string

const pname = ['Ashu','Rathod'];
const newpname = pname.join(' ');
console.log(newpname); //Ashu Rathod 


//spread operator

const l1 = [1,24,6,8,3,5,8,0]
const nL1 = [...l1];
l1.push(999)
console.log(l1,nL1)


const obj = [{name:'ashu',surname:'rathod'},{name:'ashu',surname:'rathod'}];
obj[0].name ="ashutosh";
const nObj = [...obj]; //here new changes will reflect 
console.log(obj,nObj)


//Array Distructuring

const greet = ['Hello',"india","how are you?"];

const [g1,g2,...g3] = greet;

console.log(g1,g2,g3)