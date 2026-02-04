//


let futurevalidation=true;
//create promise(kiran)
let promise_obj=new Promise((fullfill,reject)=>{      // we can take any names for parameters

    setTimeout(() =>{
        if(futurevalidation === true){
            fullfill("promise is fullfilled,  hello kiran");  // resolve
        }else{
            reject("promise is rejected,  bye kiran");    // reject
        }

},5000);
});

//consume promise (kiran)
promise_obj.then((message)=>{
    console.log("in then: ",message);
}).catch((message)=>{
    console.log("in catch: ",message);
});