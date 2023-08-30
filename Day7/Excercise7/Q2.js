// Question 2:
// create dynamic key in object   


//for keys

const fname = "First Name";
const lname = "Last Name";
const hobby = ['Singing',"Dancing","Sketching"];

const dObject = {

    [fname] : "Dhara",
    [lname] : "Ganatra",
    age : 21,
    hobbies : [...hobby]

}

const print = (obj) => {
    for (let i in obj) {

        p.innerHTML += `
            ${i} : ${obj[i]} <br />
         `

    }
}

//diplay answer on ui
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
h2.textContent = 'Question2';
const p = document.createElement('p');

p.innerHTML += `<br /><strong>Dynamic Object <br /><br />
`
print(dObject);

body.appendChild(p)

console.log(dObject);