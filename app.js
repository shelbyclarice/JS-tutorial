alert("Hello World")

// Console log - often used for debugging
console.log(3 + 4);
console.error('OH NOO!!!'); // Shows up as an error in console log
console.log(3 + 4, 'hello', true);


// Conditionals - Making decisions with code

// if - run code if a given condition is true

let num = 37;
if(num % 2 !== 0) {
    console.log('ODD NUMBER');
} // % modulo

// else if - if not this first thing, but maybe the other thing
let rating = 2;
if(rating === 3) {
    console.log("YOUR A SUPERSTAR");
}
else if(rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
else if(rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
// else - if nothing else was true, do this
else {
    console.log("INVALID RATING");
}

// Another Example
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
    );
}


// Nesting - nest conditionals inside conditionals
let password = "cat dog";
if (password.length >= 6) {
    // if space is not equal to -1, means there are no spaces
    if (password.indexOf(' ') !== -1) {
        console.log("Password is long enough but cannot include spaces");
    }
    else {
        console.log("Valid password!!")
    }
}
else {
    console.log("Password too short!")
}

// Truthy and Falsy values
let mystery = 5; // Truthy - let mystery = 0/NaN/""/undefined/null - Falsy;

if(mystery){
    console.log('TRUTHY');
}
else {
    console.log('FALSY');
}

// Real Example of truthy and falsy
let loggedInUser = "password" // or if empty string then false

if(loggedInUser){
    console.log("YOU ARE LOGGED IN!");
}
else{
    console.log("PLEASE LOG IN!");
}


// Logical Operator - && (and), || (or), and ! (not)
// && - both sides must be true in order for the whole thing to be true
1 <= 4 && 'a' === 'a'; // True
'abc'.length === 3 && 1+1 === 4; // False

// Using password example from above
let password = "cat dog";

if(password.length >= 8 && password.indexOf(' ') === -1) {
    console.log('VALID PASSWORD');
}
else {
    console.log('INVALID PASSWORD');
}


let num = 3;

if(num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10');
}
else{
    console.log('Please guess a number between 1 and 10');
}

// || - only one side needs to be true
10/2 === 5 || null // True

// Real Example
let age = 76;

if(age < 6 || age >= 65) {
    console.log("Your get in for free");
}
else {
    console.log("You must pay");
}

// Another Example
let color = "";
if(color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('Great Choice');
}
else {
    console.log('Not a Great Choice');
}

// ! - !expression returns true if hte expression is false
!null // True
! (0 === 0) // False
!(3 <= 4) // False

let loggedInPerson;
// If there isn't a logged in person
if(!loggedInPerson){
    console.log('GET OUT OF HERE');
}

let flavor = "watermelon";

if(flavor !== 'grape' && flavor !== 'cherry') {
    console.log('We don\'t have that flavor');
}

// Another way to code the same thing with !
if(!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('We don\'t have that flavor');
}

// && takes precedence over || and ! takes precedence over all, unless use ()
let x = 7;
x = 7 || x === 3 && x > 10; // True - second part is false

/*
// Switch Statment - not as common as if else
let day = 3;

// else if for each day
if( day === 1){
    console.log("MONDAY");
}
else if (day === 2) {
    console.log("TUESDAY");
}
else {
    console.log("INVALID DAY");
} */


// switch statment
    let day = 4; // THURSDAY FRIDAY SATURDAY SUNDAY
// Easier way to write the days of week instead of a bunch of else if
switch(day){
    case 1:
        console.log("MONDAY");
    case 2:
        console.log("TUESDAY");
    case 3:
        console.log("WEDNESDAY");
    case 4:
        console.log("THURSDAY");
        break; // Prevents from the console looking below 
    case 5:
        console.log("FRIDAY");
    case 6:
        console.log("SATURDAY");
    case 7:
        console.log("SUNDAY");
    default: // instead of using else
        console.log("INVALID DAY");
}

let emoji = 'happy face';

switch (emoji) {
    // take out console log for happy face if it's the same as sad face
    case 'happy face':
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}