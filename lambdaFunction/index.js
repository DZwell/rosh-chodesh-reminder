const AWS = require('aws-sdk');
// const sunsetTime = require('../scripts/zmanim');

exports.handler = (event, time) => {
    console.log('yooooo');
    // const cloudwatchevents = new AWS.CloudWatchEvents();

    // const scheduleExpression = `cron(${time.minutes})`;
    // const params = {
    //     Name: "YOUR CLOUDWATCH EVENT RULE NAME",
    //     ScheduleExpression: scheduleExpression
    // };
    // cloudwatchevents.putRule(params, (err, data) => {
    //     if (err) {
    //         console.log(err, err.stack);  
    //     }
    //     else {
    //         console.log(data);
    //     }
    // })
};