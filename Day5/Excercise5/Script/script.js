const button = document.querySelector('button');


const buttonHandler = () => {

    window.open("app.html", "_self"); //help to replacae current window with new window
}

button.addEventListener('click', buttonHandler)

