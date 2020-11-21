const readline = require('readline-sync');

function getStringInputWithPrompt(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

exports.getStringInputWithPrompt = getStringInputWithPrompt;

exports.getNumberInputWithPrompt = function(prompt) {
    let response;
    do {
        response = getStringInputWithPrompt(prompt);
        if (isNaN(response)) {
            console.log(`"${response}" is not a valid number, please try again.`);
        }
    } while (isNaN(response))
    return +response;
}

exports.getOperatorInputWithPrompt = function(prompt) {
    let response;
    let validOperators = ['*','+','-','/','%','**'];
    let chosenOperator;
    do {
        response = getStringInputWithPrompt(prompt);
        chosenOperator = validOperators.includes(response);
        if (chosenOperator == false){
            console.log(`"${response}" is not a valid operator, please try again.`);
        }
    } while (chosenOperator == false);
    return response;
}