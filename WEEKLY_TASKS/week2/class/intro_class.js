//creating a class
class Person{
    // creating properties
    pid;
    pname;
    #page;

    // creating methods
    method(id,name,age){
        this.pid=id;
        this.pname=name;
        this.page=age;
    }
    getDetails(){
        console.log(this.pid,this.pname,this.page);
    }

    // creating constructor
    constructor(id,name,age){
        console.log('constructor called');
        this.pid=id;
        this.pname=name;
        this.page=age;
    }

    static info(){
        console.log('this is person class');
    }
}
// creating object
let p1=new Person(101,'vamshi',24);
p1.getDetails();
Person.info();









/////complete static