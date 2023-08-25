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
    return parseInt(userInput.value);
    }
    
    function createAndWriteOutput(operator, resultbeforCalc, calcNumber) {
    const calcDescription = `${resultbeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
    }
    
    
//using bind
    
function calculate(operation){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator ;
    if( operation === 'ADD'){
        currentResult = currentResult + enteredNumber;//here using type conversation
         operator = '+';
    }
    else if( operation === 'SUBTRACT'){
        currentResult = currentResult - enteredNumber;//here using type conversation
         operator = '-';
    }
    else if( operation === 'MULTIPLICATION'){
        currentResult = currentResult * enteredNumber;//here using type conversation
         operator = '*';
    }
    else if( operation === 'DIVISION'){
        currentResult = currentResult / enteredNumber;//here using type conversation
         operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    WriteToLog(operation,initialResult,enteredNumber,currentResult);
    
}
    
    // addEventListener
    
    addBtn.addEventListener("click", calculate.bind(this,'ADD')); //addEvenListener take two arguments
    subtractBtn.addEventListener("click", calculate.bind(this,'SUBTRACT'));
    multiplyBtn.addEventListener("click", calculate.bind(this,'MULTIPLICATION'));
    divideBtn.addEventListener("click", calculate.bind(this,'DIVISION'));
    
    //for understanding Function
    
    