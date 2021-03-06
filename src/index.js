const fs = require("fs");
const axios = require("axios");
const authorize = require("./auth").authorize;
const submitEvent = require("./events").submitEvents;
const hebCalUrl =
  "http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on";

axios.get(hebCalUrl).then(onSuccess, onFailure);

function onSuccess(response) {
  const monthsMap = _buildMonthsMap(response.data.items);
  startup(submitEvent.bind(this, monthsMap));
}

function onFailure(err) {
  console.log(`Something went wrong ${err}`);
}

function startup(fn) {
  fs.readFile("./creds/credentials.json", (err, content) => {
    if (err) {
      return console.log("Error loading client secret file:", err);
    }
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse(content), fn);
  });
}

function _buildMonthsMap(items) {
  const monthsMap = {};
  items.forEach((item) => {
    if (item.category === "roshchodesh") {
      const roshChodeshDate = item.date;
      const hebrewMonth = item.title.split(" ")[2];
      if (monthsMap[hebrewMonth]) {
        monthsMap[hebrewMonth].push(roshChodeshDate);
      } else {
        monthsMap[hebrewMonth] = [roshChodeshDate];
      }
    }
  });
  return monthsMap;
}
