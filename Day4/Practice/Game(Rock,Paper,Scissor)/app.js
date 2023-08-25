const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {

    let selection = prompt(`${ROCK} ${PAPER} OR ${SCISSORS}`, '').toUpperCase();

    //validate user input
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid choice! We choose ${DEFAULT_VALUE} for you!`);
        return DEFAULT_VALUE;
    }
    return selection;

}


const getComputerChoice = () => {
    const randomvalue = Math.random();
    if (randomvalue < 0.34) {
        return ROCK;
    }
    else if (randomvalue < 0.64) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}


const getWinner = (cChoice, pChoice = DEFAULT_VALUE) =>

    cChoice == pChoice ?
        RESULT_DRAW :
             cChoice == ROCK && pChoice == PAPER ||
            cChoice == SCISSORS && pChoice == ROCK ||
            cChoice == PAPER && pChoice == SCISSORS ?
            RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;




startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game starting.........');
    const PlayerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection, PlayerSelection);
    console.log(computerSelection);
    console.log(PlayerSelection);
    console.log(winner);
    if (PlayerSelection) {
        winner = getWinner(computerSelection, PlayerSelection);
      } else {
        winner = getWinner(computerSelection);
      }
      let message = `You picked ${PlayerSelection ||
        DEFAULT_USER_CHOICE}, computer picked ${computerSelection}, therefore you `;
      if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
      } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
      } else {
        message = message + 'lost.';
      }
      alert(message);
      gameIsRunning = false;

});


//understanding callback function

//rest parameter
const combine = (resethandler,type,...numbers) => {
  // console.log(a);
  // console.log(b);
   let sum =0 ;
   
   for(const num of numbers)
   {
    type === "add"? sum+=num :sum-=num
    
   return resethandler(sum);
}

}

const showresult = (message,result) => {
  alert(message + " " + result);
} 

// //before rest operator this arguments used
// const sum2 =  function (a,b,...numbers)  {
//   // console.log(a);
//   // console.log(b);
//    let sum =0 ;
//    for(const num of arguments)
//    {
//     sum+= num;
//    }
//    return sum;
// }

combine(showresult.bind(this,'The result after adding number is'),'add',2,3,45,6,8);
combine(showresult.bind(this,'The result after subtracting number is'),'subtract',2,3,45,6,8);
