// Question:5
// when a user selects dropdown value. ex. dropdown value like Java,PHP,Angular 
// when select java then alert message like "select language is java"         

const dropdownHandler = () => {

    menu.style.display =='block'?menu.style.display ='none':menu.style.display ='block'
 
 }

 const menu = document.querySelector('select')

const options = document.querySelectorAll('option')

menu.addEventListener("change",()=>{
    alert((menu[menu.selectedIndex]).value)

})
