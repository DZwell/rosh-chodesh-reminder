// const request = require('request');
const axios = require('axios');
const moment = require('moment-timezone');
const twilioClient = require('../twilioClient/twilioClient');
const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on';
const sunsetUrl = 'https://api.sunrise-sunset.org/json?lat=47.608013&lng=-122.335167&formatted=0';
const myNumber = process.env.MY_NUMBER;
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Grab just the date

// request.get(hebCalUrl, (err, res, body) => {
//     const jsonBody = JSON.parse(body);

//     jsonBody.items.forEach((item) => {
//         if (item.category === 'roshchodesh') {
//             const roshChodeshDate = item.date;
//             const hewbrewMonth = item.title.split(' ')[2];
//             if (item.date === tomorrow) {
//                 twilioClient.sendSms(myNumber, `Tonight is Rosh Chodesh ${hewbrewMonth}`);
//             }
//         }
//     });
//     // sunsetTime();
// });

function buildCronJobObject(time) {
    const dateArray = time.split('T')[0].split('-');
    const timeArray = time.split('T')[1].split(':');
    const cronObject = {
        year: dateArray[0],
        month: dateArray[1],
        day: dateArray[2],
        hour: timeArray[0],
        minute: timeArray[1]
    };

    return cronObject;
}

// const sunsetTime = () => {
//     request.get(sunsetUrl, (err, res, body) => {
//         if (err) {
//             return err;
//         }
//         const jsonBody = JSON.parse(body);
//         let sunset = jsonBody.results.sunset;
//         const pstSunset = moment.tz(sunset, 'America/Los_Angeles').format();
//         return buildCronJobObject(pstSunset);
//     }).then();
// };

const sunsetTime = () => {
    axios.get(sunsetUrl)
        .then(response => {
            console.log(response.data.results.sunset);
        }).catch(error => {
            console.log(error);
        });
};

// sunsetTime();

module.exports = sunsetTime();


