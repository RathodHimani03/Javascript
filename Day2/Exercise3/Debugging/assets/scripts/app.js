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
    )

    {
    //creat object
    const logEntry = {
    operation:operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
    }
    
    logEntries.push(logEntry.operation);
    console.log(logEntries);
    
    }
    function getUserNumberInput() {
    return userInput.value;
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
    WriteToLog("ADD",initialResult,enteredNumber,currentResult);
    }
    
    function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;//here using type conversation
    createAndWriteOutput('-', initialResult, enteredNumber);
    WriteToLog("SUBTRACT",initialResult,enteredNumber,currentResult);
    
    }
    
    function multiplication() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;//here using type conversation
    createAndWriteOutput('*', initialResult, enteredNumber);
    WriteToLog("MULTIPLICATION",initialResult,enteredNumber,currentResult);
    
    }
    
    function devision() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;//here using type conversation
    createAndWriteOutput('/', initialResult, enteredNumber);
    WriteToLog("DEVISION",initialResult,enteredNumber,currentResult);
    
    }
    
    
    // addEventListener
    
    addBtn.addEventListener("click", add); //addEvenListener take two arguments
    subtractBtn.addEventListener("click", subtract);
    multiplyBtn.addEventListener("click", multiplication);
    divideBtn.addEventListener("click", devision);
    
    //for understanding Function
    
    