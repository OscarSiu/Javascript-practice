// Create a function that takes a string and returns the number (count) of vowels contained within it.
function count_vowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(count_vowels("Celebration")) // 5

console.log(count_vowels("Palm")); // 1

console.log(count_vowels("Prediction")) // 4