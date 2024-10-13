/* String Escapes
    \n - newline
    \' - single quote
    \" - double quote
    \\ - backslash
*/

// 'he said I ain't happy'  // ERROR
'he said I ain\'t happy' // Right way
"hw said \"I ain't happy\"" // Another way

"HELLO\nGOODBYE" // "HELLO (next line) GOODBYE"


// String Template Literals
// back ticks used
`I counted ${3 + 4} sheep`; // "I counted 7 sheep"

`he said 'lol'` // comes back as a string

`${1+5}` // "6" (string)
`You owe me ${100 + 218937}` // "You owe me 219037"
// Has to be used ``. ${} will not work with "" or ''

let username = `Ziggy31`;
`Welcome back, ${username}` // "Welcome back, Ziggy31"
`GAME OVER ${username.toUpperCase()}` // "GAME OVER ZIGGY31"

let animal = "pig";
let sound = "oink";
`${animal} says ${sound.toUpperCase()}` // pig says OINK

// More complex example
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
`You bought ${quantity} ${item}, total price: $${price*quantity}`; // You bought 4 cucumbers, total price: $7.96"

const minAge = 21;
let yourAge = 19;
`You must be ${minAge} or older to enter. Come back in ${minAge = yourAge} years` // "You must be 21 or older to enter. Come back in 2 years"


// Null and Undefined
// Null - Intentional absence of any value, must be assigned
// Undefined - Variables that do not have an assigned value

// No one is logged in yet...
let loggedInUser = null; // Value is explicityly nothing
// A user logs in...
loggedInUser = 'Alan Rickman';


// Math Object - Contains properties and methods for mathematical constants and functions
Math.PI // 3.141592653589793

// Rounding a number:
Math.round(4.9) // 5

// Absolute value:
Math.abs(-456) // 456

// Raises 2 to the 5th power:
Math.pow(2,5) // 32

// Removes decimal:
Math.floor(3.9999) // 3

// Random Numbers - gives a random decimal between 0 and 1
Math.random(); // 0.34234234234234 (random)


// Random Integers - between 1 and 10
const step1 = Math.random(); // 0.5678687678687678
const step2 = step1 * 10 // 5.7689768976987
const step3 = Math.floor(step2); // 5
const step4 = step3 + 1; // 6
Math.floor(Math.random() * 10) + 1;

// Assimulate a die role
Math.random() * 6
Math.floor(Math.random() * 6) // Goes from 0 to 5
Math.floor(Math.random() * 6) + 1 // Now 1 to 6


// parseInt & parseFloat - use to parse strings into numbers, but watch out for NaN
parseInt('24') // 24
parseInt('24.987') // 24
parseInt('28dayslater') // 28

parseFloat('24.987') // 24.987
parseFloat('7') // 7
parseFloat('i ate 3 shramp') //NaN

'21' + 1 // "211"
parseInt('21') + 1 // 22
parseFloat('33.5') // 33.5
parseInt('$99') // NaN because of the $ - same with Float
parseInt('99cents') // 99 (as long as the numbers are first)


// Comparisons
-2 > 1 // false
10 < 99 // True
2 >= 5 // False
2 <= 5 // True

"hello".length >= "hello!".length // False
'a' > 'b' // True
'a' < 'A' // False , uppercase letters are less than lowercase letters
'A' < 'a' // True
'B' < 'a' // True
'#' < '$' // True // Every character has a unicode

== // equality
!= // not equal
=== // strict equality
!== // strict non- equality

== // Checks for equality of value, but not of type. Compares both values. (if they have the same value, true, if not, false) Can lead to unexpected results
4 == 4 // True
false == false // True
0 == '' // True
0 == false // True
null == undefined; // True
7 == '7' // True (Even though they are different values)

=== // Checks for equality of value and type
2 === '2' // False
false === 0 // False
undefined === null // False

let isLoggedIn = false;
isLoggedIn == false // True
isLoggedIn = 0; // 0
isLoggedIn == false // True
isLoggedIn === false // False

// Same applies for != and !==
10 != '10' // False
10 !== '10' // True



