const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};



//tasks

/*MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably
*/

let activeusers = users.filter( items => items.active === true);
console.log("Active Users:", activeusers);

let activeUserNames = activeusers.map(user => user.name);
console.log("Active User Names:", activeUserNames);

let anyAdminExists = users.some(user => user.role === "admin");
console.log("Any Admin Exists:", anyAdminExists);

let findUserById = (id) => {
  return users.find(user => user.id === id);
} 
console.log("Find User by ID 2:", findUserById(2));
function deactivateUserImmutable(id) {
  return users.map(user => {
    if (user.id === id) {
      return { ...user, active: false };
    }
    return user;
  });
}
let updatedUsers = deactivateUserImmutable(1);
console.log("Users after deactivating user with ID 1:", updatedUsers);

/*MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably
  */
let publishedCourses = courses.filter(course => course.published === true);
console.log("Published Courses:", publishedCourses);


let sortedCoursesByPrice = [...courses].sort((a, b) => b.price - a.price);
console.log("Courses sorted by price (high to low):", sortedCoursesByPrice);
let courseTitlesAndPrices = courses.map(course => ({ title: course.title, price: course.price }));    

console.log("Course Titles and Prices:", courseTitlesAndPrices);
let totalValueOfPublishedCourses = publishedCourses.reduce((total, course) => total + course.price, 0);
console.log("Total Value of Published Courses:", totalValueOfPublishedCourses); 
function addCourseImmutable(newCourse) {
  return [...courses, newCourse];
} 
let newCourse = { id: 104, title: "Python", price: 1199, published: true };
let updatedCourses = addCourseImmutable(newCourse);
console.log("Courses after adding new course:", updatedCourses);


 
/*MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses
  */
let cartWithCourseInfo = cart.map(cartItem => {
  let course = courses.find(course => course.id === cartItem.courseId);
  return { ...cartItem, courseTitle: course.title, coursePrice: course.price };
});   
console.log("Cart with Course Info:", cartWithCourseInfo);  
let totalCartAmount = cartWithCourseInfo.reduce((total, item) => total + (item.coursePrice * item.qty), 0);
console.log("Total Cart Amount:", totalCartAmount);
function increaseCourseQuantityImmutable(courseId, increment) {
  return cart.map(item => { 
    if (item.courseId === courseId) {
      return { ...item, qty: item.qty + increment };
    }
    return item;
  });
} 
let updatedCart = increaseCourseQuantityImmutable(101, 2);
console.log("Cart after increasing quantity of course ID 101 by 2:", updatedCart);      
function removeCourseFromCart(courseId) {
  return cart.filter(item => item.courseId !== courseId);
}   
let cartAfterRemoval = removeCourseFromCart(103); 
console.log("Cart after removing course ID 103:", cartAfterRemoval);


let allCartItemsPaidCourses = cart.every(item => {  
  let course = courses.find(course => course.id === item.courseId);       
  return course && course.price > 0;    
});   
console.log("All Cart Items are Paid Courses:", allCartItemsPaidCourses); 


/*MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
  */



let roleNames = Object.keys(roles);
console.log("Role Names:", roleNames); 
let canStudentDelete = roles.student.includes("delete");    
console.log("Can Student Delete:", canStudentDelete); 
let uniquePermissions = [...new Set(Object.values(roles).flat())];
console.log("Unique Permissions:", uniquePermissions);    
function addRoleImmutable(roleName, permissions) {  
  return { ...roles, [roleName]: permissions };       
} 
let updatedRoles = addRoleImmutable("moderator", ["update", "view"]);
console.log("Roles after adding moderator:", updatedRoles); 
                  


