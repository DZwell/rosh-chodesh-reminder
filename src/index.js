const fs = require('fs');
const authorize = require('./auth').authorize;
const submitEvent = require('./events').submitEvent;

function startup() {
  fs.readFile('./creds/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse(content), submitEvent);
  });
}

startup();
