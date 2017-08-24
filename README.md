# Rosh Chodesh Reminder

I'm using the [Hebcal API](https://www.hebcal.com/home/195/jewish-calendar-rest-api) to get Rosh Chodesh dates, and the [Sunset API](https://sunrise-sunset.org/api) to get the sunset times for when Rosh Chodesh actually starts since the Hebcal API only returns sunset times for Erev Shabbat/Chagim.

I'm using [Twilio](https://www.twilio.com/?mkwid=s5YsI2dSk&pdv=c&pcrid=194579856718&pmt=e&pkw=twilio&campaign=G_S_Brand_Alpha_NA&utm_source=google&utm_medium=cpc&utm_term=twilio&utm_campaign=G_S_Brand_Alpha_NA&utm_content=Brand&gclid=Cj0KCQjw8vnMBRDgARIsACm_BhKNzEpYUkmK2yDgiStZBYyUaepdDVbliw6afUMtnxeqe42F-UCA5tAaAsbjEALw_wcB) to send SMS reminders.