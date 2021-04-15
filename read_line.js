const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('test.txt'),
    // output: process.stdout,
    console: false
});

var i = 0;
readInterface.on('line', (line) => {
    i++;
    console.log(`Line ${i}`)
    console.log(line);    
})