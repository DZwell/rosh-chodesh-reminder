const request = require('request');
const axios = require('axios');
const moment = require('moment-timezone');
const twilioClient = require('../twilioClient/twilioClient');
const lambda = require('../lambdaFunction/index');
const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on';


request.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', (err, res, body) => {
    console.log(body);
});
// request.get(hebCalUrl, (err, res, body) => {
//     const jsonBody = JSON.parse(body);

//     jsonBody.items.forEach((item) => {
//         if (item.category === 'roshchodesh') {
//             const roshChodeshDate = item.date;
//             const hewbrewMonth = item.title.split(' ')[2];
//             console.log(roshChodeshDate, hewbrewMonth);
//             if (item.date === tomorrow) {
//                 // twilioClient.sendSms(myNumber, `Tonight is Rosh Chodesh ${hewbrewMonth}`);
//             }
//         }
//     });
//     // sunsetTime();
// });

// function buildCronJobObject(time) {
//     const dateArray = time.split('T')[0].split('-');
//     const timeArray = time.split('T')[1].split(':');
//     const cronObject = {
//         year: dateArray[0],
//         month: dateArray[1],
//         day: dateArray[2],
//         hour: timeArray[0],
//         minute: timeArray[1]
//     };

//     return cronObject;
// }

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

// const sunsetTime = module.exports = () => {
//     axios.get(sunsetUrl)
//         .then(response => {
//             const time = response.data.results.sunset;
//             return buildCronJobObject(time);
//         }).catch(error => {
//             console.log(error);
//         });
// };

// lambda();

// sunsetTime();

// module.exports = sunsetTime();


