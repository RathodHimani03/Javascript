const startGameBtn = document.getElementById('start-game-btn');


//anonymous function
const start = function(){
    console.log('Game is starting.........');
}

// console.log(typeof startGame) //function
// console.dir(startGame)

startGameBtn.addEventListener('click',start);

// const person = {

//     name : "himani",
//     greet : function greet(){
//         console.log('hello world');
//     }
// }

// person.greet();