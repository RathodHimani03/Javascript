



//method which affect orginal array 
// copyWithin,pop,push,reverse,shift,sort,splice,unshift









a = ['ashu','himani','vivek','surabhi','mihir','kuldeep']

b = ['dhara','dharmik','jagruti','vishakha','vaibhavi','parth']

console.log(a.length) //6
console.log(a.at(3)) //surabhi
console.log(a.concat(b))
// [
//   'ashu',     'himani',
//   'vivek',    'surabhi',
//   'mihir',    'kuldeep',
//   'dhara',    'dharmik',
//   'jagruti',  'vishakha',
//   'vaibhavi', 'parth'
// ]
console.log(a)

//copyWithin(target,start,end) //affects the array //also do shallow copy//start and end optional
// console.log(a.copyWithin(2))//[ 'ashu', 'himani', 'ashu', 'himani', 'vivek', 'surabhi' ]
// console.log(a.copyWithin(0,1,4))//[ 'himani', 'vivek', 'surabhi', 'surabhi', 'mihir', 'kuldeep' ]

x=a.entries()
console.log(x.next().value)//[ 0, 'ashu' ]
console.log(x.next().value)//[ 1, 'himani' ]

const isBelowThreshold = (currentValue) => currentValue < 40;


//every(callback)
console.log(isBelowThreshold)
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); //true

//fill(value, start, end)

//filter will return array(creates a shallow copy of a portion of a given array, )
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);//[ 'exuberant', 'destruction', 'present' ] 
console.log(words,result);

const array2 = [5, 12, 8, 130, 44];
const found = array2.find((element) => element > 10); //10
console.log(array2,found);

//findIndex(callbackFn)
const array3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array3.findIndex(isLargeNumber));//3

const arr1 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr1.flat());//[ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
console.log(arr1.flat(2))//[ 0, 1, 2, 3, [ 4, 5 ] ]
console.log(arr1.flat(Infinity));//[ 0, 1, 2, 3, 4, 5 ]

const arr2 = ['a', 'b', 'c'];
arr2.forEach((element) => console.log(element));



const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));//Expected output: true

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));//1


//Array.from() --shallow copy
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));


console.log(Array.isArray([1, 3, 5]));//true
console.log(Array.isArray(new Int16Array([15, 33])));//false
const arr = new Array(1, 2, 3); 
console.log(Array.isArray(arr))//true
console.log(arr instanceof Array); //true 


const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());//Fire,Air,Water
console.log(elements,elements.join(''));//FireAirWater
console.log(elements.join('-'));//Fire-Air-Water


const n= ['a', 'b', 'c'];
const itr = n.keys();
for (const key of itr) {
  console.log(key);//give index 0,1,2
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));//3


//.map return array
const marr = [1, 4, 9, 16];
// Pass a function to map
const map1 = marr.map((x) => x * 2);
console.log(map1); //[ 2, 8, 18, 32 ]


console.log(Array(1,2,3))//[ 1, 2, 3 ]
console.log(Array.of(1, 2, 3))//[ 1, 2, 3 ]

const aff = [1,2,3,4,5]
aff.push(77)
console.log(aff)

let rvalue = aff.reduce((prev,cur)=>prev+cur,0)
console.log(rvalue)

const r = [
    [0, 1],
    [2, 3],
    [55,44],
  ];
  const r2 = r.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(r2);

//.reverse() affect the original
const rev = ['one', 'two', 'three'];
// console.log(rev,rev.reverse())/[ 'three', 'two', 'one' ] [ 'three', 'two', 'one' ]

const sf = [1, 2, 3];
console.log(sf,sf.shift()) //[ 2, 3 ] 1


const an = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(an,an.slice(2));//[ 'ant', 'bison', 'camel', 'duck', 'elephant' ] [ 'camel', 'duck', 'elephant' ]
console.log(an.slice(2,4))//[ 'camel', 'duck' ]

//.some(callbackfunction)
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true

const sarr = [1, 30, 4, 21, 100000];
sarr.sort();
console.log(sarr);//[ 1, 100000, 21, 30, 4 ]
const sarr2 = [1, 30, 4, 21, 100000];
sarr2.sort((a,b)=>{return a-b});
console.log(sarr2);//[ 1, 4, 21, 30, 100000 ]

//splice(start,delete,item)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,1,'hello');
console.log(months)//[ 'Jan', 'hello', 'April', 'June' ]


const larr = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = larr.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);

///toReverse-->do reverse and if have empty then taek it undefined

const as = [1, 2, 'a', '1a'];
console.log(as.toString());

const uns = [1, 2, 3];
console.log(uns,uns.unshift(4, 5));//[ 4, 5, 1, 2, 3 ] 5

const va = ['a', 'b', 'c'];
const iterator = va.values();

for (const value of iterator) {
  console.log(value);
}


// .with(index, value)
// const wa = [1, 2, 3, 4, 5];
// console.log(wa.with(2, 6));// [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]


const practic = [2,3,5,6,7,8]

const [ar ,...br] = [...practic]
console.log(tr,br)