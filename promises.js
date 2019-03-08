const fetch = require('node-fetch') // only when running in Node.js

const getUserRepos = () =>
 fetch('https://api.github.com/users/nearform/repos')
const timeout = delay =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('request timeout')), delay)
  })
  
Promise.race([getUserRepos(), timeout(300)])
  .then(repos => console.log(repos))
  .catch(e => console.error(e))