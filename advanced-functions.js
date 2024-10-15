// Advanced Functions
// Scope

// Scope - Variable "visibility" (The location where a variable is defined dictates where we have access to that variable)

// Function scope - msg is scoped to the helpMe function
function helpMe() {
    let msg = "I'm on fire!";

    msg; // "I'm on fire!";
}
msg; // Not Defined!

// Two different scopes
function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
}
function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
}
// We can call the function but cannot access or manipulate those variables
lol();
changeColor();

// Can't declare two variables of same name but can in this case
let bird = 'mandarin duck';

function birdWatch() {
    let bird = 'golden pheasant'; // bird is scoped to birdWatch function
    console.log(bird); // 'golden pheasant'
}
birdWatch();
console.log(bird); // 'mandarin duck'

// Block scope
let radius = 8;
// PI & circ are scoped to the BLOCK
if (radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
console.log(radius); // 8
console.log(PI); // Not Defined
console.log(circ); // Not Defined

// animal is scoped to the block
if (true) {
    let animal = 'eel'; // same outcome with const
    console.log(animal); // 'eel'
}
console.log(animal); // Not Defined

// No block scope for var, var only in function scope
if (true) {
    var animal = 'eel';
    console.log(animal); // 'eel'
}
console.log(animal); // 'eel'

// Common problem with using var with no block scope
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
i = 10;
for(var i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
console.log(i);


function doubleArr(arr) {
    const result = [];
    for(let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;
}
doubleArr([1,2,3]) // [2,4,6]

// Lexical Scope
function outer() {
    let hero = "Black Panther";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);
    }
    inner();
}

function outer() {
    let movie = 'Amadeus';

    function inner() {
        console.log(movie.toUpperCase())
    }
    inner();
}
outer() // AMADEUS

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = "The Shining"
        console.log(movie.toUpperCase())
    }
    inner();
}
outer() // THE SHINING

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = "The Shining"

        function extraInner() { // Nothing declared in extraInner() so it looks up to The Shining
            console.log(movie.toUpperCase())
        }
        extraInner();
    }
    inner();
}
outer() // THE SHINING

// More realistic example
function TodoList() {
    let todos = [];
    let username ='';
    function addTodo() {

    }
    function removeTodo(){

    }
}

// Function Expressions - stored in a variable but haven't provided a name for the function
const square = function (num) {
    return num * num;
}
square(7); // 49

// Two different syntaxes
function add(x,y) {
    return x + y;
}

// anonymous function
const sum = function (x,y) {
    return x + y;
}
add (4,5) // 9
sum(9,3) // 12

// Type in console - console.dir(add) - will have the object typed out

// Named function
const product = function multiply(x,y) {
    return x * y;
}
product(3,5) // 15
multiply(3,5) // Not Defined


// Functions are objects
function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}
// array
const operations = [add, subtract, multiply, divide];

operations[1] // (x, y) { return x - y; }
operations[1](100,4) // 96
operations[2](100,4) // 400

// Run 4 functions with this loop
for(let func of operations) {
    let result = func(30,5);
    console.log(result); // 35 // 25 // 150 // 6
}

// Adding a function to an object, we have a method
const thing = {
    doSomething: multiply
}
thing.doSomething(50,2) // 100


// Higher Order Functions