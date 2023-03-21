const sentence = "Its a beautiful day here in GoMyCode.";

// numbers of characters 
let numOfCharacter = sentence.length;
console.log("number of characters is ", numOfCharacter);


// numbers of words
let words = sentence.split(" ").length;
console.log("number of words is ", words);


// numbers of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowles(sentence) {
    let count = 0;

    for (x of sentence) {
        if (vowels.includes(x)) {
            count++;
        }
    }
    return count;
}

const numbersOfVowels = countVowles(sentence);

console.log("vowels is ", numbersOfVowels);