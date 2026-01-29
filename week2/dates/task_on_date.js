let date1=new Date(2022,0,1); // January 1, 2022 (months are 0-indexed)
let date2=new Date(2024,0,1);
 console.log("date1 :"+date1+" and date2:"+date2);

 if(date1>date2)
 {
    [date1,date2]=[date2,date1]; // swap

 }
 console.log("after swap date1 :"+date1+" and date2:"+date2);

// calculate difference in years
let diffyears=date2.getFullYear()-date1.getFullYear();
console.log("difference in years :"+diffyears);

// calculate difference in months