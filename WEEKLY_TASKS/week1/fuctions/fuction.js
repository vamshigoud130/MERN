// callback funtion : a function that send as an argument to another function
function test1(a){
    console.log("inside test1");
    console.log(a)
    

}
test1(function(){
    console.log("inside callback function");
})


//WRITE AFUNCTION THAT CAN EXTRACT MARKS GREATER THAN 70 , THEN PACK THEM INTO AN ARRAY AND RETURN THEM
let marks=[65,78,45,89,90,56,72,68,95];
function getGreaterThan70(marks,callback){
    let res=[]; // empty array to store marks greater than 70
    for(let i=0;i<marks.length;i++){
        if(marks[i]>70){
            res.push(marks[i]);
        }
    }
    callback(res);
}   
getGreaterThan70(marks,function(result){
    console.log("Marks greater than 70 are: "+result);
} );     


//function declaration
function add(a,b){
    return a+b;
}   

//function expression  //this function is more secure than above function
let add1=function(a,b){ 
 return a+b;
 };

 //arrow function (uded to simplify the function expression)
    let add2=(a,b)=> a+b;

 console.log(add(2,3));
 console.log(add1(4,5));
 console.log(add2(6,7));


