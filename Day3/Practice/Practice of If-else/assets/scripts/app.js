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
let logEntries = []; //for storing use inputs

function WriteToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  //creat object
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry.operation);
  console.log(logEntries);
}
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultbeforCalc, calcNumber) {
  const calcDescription = `${resultbeforCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function calculateResult(calcType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if(
calcType == "ADD" ||
calcType == "SUBTRACT" ||
calcType == "MULTIPLICATION" ||
calcType == "DIVISION" 

  ){

  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calcType === "MULTIPLICATION") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calcType === "DIVISION") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  WriteToLog(calcType, initialResult, enteredNumber, currentResult);
  }
}
function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiplication() {
  calculateResult("MULTIPLICATION");
}

function devision() {
  calculateResult("DIVISION");
}

// addEventListener

addBtn.addEventListener("click", add); //addEvenListener take two arguments
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", devision);

//for understanding Function
