let data=100
// copying data to new variable
let datacopy=data;

console.log("data :"+data);

// if we change the original data , the copied data will not change because primitive data

data=200;
console.log("after changing data :"+data);
console.log("datacopy :"+datacopy);

// for non-primitive data types (objects and arrays) , the reference is copied
let user={
    id:1,
    name:"Dimpu"
};
let usercopy=user; // reference is copied
console.log("user:"+user.name);
console.log("usercopy:"+usercopy.name);


// if we change the original object , the copied object will also reflect the change
user.name="Ravi";
console.log("after changing user name:");
console.log("user:"+user.name);
console.log("usercopy:"+usercopy.name);



// to create a true copy of an object , we can use Object.assign() or spread operator
let usercopy2={...user}; // spread operator
user.name="John";
console.log("after changing user name again:");
console.log("user:"+user.name);
console.log("usercopy2:"+usercopy2.name);









