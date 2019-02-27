function isPalindrome(text) {
    text = text.toLowerCase();
    var textChars = text.split('');

    let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];

    textChars.forEach(char => {
        if (validChars.indexOf(char) > -1)
            lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else 
        return false;

}

let isPal = isPalindrome("oluwatobi");

console.log("Is palindrome? ", isPal);