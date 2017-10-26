const AWS = require('aws-sdk');
const sunsetTime = require('../scripts/zmanim');

console.log(typeof sunsetTime);

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