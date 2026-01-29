let stu={
    name : "dimpu",
    b:10,
    c:20
}
// unpack the object
let {name,b,c}=stu;
console.log(name);
console.log(b);
console.log(c);

// complex object
let emp={
    name:"John Doe",
    age:30, 
    address:{
        street:"123 Main St",
        city:"New York",
        country:"USA"
    },
    marks:[90,85,88],
    getData:function(){
        console.log('emplloyeename id :'+this.name);
        console.log('employee age :'+emp.age);
    },
    getAvg:function(){
        console.log((this.marks[0]+this.marks[1]+this.marks[2])/3);

    }
    


};
console.log(emp.name);
console.log(emp.age);
console.log(emp.address.city);
console.log(emp.marks[1]);
emp.getData();
emp.getAvg();
