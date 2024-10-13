// Challenge 4

// Write a getCard() function which returns a random playing card object, like:
//      {
//      value: 'K' 
//      suit: 'clubs'
//      }
// Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
//----clubs,spades,hearts,diamonds
// Return both in an object

// Another way is to have a seperate function for picking an array randomly
function pick(arr){
    // return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    // Array
    const values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ];
    // const valIdx = Math.floor(Math.random() * values.length);
    // const value = values[valIdx]; // giving a variable instead of return
    // return values[idx] // returns the string value and adding variable to it
    // return idx; // Gets random number from 0 to 13 (13 strings)

    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
    // const suitInd = Math.floor(Math.random() * suits.length);
    // const suit = suits[suitInd];
    // return { value: value, suit: suit}; // key: result
    return { value: pick(values), suit: pick(suits) }; // pluralize value and suit
}
getCard() // random value and random suit EX) {value: "2", suit: "diamonds"}

