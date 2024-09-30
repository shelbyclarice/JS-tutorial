// Objects - store data where we can associate things and group pieces of data together
// Objects are collections of properties, key-value pair, rather than accessing data using index, we can use custom keys
// Ex) Disctionary, not necessarily in order like arrays
const fitBitData = {
    // Property : Key,
    totalSteps : 308727,
    totalMiles: 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13'
};

// Property = key + Value
// key value pairs ex) username: -> 'crazyCatLady'
fitBitData.totalMiles // 211.7
// Valid Keys - all keys are converted to strings except symbols

// Accessing Data
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

palette.red // "#eb4d4b"
palette['blue'] //#30336b

let color = 'yellow';
palette[color] // "#f9ca24"

// Updating Properties:
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.totalMiles += 7.5;

// Adding a New Property:
fitBitData.heartStillBeating = true;

// Another Example
const userReviews = {};
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5; // Both will add the property

userReviews['queenBee49'] += 2; // {queenBee49: 6}
userReviews.mrSmith78++; // {mrSmith78: 4.5}


// Arrays + Objects - both reference types
// Have an array and each element is an object
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 1,
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
]

// Object called student
const student = {
    firstName: 'David',
    lastName: 'Jones',
    // Strengths property set to an array
    strengths: ['Music', 'Art'],
    // exams key and the value is another object
    exams: {
        midterm: 92,
        final: 88
    }
}
// Taking exam scores, adding them together then divide by 2
const avg = (student.exams.midterm + student.exams.final) / 2;

// Tic Tac Toe
const game = {
    player1: {
        username: 'Blue', 
        playingAs: 'X',
    },
    player2: {
        userName: 'Muffins',
        playingAs: 'O',
    },
    board: [
        ['O', null, 'X'],
        [null, 'X', 'O'],
        ['X', 'O', null]
    ]
};

// Equality of Array - cannot easily compare values in arrays if were looking for equality
// === will check equality of reference, not the qulity of contents
const user = {
    username: 'Cherry8',
    email: 'garcia@gmail.com',
    notifications: ['message', 'alert']
};
if (!user.notifications.length) {
    console.log('NO NEW NOTIFICATIONS');
}