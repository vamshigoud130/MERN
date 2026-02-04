fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



//modern syntax using async/await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();




///diff b/w js and python promise and  JSON
/*
   In js the values and strings are in single or double quotes
    but in JSON only double quotes are allowed even for keys.

   In js functions are allowed but in JSON functions are not allowed.
   */


//js
let obj={
    name:'kiran',
    age:24,
    greet:function(){
        console.log("hello kiran");
    }   
}

//JSON
let json_data= `{
    "name":"kiran",
    "age":24
}`; 
//functions are not allowed in JSON

/// js to JSON
let js_to_json=JSON.stringify(obj);
console.log("js to json: ",js_to_json);

//JSON to js
let json_to_js=JSON.parse(json_data);
console.log("json to js: ",json_to_js);