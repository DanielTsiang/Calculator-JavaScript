const userInput = require('./userInput');

exports.performOneVowelCountingCalculation = function() {
    const string = userInput.getStringInputWithPrompt('Please enter a string:');
    let vowelsArray = ['A', 'E', 'I', 'O', 'U'];
    console.log('The vowel counts are:');
    for (let vowel of vowelsArray) { // iterates over each element in vowelsArray
        let vowelRegExp = new RegExp(vowel, 'gi'); // constructs a new Regular Expression for each iteration
        let matchesArray = string.match(vowelRegExp); // constructs an array containing the matches
        const count = matchesArray ? matchesArray.length : 0; // check if matchesArray is not null, in which case length of matchesArray is returned, else 0 is returned
        console.log(`  ${vowel}: ${count}`);
    }
}