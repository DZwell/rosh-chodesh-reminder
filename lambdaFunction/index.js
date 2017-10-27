const AWS = require('aws-sdk');
const sunsetTime = require('../scripts/zmanim');

const cronObject = sunsetTime((data) => {
    console.log(data.year);
});




console.log(cronObject);

// exports.handler = (event, context) => {
//     const cloudwatchevents = new AWS.CloudWatchEvents();

//     const scheduleExpression = `cron(${sunset.minutes})`;
//     const params = {
//         Name: "YOUR CLOUDWATCH EVENT RULE NAME",
//         ScheduleExpression: scheduleExpression
//     };
//     cloudwatchevents.putRule(params, (err, data) => {
//         if (err) {
//             console.log(err, err.stack);  
//         }
//         else {
//             console.log(data);
//         }
//     })
// };