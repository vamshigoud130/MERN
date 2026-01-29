class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }


 borrowBook(){
    this.isAvailable = false;
 }
 returnBook(){
    this.isAvailable = true;
    }

 getBookInfo(){
    return `${this.title} by ${this.author}, pages of ${this.pages}`;
 }
 islongBook(){
    return this.pages > 300;
}   
}

let book1=new Book("The Great Gatsby","F. Scott Fitzgerald",180,true);
let book2=new Book("War and Peace","Leo Tolstoy",1225,true);
let book3=new Book("Ulysses","James Joyce",730,false);
let book4=new Book("The Odyssey","Homer",500,true);
let book5=new Book("Moby Dick","Herman Melville",635,false);

/*tasks
 Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

let books=[book1,book2,book3,book4,book5];

// i. Display info of all books     
console.log("Book Information:");

console.log(books);
books.forEach((book)=>{
    console.log(book.getBookInfo());
});

book1.borrowBook();
book3.borrowBook();
// ii. Borrow 2 books and show their availability status
console.log(`\nAfter borrowing books:`);
console.log(`${book1.title} is available: ${book1.isAvailable}`);
console.log(`${book3.title} is available: ${book3.isAvailable}`);



book3.returnBook();
// iii. Return 1 book and show updated status
console.log(`\nAfter returning a book:`);
console.log(`${book3.title} is available: ${book3.isAvailable}`);
// iv. Count how many books are "long books" (more than 300 pages)
let longBookCount=books.filter(book=>book.islongBook()).length;
console.log(`\nNumber of long books (more than 300 pages): ${longBookCount}`);

// v. List all available books
let availableBooks=books.filter(book=>book.isAvailable);
console.log(`\nAvailable books:`);
availableBooks.forEach(book => console.log(book.getBookInfo()));     