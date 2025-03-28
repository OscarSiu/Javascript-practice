//Help write a function which will calculate the cost of a boat trip to The La Fosse Academy island! Journeys are priced as follow: 

// Journeys up to 5 minutes long have a flat rate cost of £5
// Every minute after the first 5 will cost an extra 80p
// The length of the jounrey is always rounded up to a whole number of minutes 

//The boatFare function should take a number representing the length of a boat journey in seconds, and return a number representing the cost of that jounrey in pence.

//Write your function below here 
function boatFare(seconds) {
    const minutes = Math.ceil(seconds / 60);
    const extraMinutes = Math.max(0, minutes - 5);

    return 500 + (extraMinutes * 80);
}

//Examples are below
console.log(boatFare(300))
// should return 500

console.log(boatFare(560))
// should return 900

console.log(boatFare(682))
//should return 1060