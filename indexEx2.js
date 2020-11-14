const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

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

function getOperator() {
    return getStringInputWithPrompt('Please enter the operator:');
}

function getNumberArray(operator) {
    const iterations = getNumberInputWithPrompt('How many numbers do you want to ' + operator + '?');
    let numbers = new Array(iterations);
    for (let ix = 0; ix < iterations; ix++) {
        numbers[ix] = getNumberInputWithPrompt('Please enter number ' + (ix + 1) + ':');
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    let answer = numbers[0];
    for (let ix = 1; ix < numbers.length; ix++) {
        if (operator === '+') {
            answer += numbers[ix];
        } else if (operator === '-') {
            answer -= numbers[ix];
        } else if (operator === '*') {
            answer *= numbers[ix];
        } else if (operator === '/') {
            answer /= numbers[ix];
        }
    }
    return answer;
}

function performOneCalculation() {
    const operator = getOperator();
    const numbers = getNumberArray(operator);
    const answer = calculateAnswer(operator, numbers);
    console.log('\nThe answer is ' + answer);
}

printWelcomeMessage();
while (true) {
    performOneCalculation();
}