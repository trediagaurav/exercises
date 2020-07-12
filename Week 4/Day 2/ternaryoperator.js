//ternary operator

//condition ? exp1 : exp2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "you may enter" : "Access denied";

// answer
// "you may enter"
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "you may enter" : "Access denied";
undefined
// answer
// "Access denied"

var automatedAnswer = 
"your account # is " + ( isUserValid(false) ? "1234" : "not available");

// automatedAnswer
// "your account # is not available"

var automatedAnswer = 
"your account # is " + ( isUserValid(true) ? "1234" : "not available");

// automatedAnswer
// "your account # is 1234"