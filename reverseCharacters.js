function reverseWords(sentence) {
    let charArray = sentence.split('');    
    let reversed = [];

    for (var i = charArray.length-1; i >= 0; i--) {
        reversed.push(charArray[i]);
    } 

    return reversed.join('').trim();
}

let sentence = "this is a string of words";
let reversed = reverseWords(sentence);

console.log("Original: ", sentence);
console.log("Reversed: ", reversed);