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
    return [numbersArray, operatorsArray];
}

function calculateAnswer(array) {
    const [numbers, operators] = array;
    let answer = numbers[0];
    let step;
    let i;
    for (step = 1, i = 0; step < numbers.length; step++, i++) {
        switch (operators[i]) {
            case '*':
                answer *= numbers[step];
                break;
            case '+':
                answer += numbers[step];
                break;
            case '-':
                answer -= numbers[step];
                break;
            case '/':
                answer /= numbers[step];
                break;
            case '%':
                answer %= numbers[step];
                break;
            case '**':
                answer **= numbers[step];
                break;
            default:
                throw new Error(`Sorry, "${operators[i]}" is not a valid operator.`)
        }
    }
    return answer;
}

exports.performOneArithmeticCalculation = function() {
    const array = getArray();
   try {
        const answer = calculateAnswer(array);
        console.log(`\nThe answer is ${answer}.`);
    } catch (e) {
        console.log(`\n${e.name}: ${e.message}`);
    }
}