
// const letters = new Set(["a","b","c"]);

// letters.add(2); //for adding new element

// for(const entry of letters.entries()){
//     console.log(entry[0]);
// }

// for(const entry of letters.values){
//     console.log(entry)
// }
// letters.delete('a');
// console.log(letters)

//maps


const person1 = {name:'max'};
const person2 = {name:'manual'};

const personData = new Map([[person1,[{date:'yesterday',price:10}]]]);

personData.set(person2,[{date:'two weeks ago',price:55}])

console.log(personData);
console.log(personData.get(person2)); //key


for(const [key,values] of personData.entries()){
    console.log(key,values);
}
 
for(const key of personData.keys()){
    console.log(key);
}


//weakset and weakmap

//weakset (interesting option incase
// where you store object data in set and you eventually release
//  some of that data and you want to make sure that thing can ne garbage collected)


let person = {name:"Max"};
const persons = new WeakMap();
persons.add(person);

// person =null ; //.some operation
console.log(persons);

//map
const personData2 = new WeakMap();
personData.set(person,"Extra info");
person = null;
console.log(persosnData2);