// Functions - Reusable procedures
// Allows us to write reusable, modular code
// Define a chunk of code that we then execute at later point
function funcName(){
    // do something
}
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

// Function Arguments
function greet() {
    console.log(`Hi`);
}

// No input - no arguments
"hello".toUpperCase();
// Different inputs - arguements
"hello".toUpperCase('h'); // 0
// Different outputs - arguments
"hello".indexOf('o'); // 4

function greet(person) {
    console.log(`Hi, ${person}!`);
}

function throwDice(numRolls) { // Added arguemnt numRolls
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
}

// The argument is called a parameter when defining the function, once its run then it's an argument
// Function with multiple parameters
function sum(x,y) {
    console.log(x + y);
} // Run sum(4,5) - gives us 9

// Order is important // doesnt' return a value there is no output
// functions print values out, but do nto return anything - no return
function divide(a,b) {
    console.log(a / b);
}
divide(1,4) // 0.25
divide(4,1) // 4

// Return statment
function add(x,y) {
    return x + y; // Return
}
const sum = add(10, 16);
sum; // 26
const answer = add(100, 200);
answer; // 300

// Return statment ends function execution and specifies the value to be returned by that function
function square(x) {
    return x * x;
    console.log('All Done'); // square(4) gets 16 but does not print out conole log, return statments are finished
}