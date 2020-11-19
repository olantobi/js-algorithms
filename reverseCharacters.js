function reverseWords(sentence) {
    let reversed = [];

    for (let i = sentence.length-1; i >= 0; i--) {
        reversed.push(sentence[i]);
    } 

    return reversed.join('');
}

let sentence = "this is a string of words";
let reversed = reverseWords(sentence);

console.log("Original: ", sentence);
console.log("Reversed: ", reversed);