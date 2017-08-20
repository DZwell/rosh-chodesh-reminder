const request = require('request');

const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&month=8&maj=on&min=on';
const sunsetUrl = 'https://api.sunrise-sunset.org/json?lat=47.608013&lng=-122.335167'

request.get(hebCalUrl, (err, res, body) => {
    const jsonBody = JSON.parse(body);
    
    jsonBody.items.forEach((item) => {
        if (item.category === 'roshchodesh') {
            console.log(item);
        }
    });
    
});

request.get(sunsetUrl, (err, res, body) => {
    console.log(JSON.parse(body));
});


