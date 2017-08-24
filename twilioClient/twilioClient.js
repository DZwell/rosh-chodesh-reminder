var config = require('./config/config');

module.exports.sendSms = function(to, message) {
  var client = require('twilio')(config.accountSid, config.authToken);
  // console.log(client.api.messages.create())
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.sendingNumber,
    }).then(function(data) {
      console.log('Message Sent');
    }).catch(function(err) {
      console.error('Error sending message');
      console.error(err);
    });
};
