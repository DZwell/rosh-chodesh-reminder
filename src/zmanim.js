const request = require('request');
const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on';


module.exports = function getRoshChodeshim() {
	const monthsMap = {};
	request.get(hebCalUrl, (err, res, body) => {
		const jsonBody = JSON.parse(body);

		jsonBody.items.forEach((item) => {
			if (item.category === 'roshchodesh') {
				const roshChodeshDate = item.date;
				const hewbrewMonth = item.title.split(' ')[2];
				if (monthsMap[hewbrewMonth]) {
					monthsMap[hewbrewMonth].push(roshChodeshDate);
				} else {
					monthsMap[hewbrewMonth] = [roshChodeshDate];
				}
			}
		});
	});
	return monthsMap
}