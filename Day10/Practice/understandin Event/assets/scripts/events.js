const button = document.querySelector('button')

//can add like this use by anonymus function
// button.onclick = function(){

// }

//can add like this naming function

const buttonClickHanlder = (event) => {
    
    // if(event.ctrlKey == true){
    //     alert('no')
    // }

    console.log(event)
};


// const anothereButtonClickHandler = () => {
//     console.log('This was clicked');
// }


// //override the values which store this properties
// button.onclick = buttonClickHanlder; //will not run
// button.onclick = anothereButtonClickHandler ; //this was clicked 


//use Eventlistener

button.addEventListener('click', buttonClickHanlder)

//want to add like after sometime this click should be remove

// setTimeout(() => {
//     //in removeEventListener want same exactly arg as the setEventlistener have 
//     button.removeEventListener('click', buttonClickHanlder);
// }, 2000)


// we cannot add function like below because they both looking like same but both are different Object

// button.addEventListener('click',
//     () => {
//         console.log('clicked')
//     })
// setTimeout(() => {
//     //in removeEventListener want same exactly arg as the setEventlistener have 
//     button.removeEventListener('click', () => {
//         console.log('clicked')
//     });
// }, 2000)

//both are different object
// (() => {
//     console.log('clicked')
// }) == (() => {
//     console.log('clicked')
// }) // ansewer will  be  false

//this is not same because both create different function
// button.addEventListener('click', buttonClickHanlder.bind(this))
// button.addEventListener('click', buttonClickHanlder.bind(this))

 
//for above difficulty remove by making one const 
// const boundfn = buttonClickHanlder.bind(this);


//infinite scrolling
// window.addEventListener('scroll',
// event => {
//     let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);

// })

const formData = document.querySelector('form');
formData.addEventListener('submit',
event => {
    // prevent the default behaviour of browser
    event.preventDefault();
    console.log(event);
})
