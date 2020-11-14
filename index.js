const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==============================');
}
printWelcomeMessage();

function getStringInputWithPrompt(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberInputWithPrompt(prompt) {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
    } while (isNaN(response));
    return response;
}

function getOperations(){
    return +getNumberInputWithPrompt('How many calculations do you wish to perform?');
}

function getOperator() {
    const operatorString = getStringInputWithPrompt('Please enter the operator:');
    if (operatorString !== '*' && operatorString !== '+' && operatorString !== '-' && operatorString!== '/') {
        console.log('\nThat is not a valid operator, please try again from the beginning.');
        return;
    }
    return operatorString
}

function getNumberArray(operator){
    const iterations =+getNumberInputWithPrompt('How many numbers do you want to ' + operator + '?');
    let numbers = [];
    for (let step = 0; step < iterations; step++) {
        numbers[step]= +getNumberInputWithPrompt('Please enter number ' + (step+1) +':');
    }
    return numbers;
}

function calculateAnswer(operator, numbers){
    let answer = numbers[0];
    for (let step = 1; step < numbers.length; step++) {
        if (operator == '*') {
            answer *= numbers[step];
        } else if (operator == '+') {
            answer += numbers[step];
        } else if (operator == '-') {
            answer -= numbers[step];
        } else if (operator == '/') {
            answer /= numbers[step];
        }
    }
    return answer;
}

function performOneCalculation(){
    const operator = getOperator();
    const numberArray = getNumberArray(operator);
    const answer = calculateAnswer(operator, numberArray);
    console.log('\nThe answer is ' + answer + '.');
}
        
function performAllCalculations(){
    const operations = getOperations();
    let counter = 0;
        while (counter < operations) {
        counter++;
        performOneCalculation();
    };
}

performAllCalculations();