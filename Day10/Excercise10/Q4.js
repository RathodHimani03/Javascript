

const input = document.querySelector('input');


const onpressed = () => {
    input.style.backgroundColor = 'red'
}
const onrelease = () => {
    input.style.backgroundColor = 'green'
}

input.onkeydown = onpressed

input.onkeyup = onrelease



