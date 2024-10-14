const d = new Date();


// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
const fulldate = new Date(2024 , 9 , 2)
console.log(fulldate.toDateString())
console.log(Date.parse(fulldate))


// get methods of date 

// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

console.log(fulldate.getFullYear())
console.log(fulldate.getMonth())
console.log(Math.random() * 100)