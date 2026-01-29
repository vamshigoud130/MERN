let date1 = new Date();
console.log("current date is :"+date1);

console.log("year is :"+date1.getFullYear());
console.log("month is :"+date1.toLocaleString('default',{month:'long'}));
console.log("date is :"+date1.getDate());       
console.log("day is :"+date1.toLocaleString('default',{weekday:'long'})); 
console.log("hours is :"+date1.getHours());
console.log("minutes is :"+date1.getMinutes());
console.log("seconds is :"+date1.getSeconds());
console.log("milliseconds is :"+date1.getMilliseconds());

let date2=new Date(Date.now());
console.log("date2 is :"+date2.toString());