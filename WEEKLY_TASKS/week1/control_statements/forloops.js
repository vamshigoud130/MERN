// for-of loop

let a=[90,50,27,50,20]
let sum=0
for(let m of a){
    sum=sum+m
}
console.log(sum)

// for-in loop
let student={
    name:"dimpu",
    age:20,
    marks:90
}           
for(let key in student){
    console.log(`The ${key} of student is ${student[key]}`)
}   




