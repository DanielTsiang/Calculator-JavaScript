const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==============================');
}

function getCalculationMode(arithmeticMode, vowelCountingMode) {
    let response;
    let validCalculationModes = [arithmeticMode, vowelCountingMode];
    let chosenCalculationMode;
    do {
        response = userInput.getNumberInputWithPrompt(`Which calculator mode do you want?
        ${arithmeticMode}) Arithmetic
        ${vowelCountingMode}) Vowel counting`);
        chosenCalculationMode = validCalculationModes.find(element => element == response);
        if (chosenCalculationMode == undefined){
            console.log('That is not a valid calculation mode, please try again.');
        }
    } while (chosenCalculationMode == undefined);
    return response;
}

function startUp(){
    printWelcomeMessage();
    const arithmeticMode = 1;
    const vowelCountingMode = 2;
    const calculationMode = getCalculationMode(arithmeticMode, vowelCountingMode);
    if (calculationMode === arithmeticMode) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === vowelCountingMode) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}

startUp();
