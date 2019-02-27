function caesarCipher(text, shifts) {

    let textLower = text.toLowerCase();
    
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphaCount = alphabets.length;

    let cipher = '';
    for (var i = 0; i < textLower.length; i++) {
        let alphaIndex = alphabets.indexOf(textLower[i]);

        if (alphaIndex > -1) {
            let newAlphaIndex = alphaIndex + shifts;
             newAlphaIndex = newAlphaIndex % alphaCount;
 
             cipher += alphabets[newAlphaIndex];
         } else {
             cipher += textLower[i];
         }
    }

    return cipher;
}

let plain = "efgfoe uif fbtu xbmm pg uif dbtumf";//"defend the east wall of the castle";

let cipher = caesarCipher(plain, 300);

console.log("Plain : ", plain);
console.log("Cipher: ", cipher);
