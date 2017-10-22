const AWS = require('aws-sdk');
const sunset = require('../scripts/zmanim').sunsetTime;

exports.handler = (event, context) => {
    const cloudwatchevents = new AWS.CloudWatchEvents();
    const intervals = Array(3, 5, 7);
    const nextInterval = intervals[Math.floor(Math.random()*intervals.length)];
    const currentTime = new Date().getTime(); // UTC Time
    const nextTime = dateAdd(currentTime, "minute", nextInterval);

    const scheduleExpression = "cron(" + nextMinutes + " " + nextHours + " * * ? *)";
    const params = {
        Name: "YOUR CLOUDWATCH EVENT RULE NAME",
        ScheduleExpression: scheduleExpression
    };
    cloudwatchevents.putRule(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);  
        }
        else {
            console.log(data);
        }
    })
};