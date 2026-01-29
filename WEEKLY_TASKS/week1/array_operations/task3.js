const temperatures = [32, 35, 28, 40, 38, 30, 42];

/*

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28


*/
let abv=temperatures.filter(t=>t>35);
console.log(abv);
let fahrenheit=temperatures.map(c=>(c*9/5)+32);
console.log(fahrenheit);
let avg=temperatures.reduce((acc,cur)=>(acc+cur)/temperatures.length);
console.log(avg);
let max=temperatures.find(t=>t>40);
console.log(max);
let maxindex=temperatures.findIndex(t=>t>40);
console.log(maxindex);


const marks = [78, 92, 35, 88, 40, 67];
/*Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

let passmarks=marks.filter(m=>m>=40);
console.log(passmarks);
let grace=marks.map(m=>m+5);
console.log(grace);
let highest=marks.reduce((acc,cur)=>(acc>cur)?acc:cur);
console.log(highest);
let firstbelow40=marks.find(m=>m<40);
console.log(firstbelow40);
let indexof92=marks.findIndex(m=>m===92);
console.log(indexof92);