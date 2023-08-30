// Question 1:
// there is one object with 4 key,values then create three new objet
// from that single object (two object will take one key,value pair
// from that object and last( third object) take 3rd and 4th key,value pair of that object )     


const print = (obj) => {
    for (let i in obj) {

        p.innerHTML += `
            ${i} : ${obj[i]} <br />
         `

    }
}

const mObject = {
    firstName: 'Ashu',
    lastName: 'Rathod',
    age: 12,
    hobbies: ['singing,dancing,speaking']
}


//create second object from the mObject

const fObj = { firstName: mObject.firstName };


//create second object from the mObject

const sObj = { lastName: mObject.lastName };

//create second object from the mObject

const thObj = { age: mObject.lastName, hobbies: [...mObject.hobbies] };



//diplay answer on ui
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
h2.textContent = 'Question1';
const p = document.createElement('p');
p.innerHTML = "The main object <br /><br />";
print(mObject)

p.innerHTML += `<br /><strong>created object from main object taking one key value pair of that object<strong/>
<br />
`
print(fObj);

p.innerHTML += `<br /><strong>created second object from main object taking one key value pair of that object<strong/>
<br />
`
print(sObj);

p.innerHTML += `<br /><strong>created third object from main object taking two key value pair of that object<strong/>
<br />
`
print(thObj);


body.appendChild(p);

console.log(mObject, fObj);
