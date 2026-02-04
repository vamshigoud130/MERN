// TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if(title.length===0)
                        {
                            return "Title is empty";


                        }
                        else if(title.length<3) {
                            return "Title should be at least 3 characters long";
                        }
                        return "Valid title";
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {

                        if(priority==="low" || priority==="medium" || priority==="high")
                        {
                            return "Valid priority";
                        }
                        else
                        {
                            return "Priority must be low, medium or high";
                        }
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }
