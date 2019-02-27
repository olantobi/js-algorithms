function reverseWords(sentence) {
    let wordArray = sentence.split(' ');    
    let reversed = [];

    for (var i = wordArray.length-1; i >= 0; i--) {
        reversed.push(wordArray[i]);
    } 

    return reversed.join(' ').trim();
}

let sentence = "This is a new day";
let reversed = reverseWords(sentence);

console.log("Original: ", sentence);
console.log("Reversed: ", reversed);