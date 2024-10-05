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