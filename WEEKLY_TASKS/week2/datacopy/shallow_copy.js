/*Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",   
      language: "en",
    }
};
// Step 1: Create a shallow copy of user
const userCopy = {...user};


userCopy.name = "Dimpu";
console.log("Original User:", user.name);
console.log("After changing name in userCopy:");
console.log("Original User:", user.name);
console.log("Copied User:", userCopy.name);
userCopy.preferences.theme = "light";

// iii .Log both original and copied objects
console.log("After changing preferences.theme in userCopy:");
console.log("Original User Preferences:", user.preferences.theme);
console.log("Copied User Preferences:", userCopy.preferences.theme);



///// Additional check to see what happens when we change primitive  and non premitive property in original object
user.id=202;
user.preferences.language="fr";

console.log("After changing original user id and preferences.language:");
console.log("Original User ID:", user.id);
console.log("Copied User ID:", userCopy.id);
console.log("Original User Language:", user.preferences.language);
console.log("Copied User Language:", userCopy.preferences.language);






