const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==============================');

console.log('\nPlease enter the operator:');
const firstOperator = readline.prompt();

console.log('\nPlease enter the first number:');
const firstArgument = readline.prompt();
const firstNumber = +firstArgument;

console.log('\nPlease enter the second number:');
const secondArgument = readline.prompt();
const secondNumber = +secondArgument;

/*if (firstOperator == '*') {
    var answer = firstNumber * secondNumber;
} else if (firstOperator == '+') {
    var answer = firstNumber + secondNumber;
} else if (firstOperator == '-') {
    var answer = firstNumber - secondNumber;
} else if (firstOperator == '/') {
    var answer = firstNumber / secondNumber;
} else console.log('\n"' + firstOperator + '" is not a valid operator.');
console.log('\nThe answer is ' + answer + '.');*/

switch (firstOperator) {
    case '*':
        answer = firstNumber * secondNumber;
        console.log('\nThe answer is ' + answer);
        break;
    case '+':
        answer = firstNumber + secondNumber;
        console.log('\nThe answer is ' + answer);
        break;
    case '-':
        answer = firstNumber - secondNumber;
        console.log('\nThe answer is ' + answer);
        break;
    case '/':
        answer = firstNumber / secondNumber;
        console.log('\nThe answer is ' + answer);
        break;
    default:
        console.log('\nSorry, "' + firstOperator + '" is not a valid operator.');
}