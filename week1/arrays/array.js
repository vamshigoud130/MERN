let skills=['html','css','js'];
// Accessing array elements(destructure)
let [a,b,c]=skills;
console.log(a);
console.log(b);

//inserting elements
//at starting
skills.unshift('python');
console.log(skills);
skills.unshift('java','c++;');
console.log(skills);
//at end
skills.push('reactjs');
console.log(skills);
skills.push('nodejs','mongodb');
console.log(skills);

//at specific position
skills.splice(1,0,'django'); // (index number,number of elements to be removed,elements to be added)
console.log(skills);
skills.splice(3,2,'flask'); // (index number,number of elements to be removed,elements to be added)
console.log(skills);

// removing elements
// from starting
skills.shift();
console.log(skills);
    
// from end
skills.pop();
console.log(skills);

// from specific position
skills.splice(2,1); // (index number,number of elements to be removed)
console.log(skills);

//filter method
let marks=[65,78,45,89,90,56,72,68,95];
let new1=marks.filter(function(element)        
{                               
    return element>70;  
}
);    
console.log(new1);
let new2=marks.filter(element=>element>70);
console.log(new2);

let mul=marks.filter(i=>i*i);
console.log(mul);

let std=[
    { sno:1,name:"ravi",age:21},
    { sno:2,name:"vikas",age:19},
    { sno:3,name:"manoj",age:15},
    { sno:4,name:"madhu",age:30}
];

let res1=std.filter(s=>s.age<20);
console.log(res1);
//increament manoj age by 2 years

//map method