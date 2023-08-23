const ATTACK_VALUE = 10; //player attack on monster
const STRONG_ATTACK_VALUE = 17;//strong attack of player
const MONSTER_ATTACK_VALUE = 14; //monster attack on player
const HEAL_VALUE = 20;

//Global constant
const MODE_ATTAKE = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

//take input from user
const enteredValue = prompt("Maximum life for you and the master", "100");
let chosenMaxLife = parseInt(enteredValue);

//take empty array for storing logs
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentplayerHealth = chosenMaxLife;
let hasBonusLife = true;

//for reset the game
function reset() {

    currentMonsterHealth = chosenMaxLife;
    currentplayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

//for adjust the healthbar
adjustHealthBars(chosenMaxLife);

//for making log

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalplayerHealth: playerHealth
    };

    //using switch case

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalplayerHealth: playerHealth
            };

            break;
        default:
            logEntry = {};


    }
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // }
    // else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = 'MONSTER';

    // }
    // else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = 'PLAYER';
    // }
    // else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = 'PLAYER';
    // }
    // else if (ev === LOG_EVENT_GAME_OVER) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalMonsterHealth: monsterHealth,
    //         finalplayerHealth: playerHealth
    //     };

    // }
    battleLog.push(logEntry);
}

function endRound() {
    let initialPlayerHealth = currentplayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentplayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentplayerHealth);


    //for bonus Life
    if (currentplayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();//remove from ui
        currentplayerHealth = initialPlayerHealth;
        alert("you would be dead but the bonus life saved you");
        setPlayerHealth(initialPlayerHealth)//for ui updation

    }

    if (currentMonsterHealth <= 0 && currentplayerHealth > 0) {
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER_WON',
            currentMonsterHealth,
            currentplayerHealth);
    }
    else if (currentplayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentplayerHealth);
    }
    else if (currentplayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }

    if (
        currentMonsterHealth <= 0 || currentplayerHealth <= 0) {
        reset();
    }
}

function attackmonster(mode) {
    let maxDamage;
    let logevent;

    if (mode === MODE_ATTAKE) {
        maxDamage = ATTACK_VALUE;
        logevent = LOG_EVENT_PLAYER_ATTACK;
    }
    else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logevent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logevent,
        damage,
        currentMonsterHealth,
        currentplayerHealth);
    endRound();
}


function attackHandler() {
    attackmonster(MODE_ATTAKE);
}

function strongAttackHandler() {
    attackmonster(MODE_STRONG_ATTACK);
}

//for healing of player
function healPlayerHandler() {
    let healvalue;
    if (currentplayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal more than your max initial health.");
        healvalue = chosenMaxLife - currentplayerHealth;
    }
    else {
        healvalue = HEAL_VALUE;
    }
    increasePlayerHealth(healvalue);
    currentplayerHealth += healvalue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healvalue,
        currentMonsterHealth,
        currentplayerHealth);
    endRound();
}

//for making log
function printlogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printlogHandler);