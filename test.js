const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==============================');

console.log('\nHow many numbers do you want to perform an operation on?');
const IterationsString = readline.prompt();
    if (isNaN(IterationsString) === true) {
        console.log('\nThat is not a valid number, please try again from the beginning.');
        return;
    }
const Iterations = (+IterationsString*2-1);

let Calculation = [];
let step;
let i;

for (step = 0, i = 1; step < Iterations; step += 2, i++) {
    console.log('\nPlease enter number ' + (i) +':');
    Calculation[step]= +readline.prompt();
        if (isNaN(Calculation[step]) === true) {
            console.log('\nThat is not a valid number, please try again from the beginning.');
            return;
        } else {
        if (step > 1) {
            Calculation = [eval(Calculation.join(''))];
            console.log(Calculation);
        }
        if (step < (Iterations-1)) {
            console.log('\nPlease enter operator ' + (i) +':');
            Operator = readline.prompt();
            if (Operator === '*' || Operator === '+' || Operator === '-' || Operator === '/') {
                Calculation[step+1]= Operator;
            } else {
                console.log('\nThat is not a valid operator, please try again from the beginning.');
                return;
            }
        }
    }
}

console.log('\nThe answer is ' + Calculation + '.');