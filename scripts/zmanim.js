const request = require('request');
const twilioClient = require('../twilioClient/twilioClient');

const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&month=8&maj=on&min=on';
const sunsetUrl = 'https://api.sunrise-sunset.org/json?lat=47.608013&lng=-122.335167'

request.get(hebCalUrl, (err, res, body) => {
    const jsonBody = JSON.parse(body);
    
    jsonBody.items.forEach((item) => {
        if (item.category === 'roshchodesh') {
            twilioClient.sendSms('6142600160', 'hey now');
        }
    });
    // sunsetTime();
    
});

const sunsetTime = () => request.get(sunsetUrl, (err, res, body) => {
    const jsonBody = JSON.parse(body);
    let sunset = jsonBody.results.sunset;
    console.log(sunset);
    // formatSunsetTime(sunset);
});

// sunset comes back as a UTC string like '3:09:47 AM'
// Need to do some formatting
function formatSunsetTime(time) {
    const dateArray = new Date().toISOString().split('T');
    const timeArray = dateArray[1].split('.');
    timeArray[0] = time.split(' ')[0];
    // console.log(timeArray);


}



