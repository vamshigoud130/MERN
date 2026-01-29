//Scenario : You are preparing a course list for display on a website.


const courses = ["javascript", "react", "node", "mongodb", "express"];
/*Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"


*/
let bigname=courses.filter(c=>c.length>5);
console.log(bigname);
let upper=courses.map(c=>c.toUpperCase());
console.log(upper);
let total=courses.reduce((acc,cur)=>(acc+" | "+cur).toUpperCase());
console.log(total);
let reactCourse=courses.find(c=>c==="react");
console.log(reactCourse);
let nodeIndex=courses.findIndex(c=>c==="node");
console.log(nodeIndex);