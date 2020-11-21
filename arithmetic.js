const userInput = require('./userInput');

function getArray() {
    const calcLength = userInput.getNumberInputWithPrompt('How many numbers do you want to perform an operation on?');
    let numbersArray = [];
    let operatorsArray = [];
    let step;
    let i;
    for (step = 0, i = 0; step < calcLength; step++, i++) {
        numbersArray[step]= userInput.getNumberInputWithPrompt(`Please enter number ${step+1}:`);
        if (i < (calcLength-1)) {
            operatorsArray[i]= userInput.getOperatorInputWithPrompt(`Please enter operator ${i+1}:`);
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

exports.performOneArithmeticCalculation = function() {
    const array = getArray();
    const answer = calculateAnswer(array);
    console.log(`\nThe answer is ${answer}.`);
}