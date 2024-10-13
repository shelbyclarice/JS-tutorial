/* Primitive Types
    Number
    String
    Boolean
    Null
    Undefined
    Symbol
    BigInt
*/

// Variables

// let
let someName = value;
let age = 72;

let hens = 4;
let roosters = 2;
hens + roosters // 6

let hens = 4;
hens - 1; // 3
hens; // still 4
// To actually change hens:
hens = hens - 1;
hens; // 3

// Another way of saying hens = hens -1;
hens -= 1;
hens +- 1; // + 1

let mult = 3;
hens *= mult;

// Unary Operator
let counter = 0;
counter++; // Adds 1 // counter--; Minus 1


// const - cannot change the value of constant
const age = 17;
age = age +1; // ERROR

// Examples
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;


// Booleans - True or False - Yes or No - 1 or 0
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

// Varaibles can change type - Typescript has a rule that doesn't allow variables to change type
let numDonuts = 12; // Number
numDonuts = false; // Now it's a Boolean
numDonuts = 1234434534; // Back to number


// Strings - wrap in ""
typeof "87" // Will tell the type which would come out "string"
typeof 87 // It's a "number"

let firstName = "Ziggy"
firstName // "Ziggy"

let lastName = "Canaryface"
firstName + lastName // "ZiggyCanaryface"
firstName + " " + lastName // "Ziggy Canaryface"
let fullName = firstName + " " + lastName
fullName // "Ziggy Canaryface"

"hi" + 1 // "hi1" 1 gets turned into a string


// Strings are Indexed
// Each character has a corresponding index (positional number)
// CHICKEN has 7 characters 0-6

"hello".length // 5 - includes spaces

let mySong = "Surfin' USA"
mySong.length // 11 (0-10)

mySong[0] // "S"
mySong[1] // "u"
mySong[2] // "r"
mySong[11] // undefined

let gibberish = 'dfssdfsdfsdfsdf'
gibberish[gibberish.length - 1] // "f" the last character

mySong[0] = "D" // If want to change S to D
mySong "Surfin' USA" // Cannot do that in a string, still S


// Sting Methods - actions that can be peformed on or with that particular string
// Searching within a string, Replacing parts of a string, Changing case
thing.method()

let msg = "your grounded"
msg.toUpperCase() // "YOUR GROUNDED"
msg // "your grounded"
msg = msg.toUpperCase()
msg // "YOUR GROUNDED"

// trim = removes spaces
let greeting = '   leave me alone    ';
greeting.trim() // 'leave me alone'
greeting.trim().toUpperCase() // "LEAVE ME ALONE"


thing.method(arg) // Some methods accept arguments that modify behavior

// indexOf - where in a string a string occurs a sub string
let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0 (starts at index 0)
tvShow.indexOf('dog'); // 3 (starts at index 3)
tvShow.indexOf('z'); // -1 (not found)

"baseball".indexOf("ball") // 4
"baseball".indexOf("entertaining") // -1 (not found)


// Slice Method - takes slices of an existing string - not changing the variable
let str = 'supercalifragilisticexpialidocious'
str.slice(0,5); // 'super' (start,end)
str.slice(5); // 'califragilisticexpialidocious'

'$50.60'.slice(1) // "50.60"


// replace - what you want to replace what string
let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha') // 'haha so funny! teehee!' (Only replaces the first instance)

'ha ha ha'.replace('ha', 'hee') // "hee ha ha" (Replaces only the first ha)


// Questions and Answers

// What is the value of age
const age = "5" + "4";
age // "54"

// What does this evaluate to
"pecan pie"[7] // "i"

"PUP"[3] // undefined

// The value of song
let song = "london calling";
song.toUpperCase(); // "LONDON CALLING"
song // "london calling" // song is unaltered

// Value of cleanedInput
let userInput = "  TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
cleanedInput // "todd@gmail.com"
userInput // "  TODD@gmail.com" (unchanged)

// Value of index
let park = 'Yellowstone';
const index = park.indexOf('Stone');
index // -1 (doesn't find that value)

let yell = 'GO AWAY!!';
let index = yell.indexOf('!');
index // 7

// What does this evaluate to
'GARBAGE!'.slice(2).replace("B",''); // "RAGE!"


