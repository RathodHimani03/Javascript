// Question:06
// Create a list (and possibly some surrounding logic) where you ensure
// that NO duplicate values can be added. Use whichever approach seems
// appropriate to you.



const fruites = [
    { num: 'Day1', item: 'Banana', price: 30 },{num:'Day2',item:'Apple',price:90},
    { num: 'Day3', item: 'strawberry', price: 100 }, { num: 'Day4', item: 'orange', price: 50 },
    { num: 'Day5', item: 'Banana', price: 40 }, { num: 'Day6', item: 'Apple', price: 190 },
    { num: 'Day7', item: 'Guavava', price: 80 }, { num: 'Day8', item: 'Cherry', price: 20 },
    ]
    


const fArray = fruites.map( fruit => fruit.item);

console.log(fArray)
let fruitList = new Set([]);

for( let i of fArray){
    
    fruitList.add(i);

}

console.log(`The fruit list is : ${fruitList}`)