// Data Structures: Arrays & Objects - Collection of data
// Arrays - Ordered collections of values
// Ex) list of comments on IG post, collection of levels in game, songs in playlist

let shoppingList = ['ice', 'cheese', 'cereal'];
let lotto = [ 45, 12, 23, 25, 34 ];

// Arrays are Indexed
let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.length // 7
colors[0] // "red"
colors[7] // undefined
colors[colors.length-1] // "violet"

// Modifying Arrays - wanting to change a value in the array
let shopList = [ 'Cheddar Cheese', '2% Milk' ];
shopList[1] = 'Whole Milk';
shopList // ["Cheddar Cheese", "Whole Milk"]

// Add something to the end
shopList[2] = 'Ice Cream';
shopList // ["Cheddar Cheese", "Whole Milk", "Ice Cream"]
// If don't know how long the list is, this can be acheived the same way. Adds at the end of the list.
shopList[shopList.length] = 'Tomatoes';

// Array Methods
    // Push - add to end
    // Pop - remove from end
    // Shift - remove from start
    // Unshift - add to start

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

topSongs.push('Fortunate Son');
topSongs.push(true);

topSongs.pop();
const nextSong = topSongs.pop()
nextSong // "Fortunate Son"
topSongs // "First Time Ever I Saw Your Face", "God Only Knows", "A Day In The Life", "Life On Mars"

let dishesToDo = ['big platter'] // undefined
dishesToDo.unshift('large plate') // 2
dishesToDo.unshift('small plate') // 3
dishesToDo // ["small plate", "large plate", "big platter"]
dishesToDo.unshift('mug') // ["mug", "small plate", "large plate", "big platter"]

// Doing the dishes now
dishesToDo.shift() // "mug"
dishesToDo // ["small plate", "large plate", "big platter"]

/*  More Methods
Concat - merge arrays
includes - look for a value
indexOf - just like str.indexOf
join - creates a string from arr
reverse - reverses an array!
slice - copy portion of an arr
splice - remove/replace elements
sort - sorts an array */

// Concat - merge arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];

console.log(array1.concat(array2)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(array2.concat(array1)); // ['d', 'e', 'f', 'a', 'b', 'c']

let allLetters = array3.concat(array2, array1);
allLetters // ['g', 'h', 'i', 'd', 'e', 'f', 'a', 'b', 'c']


// includes - look for a value (Looking for an exact match)
let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];
ingredients.includes('fish') // false
ingredients.includes('shrimp') // true
ingredients.includes('water', 0) // true
ingredients.includes('water', 3) // false

if(ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT');
}

// indexOf - just like str.indexOf
ingredients.indexOf('ell') // 6
ingredients.indexOf('maple syrup') // -1
ingredients.indexOf('cheese', 5) // -1
ingredients.indexOf('cheese', 2) // 3

// slice - copy portion of an arr
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

// includes 0 and 1. Goes below the second number.
let swimmers = animals.slice(0, 2);
swimmers // ["shark", "salmon"]

let mammals = animals.slice(2, 4); 
mammals // ["whale", "bear"]

// let reptiles = animals.slice(4, 6);
// this also works
let reptiles = animals.slice(4); // ["lizard", "tortoise"]

// negative numbers go backwards
let quadruped = animals.slice(-3, -1); 
quadruped // ["bear", "lizard"]

// splice - remove/replace elements
animals.splice(1,0,'octopus'); // 1 - starts at salmon, 0 - how many remove, put in octopus
// [ 'shark', 'octopus', 'salmon', 'whate', 'bear', 'lizard', 'tortoise' ]

animals.splice(3,2) // ["whale", "bear"]
animals // [ 'shark', 'octopus', 'salmon', 'lizard', 'tortoise' ]

animals.splice(3,0,'snake', 'frog');
animals // [ 'shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise' ]

// sort - sorts an array
let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
people.sort()
people // [ 'Angie', 'Jolene', 'Maggie May', 'Mrs. Robsinson', 'Roxanne' ]

let nums = [ 34, 10, 100000, 67, 99 ];
nums.sort() // [ 34, 10, 100000, 67, 99 ] // Only works on strings and not num values


// Value Type Variable
let fruit = "orange";
let color = fruit;
color // "orange"
fruit // "orange"
fruit = "watermelon"
fruit // "watermelon"
color // "orange"

// Const & Arrays - arrays are not the content that is stored in the slot in memory for each variable
// Values can change as long as the reference remains the same
const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green';

// Cannot do this
myEggs = ['blue', 'pink'];

// Nested Arrays - can store arrays inside other arrays
const colorTypes = [
    ['red', 'crimson'],
    ['orange', 'dark orange']
];
colorTypes[0] // ['red', 'crimson']
colorTypes[0][1] // ['crimson']

// Change
colorTypes[0][1] = 'maroon';
colorTypes // ['red', 'maroon', 'orange', 'dark orange']

// Realistic Example - two dimentional array
// Tic Tac Toe
const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
]

// Three dimentional array
const colorTypes = [
    ['red', ['crimson', 'maroon']],
    ['orange', 'dark orange']
];
colorTypes[0][1][1] // "maroon"






