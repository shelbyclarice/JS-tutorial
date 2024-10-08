// Loops - Repeating Code
// "Print 'hello' 10 times"
// Sum all numbers in an array

// Types: for loop, while loop, for...of loop, for...in loop.

// For Loops
for (
    [initialExpression];
    [condition];
    [incrementExpression]
);

// Condition statment
if(){

};

// For loop runs the same pattern
for(){

};

// Define a variable // i = initial value for a variable
// 1st step // 1 is where it starts
// 2nd step // i <= 10 - When this loop should continue running for 
// 3rd step // tell it how to update i each time through loop, i++ - want to loop one number at a time
// could also do i += 3 - this would loop by 3's
for(let i = 1; i <= 10; i++){
    // console.log('Hello'); // displays only once on console
    console.log('Hello:', i); // Actually displays on each line
}

// start at 1 // stop at 10 // add 1 each time
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Perfect Square (number times itself) // i is common but can use others like num
for (let num = 1; num <= 20; nun++){
    console.log(`${num}x${num} = ${num * num}`); // in log each number 1- 20 multiplys by itself
}

// Can go in oppostie direction
// start i at 50 // subtract 10 each iteration // keep going as long as i >= 0
for (let i = 50; i >= 0; i -= 10) {
    console.log(i);
} // 50 // 40 // 30 // 20 // 10 // 0

// Infinite Loop - where the condition is never met
// Browser does not like it
for (let i = 20; i <= 0; i++) {
    console.log(i);
} // i will always be greater than 0 therefore, it keeps going 

for(let i = 1; i !== 20; i += 2) {
    console.log(i);
} // There will always be a number that is not equal to 20, therefore it keeps going

// For loops + Arrays - To loop over an array, start at 0 and continue to the last index (length-1)
const animals = [ 'lions', 'tigers', 'bears' ];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
} // 0 'lions' // 1 'tigers' // 2 'bears'

// While Loops (continues to run as long as its test condition is true)
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
} // get 0 - 9

// prefers a for loop in this situation so that you don't have to seperate, better practice when you don't have to create a seperate variable outside of a loop
for(let i = 0; i<=5; i++){
    console.log(i)
} // get 0 - 5
// Turning the above to a while loop
let j = 0;
while(j <= 5){
    console.log(j);
    j++;
} // 0 - 5, same output

// Benefit of a while loop is not knowing how long it's going to run
// Ex) chess game - continues until there is a game over
const target = Math.floor(Math.random() * 10); // Math.random() - Gives a random number between 0 and 1 // Math.floor() rounds a number down to the nearest integer
let guess = Math.floor(Math.random() * 10);
while(guess !== target){
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`); // there is a target number, a random number is generated and will show the Target number and the Guess number. Will run until the numbers match, then the while(guess !== target) will be false

// while(some condition)
// in the loop, update or attempt to make that condition false

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break; // Will stop running once it reaches 5 // Uncommon in for loops
    }
}
// More common in while loops, good to break out of an infinite loop
while (true) {
    if (target === guess) break; // will stop once target equals guess
}

// For...Of (Iterating over arrays)
for (variable of iterable) {
    statment
}

let subreddits = [ 'soccor', 'popheads', 'cringe', 'books' ];
// For loop
for(let i = 0; i < subreddits.length; i++){
    console.log(subreddits[i]);
}
// Changing it to for..up
for(let sub of subreddits){ // sub = sub elements
    console.log(sub);
}

for (let char of 'cockadoodledoo'){ // char = character
    console.log(char.toUpperCase());
}

// 2D Array
const magicSquare = [
    [ 2, ,7 ,6 ],
    [ 9, 5, 1 ],
    [4, 3, 8 ]
];

// For Loop
for(let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i];
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]); // Will start over at 0 for each row when collecting the sum
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
} // Gets sum number of each row

// For of Loop - code looks more clean used to advantage
for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// Example of when its better to use a for loop than an for up - because we need to know which index were accessing
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

// For Loop
for(let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`);
} // mailbox // milkshake // bathtub // blackberry

// Looping or iterating over objects
const movieReviews = {
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8,
    'In Bruges' : 9,
    Amadeus : 10,
    'Kill Bill' : 8,
    'Little miss Sunshine' : 8.5,
    Coraline : 7.5
};

Object.keys(movieReviews) // [Movies]
Object.values(movieReviews) // [Rating numbers]

// For of - isolating the values
for (let movie of Object.keys(movieReviews)) {
    console.log(movie); // Each movie on there own line
}

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]); // Each movie  and rating on there own line
}

const rating = Object.values(movieReviews);
let total = 0;
for(let r of ratings){
    total += r;
}
let avg = total/ratings.length; // Total is equal to total divided by rating style length
console.log(avg);

// For in = loop over the keys in an object (Order not set in stone)
// Objects = can loop the keys of an object, using Object.keys()
for (variable in object) {
    statment
}

const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    balleOfTheDecades : 100000
};

// for in wants an object, if use for of then get an error
for(let prop in jeopardyWinning) {
    console.log(prop); // prints out the names
    console.log(jeopardyWinnings[prop]); // prints out the numbers 
}

// Total earnings
let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${total}`); 

// Array - not useful for for in loops compared to for of loops
for(let k in [88,99,77,66]){
    console.log(k); // 0 // 1 // 2 // 3
}