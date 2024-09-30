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