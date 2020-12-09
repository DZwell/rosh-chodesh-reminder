const axios = require('axios');
const hebCalUrl = 'http://www.hebcal.com/hebcal/?v=1&cfg=json&nx=on&year=now&maj=on&min=on';
const monthsMap = {};

exports.getRoshChodeshim = () => {
	axios.get(hebCalUrl)
		.then((res) => {
			res.data.items.forEach((item) => {
				if (item.category === 'roshchodesh') {
					const roshChodeshDate = item.date;
					const hebrewMonth = item.title.split(' ')[2];
					if (monthsMap[hebrewMonth]) {
						monthsMap[hebrewMonth].push(roshChodeshDate);
					} else {
						monthsMap[hebrewMonth] = [roshChodeshDate];
					}
				}
			});
		});
}