// Original String
const str = "MY NAME IS SUMAN DAS";

// Reverse each word of the string
let reversedStr = str.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');

// Print the reversed string
console.log(reversedStr);