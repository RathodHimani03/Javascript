//Defined Funtion
function add(num1, num2) {
    const result = num1 + num2;
    // alert(`The result of Addition of ${num1} and ${num2} is:` + result);
    return result;
}


//function call
// outputResult(currentResult, calculationDescription);

const defaultvalue = 0;
let currentResult = defaultvalue;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultbeforCalc, calcNumber) {
    const calcDescription = `${resultbeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {

    //taking input by using function
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;//here using type conversation
    // currentResult = currentResult + + userInput.value; //we can write like this insread typeconvetsation
    createAndWriteOutput('+', initialResult, enteredNumber);

}

function subtract() {


    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;//here using type conversation
    createAndWriteOutput('-', initialResult, enteredNumber);

}

function multiplication() {


    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;//here using type conversation
    createAndWriteOutput('*', initialResult, enteredNumber);

}

function devision() {

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;//here using type conversation
    createAndWriteOutput('/', initialResult, enteredNumber);

}







// addEventListener

addBtn.addEventListener("click", add); //addEvenListener take two arguments
subtractBtn.addEventListener("click", subtract); 
multiplyBtn.addEventListener("click", multiplication); 
divideBtn.addEventListener("click", devision); 

//for understanding Function

