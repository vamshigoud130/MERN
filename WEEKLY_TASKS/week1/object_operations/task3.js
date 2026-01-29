//ASSIGNMENT 1

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

/*
Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"
*/

console.log("Assignment 1 Solutions:");
let inStockItems=cart.filter(item=>item.inStock==true);
console.log(inStockItems);
let total=cart.map(i => ({ name: i.name, total: i.price*i.quantity}));
console.log(total);
let grandtotal=cart.reduce((acc,cur)=>acc+(cur.price*cur.quantity),0)
console.log(grandtotal)
const mouseDetails = cart.find(item => item.name === "Mouse");

console.log(mouseDetails);

const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);


//ASSIGNMENT 2

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

/*Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
  3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"


    */

console.log("Assignment 2 Solutions:");
let passedStudents=students.filter(s=>s.marks>=40);
console.log(passedStudents);
let gradeAStudents=students.map(s=> ({ name: s.name, grade: (s.marks>=90) ? 'A' : (s.marks>=75) ? 'B' : (s.marks>=60) ? 'C' : 'D'}));
console.log(gradeAStudents);
let averageMarks=students.reduce((acc,cur)=>(acc+cur.marks)/students.length);
console.log(averageMarks);
let student92=students.find(s=>s.marks===92);     
console.log(student92);
let kiranIndex=students.findIndex(s=>s.name==="Kiran");
console.log(kiranIndex);

//ASSIGNMENT 3

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
/*Tasks:

 1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"

*/
console.log("Assignment 3 Solutions:");
let itEmployees=employees.filter(e=>e.department==="IT");
console.log(itEmployees);
let netsalaryemployees=employees.map(e=> ({e,netsalary:e.salary+(e.salary*0.10)}));
console.log(netsalaryemployees);
let totalSalaryPayout=employees.reduce((acc,cur)=>acc+cur.salary,0);
console.log(totalSalaryPayout);
let employee30000=employees.find(e=>e.salary===30000);    
console.log(employee30000);
let nehaIndex=employees.findIndex(e=>e.name==="Neha");
console.log(nehaIndex);

//ASSIGNMENT 4
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

/*Tasks:
 1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
console.log("Assignment 4 Solutions:");
let scifiMovies=movies.filter(m=>m.genre==="Sci-Fi");
console.log(scifiMovies);
let movieRatings=movies.map(m=>(`  ${m.title}  ${m.rating}`));
console.log(movieRatings);
let averageRating=movies.reduce((acc,cur)=>(acc+cur.rating)/movies.length);                     
console.log(averageRating);
let jokerMovie=movies.find(m=>m.title==="Joker");    
console.log(jokerMovie);
let avengersIndex=movies.findIndex(m=>m.title==="Avengers");
console.log(avengersIndex);


//ASSIGNMENT 5


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
/*Tasks:
 1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
console.log("Assignment 5 Solutions:");
let creditTransactions=transactions.filter(t=>t.type==="credit");
console.log(creditTransactions);
let transactionAmounts=transactions.map(t=>(`${t.amount}`));   
console.log(transactionAmounts);

let finalBalance=transactions.reduce((acc,cur)=>(cur.type==="credit") ? acc+cur.amount : acc-cur.amount,0);
console.log(finalBalance);
let firstDebitTransaction=transactions.find(t=>t.type==="debit");
console.log(firstDebitTransaction);
let index10000=transactions.findIndex(t=>t.amount===10000);
console.log(index10000);