const { google } = require('googleapis');
const sunset = 'https://api.sunrise-sunset.org/json?lat=47.55218304932781&lng=-122.26786289567866&date=2020-12-13&formatted=0';

function _createEvent(month, date) {
  return {
    'summary': `Rosh chodesh ${month}`,
    'start': {
      'dateTime': `${date}T09:00:00-07:00`,
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': `${date}T09:30:00-07:00`,
      'timeZone': 'America/Los_Angeles',
    },
    'reminders': {
      'useDefault': false,
      'overrides': [
        { 'method': 'email', 'minutes': 24 * 60 },
        { 'method': 'popup', 'minutes': 10 },
      ],
    },
  };
}

exports.submitEvents = function submitEvent(monthsMap, auth) {
  console.log(monthsMap);
  const calendar = google.calendar({ version: 'v3', auth });
  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, (err, event) => {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });
}