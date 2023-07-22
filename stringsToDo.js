// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
    let wordsArray = str.split(" ");
    let finalArray = wordsArray.join("");
    return finalArray;
}

;
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("Chi cken Dinn er"));
console.log('\n');

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
    let digits = "";

    for( let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))) {
            digits += str[i];
        }
    }
    var result = Number(digits);
    return result;
}

console.log(getDigits("freee1halp254ea"));
console.log(getDigits("S1ngT0M33333"));
console.log('\n');

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function getAcronym(str) {
    let acronym = "";
    const wordArray = str.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        const firstLetter = wordArray[i][0].toUpperCase();
        acronym += firstLetter;
    }
    return acronym;
}


console.log(getAcronym("Have an apple"));
console.log(getAcronym("Does This Work - Like It Should"));
console.log('\n');

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    let totalNonSpace = Number(str.length);
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            totalNonSpace -= 1
        }
    }
    return totalNonSpace;
}
console.log(countNonSpaces("Test test"));
console.log(countNonSpaces("This should say 15"));
console.log('\n');

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(array, limit) {
    const result = [];
    let resultIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i].length >= limit) {
            result[resultIndex] = array[i];
            resultIndex ++;
        }
    }
    return result;
}

console.log(removeShorterStrings(["I", "will", "not", "show"], 4));