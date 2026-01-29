
//ASSIGNMENT 1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

/*Tasks:
Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields*/

console.log("Assignment 1 Solutions:");
console.log(user.name);
console.log(user.email);
user.lastlogin='2026-01-01';
user['role']='admin';
console.log(user);
delete user.isActive;
console.log(Object.keys(user));


//ASSIGNMENT 2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
/*Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90

*/

console.log("Assignment 2 Solutions:");
let t=(Object.values(marks))
let ac=t.reduce((accumulator,current) => accumulator+current,0)
console.log(ac)
console.log(ac / t.length)
let highest=t.reduce((acc,cur)=>(acc>cur)?acc:cur);
console.log(highest)
marks.computer=90
console.log(marks)

//ASSIGNMENT 3


const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
/*Tasks:
1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified
  */
console.log("Assignment 3 Solutions:");
settings.theme=(settings.theme==="light")?"dark":"light";
console.log(settings);
settings.autoSave=true;
console.log(settings);
delete settings.notifications;
console.log(settings);
Object.freeze(settings);
settings.language="fr";
console.log(settings);  // No change should occur due to freeze



