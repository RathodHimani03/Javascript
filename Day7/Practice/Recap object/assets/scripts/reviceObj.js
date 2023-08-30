const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert('Hi there!');
    }
};

person.greet();

//we can set the value dynamically
const lname = 'Surname';

const obj = {

    'first name': "Ashu",
    [lname]: 'Rathod',
    age: 12,

    1: "Hello"
}

//accessing property value by taking key in []
console.log(obj[1]); //Hello

//accessing indirectly
const fname = 'first name';

console.log(obj[fname])   //Ashu
console.log(obj[lname])    //Rathod


//copy object

// case:1

//spread operatior in cobination with object


const persons = {
    name: 'max',
    hobbies: ['singing', 'dancing', 'drawing'],
    age: 31
}

const nperson = { ...persons, age: 29, hobbies: [...persons.hobbies] };

console.log(persons, nperson);

persons.name = "maria"; //it will not afffect the nperson

console.log(persons, nperson);


  //case:2

  const company = {name:'Prominent pixel'};

  const company2 = Object.assign({},company);

  company.name = "Prominent_Pixel"; //it will not affect company2

  console.log(company,company2);