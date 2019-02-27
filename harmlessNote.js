
function harmlessNote(noteText, magazineText) {
    let magArr = magazineText.split(' ');
    let noteArr = noteText.split(' ');
    let magObj = {};
    
    var noteIsPossible = true;

    magArr.forEach(word => {
        if (!magObj[word])
            magObj[word] = 0;
        
        magObj[word]++;
    });

    noteArr.forEach(word => {        
        if (magObj[word]) {
            magObj[word]--;

            if (magObj[word] < 0)
                noteIsPossible = false;
        }
        else
            noteIsPossible = false;        
    });

    return noteIsPossible;
}

let noteText = 'this is a secret note for you from a secret admirer';
let magText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';

let noteIsPossible = harmlessNote(noteText, magText);
console.log("Is note possible ?", noteIsPossible);