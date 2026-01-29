let date1=new Date()
console.log("date is :"+date1);



console.log("date is :"+Date.now().toString());

let date2=new Date('2022-12-01');
console.log("date2 is :"+date2);

let date3= new Date(2023,11,25,10,30,0);
console.log("date3 is :"+date3);

let date4=new Date(Date.now());
console.log("date4 is :"+date4.toString());
console.log(date4.toISOString());
let date5=new Date(2023,0,1);
console.log("date5 is :"+date5);

console.log("getFullYear :"+date5.getFullYear());
console.log("getMonth :"+date5.getMonth());
console.log("getDate :"+date5.getDate());
console.log("getDay :"+date5.getDay());     