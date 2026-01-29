import { validateTitle,validateDueDate,validatePriority }   from "./validator.js";
let tasks=[]
function addTask(title,priority,dueDate){
    if(!validateTitle(title)){
        console.log("Invalid Title");
        return;
    }
    if(!validatePriority(priority)){
        console.log("Invalid Priority");
        return;
    }       
    if(!validateDueDate(dueDate)){
        console.log("Invalid Due Date");
        return;
    }
    const task={
        title,
        priority,           
        dueDate
    };
    tasks.push(task);
    console.log("Task added successfully");
}

function getTasks(){
    return tasks;
} 

 // 3. Mark task as complete
     function completeTask(taskId) {
                  // Find task and mark as complete

                  const task = tasks.find(t => t.id === taskId);
                  if (task) {
                    task.completed = true;
                    console.log("Task completed successfully");
                  } else {
                    console.log("Task not found");
                  }
                }

export {addTask,getTasks,completeTask};