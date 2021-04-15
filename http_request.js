const https = require('https')
const http = require('http')

// https.post('https://thrivemarket.loc/account/register')

// const data = "username=JACQUELYNKASNER@gmail.com&password=password123"
const data = JSON.stringify({
    email: 'JACQUELYNKASNER@gmail.com',
    password: 'password123',
    firstname: 'Jacquie',
    lastname: 'Kasner'
})
  
  const options = {
    hostname: 'api.thrivemarket.loc',
    port: 443,
    path: '/account',
    method: 'POST',
    rejectUnauthorized: false,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
  
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(`statusMessage: ${res.statusMessage}`)

    let respData = '';

    res.on('data', d => {        
        respData += d;
      process.stdout.write(d)      
    })

    // res.on('end', () => {
    //     console.log('Response data:')
    //     console.log(respData)
    // })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.write(data)
  req.end()