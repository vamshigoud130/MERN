let x=20;
console.log("value of x is :"+x);
try{
    // throw new Error("This is a custom error");
    let y=x+z; // z is not defined
    console.log("value of y is :"+y);
}   
catch(err){
    console.log("error name is:"+err.name);
    console.log("An error occurred: "+err.message);
    
}
finally{
    console.log("Execution completed.");    
}