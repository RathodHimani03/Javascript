
const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'pink';
// h1.style.backgroundColor = 'blue';

// const ul = document.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi);

const section = document.querySelector('section');
console.log(section.className)

const button = document.querySelector('button');
button.addEventListener(
'click',
() => {
section.classList.toggle('visible');
section.classList.toggle('invisible');

}

)
//adding new content to an existing element with some html cide
const div = document.querySelector('div');
div.innerHTML = div.innerHTML + '<p>Something went wrong!</p>';

div.insertAdjacentHTML('beforeend','<p>Something went wrong')

