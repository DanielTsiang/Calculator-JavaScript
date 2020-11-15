const readline = require('readline-sync');

function getStringInputWithPrompt(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberInputWithPrompt(prompt) {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
        if (isNaN(response)) {
            console.log('That is not a valid number, please try again.');
        }
    } while (isNaN(response))
    return response;
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==============================');
}

function getCalculationMode(arithmeticMode, vowelCountingMode) {
    let response;
    let validCalculationModes = [arithmeticMode, vowelCountingMode];
    let chosenCalculationMode;
    do {
        response = getNumberInputWithPrompt(`Which calculator mode do you want?
        ${arithmeticMode}) Arithmetic
        ${vowelCountingMode}) Vowel counting`);
        chosenCalculationMode = validCalculationModes.find(element => element == response);
        if (chosenCalculationMode == undefined){
            console.log('That is not a valid calculation mode, please try again.');
        }
    } while (chosenCalculationMode == undefined);
    return response;
}

function getOperatorInputWithPrompt(prompt) {
    let response;
    let validOperators = ['*','+','-','/'];
    let chosenOperator;
    do {
        response = getStringInputWithPrompt(prompt);
        chosenOperator = validOperators.find(element => element == response);
        if (chosenOperator == undefined){
            console.log('That is not a valid operator, please try again.');
        }
    } while (chosenOperator == undefined);
    return response;
}

function getArray() {
    const calcLength = getNumberInputWithPrompt('How many numbers do you want to perform an operation on?');
    let numbersArray = [];
    let operatorsArray = [];
    let step;
    let i;
    for (step = 0, i = 0; step < calcLength; step++, i++) {
        numbersArray[step]= getNumberInputWithPrompt(`Please enter number ${step+1}:`);
        if (i < (calcLength-1)) {
            operatorsArray[i]= getOperatorInputWithPrompt(`Please enter operator ${i+1}:`);
        }
    }
    return {numbers: numbersArray, operators: operatorsArray};
}

function calculateAnswer(array) {
    let answer = array.numbers[0];
    let step;
    let i;
    for (step = 1, i = 0; step < array.numbers.length; step++, i++) {
        switch (array.operators[i]) {
            case '*':
                answer *= array.numbers[step];
                break;
            case '+':
                answer += array.numbers[step];
                break;
            case '-':
                answer -= array.numbers[step];
                break;
            case '/':
                answer /= array.numbers[step];
                break;
            default:
                console.log(`\nSorry, "${array.operators[i]}" is not a valid operator.`);
        }
    }
    return answer;
}

function countVowels(string) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) { //iterates over each character in string
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar] += 1;
        }
    }
    return counts;
}

function performOneArithmeticCalculation() {
    const array = getArray();
    const answer = calculateAnswer(array);
    console.log(`\nThe answer is ${answer}.`);
}

function performOneVowelCountingCalculation() {
    const string = getStringInputWithPrompt('Please enter a string:');
    const answer = countVowels(string);
    console.log('The vowel counts are:');
    for (let vowel in answer) {//iterates over each property name in answer
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

function startUp(){
    printWelcomeMessage();
    const arithmeticMode = 1;
    const vowelCountingMode = 2;
    const calculationMode = getCalculationMode(arithmeticMode, vowelCountingMode);
    if (calculationMode === arithmeticMode) {
        performOneArithmeticCalculation();
    } else if (calculationMode === vowelCountingMode) {
        performOneVowelCountingCalculation();
    }
}

startUp();
