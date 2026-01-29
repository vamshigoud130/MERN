import {addTask,getTasks,completeTask} from "./task.js";
 // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again


addTask("Buy groceries", "high", "2026-12-31");
addTask("Clean the house", "medium", "2026-11-15");
addTask("Pay bills", "low", "2026-10-20");
console.log("All Tasks:", getTasks());

completeTask(1);
console.log("All Tasks after completion:", getTasks());




