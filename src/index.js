const fs = require('fs');
const axios = require('axios');
const authorize = require('./auth').authorize;
const submitEvent = require('./events').submitEvent;
const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on';
const monthsMap = {};

axios.get(hebCalUrl)
.then((res) => {
  res.data.items.forEach((item) => {
    if (item.category === 'roshchodesh') {
      const roshChodeshDate = item.date;
      const hebrewMonth = item.title.split(' ')[2];
      if (monthsMap[hebrewMonth]) {
        monthsMap[hebrewMonth].push(roshChodeshDate);
      } else {
        monthsMap[hebrewMonth] = [roshChodeshDate];
      }
    }
  });

});

function startup(events) {
  fs.readFile('./creds/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse(content), submitEvent);
  });
}

getRoshChodeshim()
  .then(res => {
    console.log(res);
  });