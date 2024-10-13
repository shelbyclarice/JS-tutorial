// Challenge 3

// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphavet. Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') // true
// isPangram('The five boxing wizards jump quick') // false

function isPangram(sentence) {
    // Allows for letters to work whether its upper or lower case
    let lowerCased = sentence.toLowerCase();

for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(sentence.indexOf(char) === -1) {
        return false;
    }
}
return true;
}

// Using includes (a newer method not supported in ie) instead of indexOf
function isPangram(sentence) {
    // Allows for letters to work whether its upper or lower case
    let lowerCased = sentence.toLowerCase();
    
for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(!lowerCased.includes(char)) {
        return false;
    }
}
return true;
}