const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'pink';
h1.style.backgroundColor = 'blue';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}