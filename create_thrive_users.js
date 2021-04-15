const fs = require('fs');
const readline = require('readline');
const https = require('https');

const readInterface = readline.createInterface({
    input: fs.createReadStream('/Users/andela/Downloads/linc-opt-ins.csv')
});

let counter = 0;

readInterface.on('line', (line) => {
    counter++;
    if (counter == 1) { // Skip title line
        return;
    }

    let custData = line.split(',');
    let name = custData[0].split(' ');
    const data = JSON.stringify({
        email: custData[1].trim(),
        password: 'password123',
        firstname: name[0].trim(),
        lastname: name[1] ? name[1].trim() : ''
    });
    
    postData(data);
})

readInterface.on('close', () => {
    console.log(`Total records: ${counter}`);
})

async function postData(data) {
    const options = {
        hostname: 'mage-mok-30439-api-dqa.thrivemarketqa.com',
        port: 443,
        path: '/account',
        method: 'POST',
        rejectUnauthorized: false,
        timeout: 60000,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
    }

    const req = https.request(options, res => {
        // console.log(`statusCode: ${res.statusCode}`)
        // console.log(`statusMessage: ${res.statusMessage}`)
            
        // res.on('data', d => {                    
        //   process.stdout.write(d)      
        // })
    })
      
    req.setTimeout(60000, () => {
        req.destroy();
    });

    req.on('error', error => {
        console.error(error)
    })
      
    req.write(data)
    req.end()
}
