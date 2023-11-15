const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target, returnedTarget)

const obj = {
    name: "angularfeed",
    version: 1
}
obj.prototype = {
    type: "blog"
}
const angObj = Object.create(obj);
console.log(angObj); // {}
console.log(angObj.name); // angularfeed
console.log(angObj.prototype.type); // blog


const object1 = {};
Object.defineProperties(object1, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});
console.log(object1.property1);//42


const object2 = {
    a: 'somestring',
    b: 42,
};
for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
}
const array = Object.entries(object2)
console.log(array)//[ [ 'a', 'somestring' ], [ 'b', 42 ] ]


//A frozen object can no longer be changed: new properties cannot 
//   be added, existing properties cannot be removed, their enumerability, 
//   configurability, writability, or value cannot be changed, and the object's 
//   prototype cannot be re-assigned. freeze() returns the same object that was 
//   passed in.
const obj2 = {
    prop: 42,
};

console.log(Object.freeze(obj2));
obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop);
// Expected output: 42

// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42],
// ]);
// const obj = Object.fromEntries(entries);
// console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }

//   const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true


//isFrozen ---if it's freeze then it's frozen

const da = {
    a: {n:'somestring'},
    b: 42,
    c: false,
  };
const  {a:dha,b,c}={...da}
console.log(dha,b,c)