let enrollmentDeadline = new Date("2026-01-20");
if (enrollmentDeadline > new Date()) {
    console.log("Enrollment is open.");
}
else {
    console.log("Enrollment is closed.");
}
inputDate= new Date("2026-1-30");
function isValidDate(inputDate){
    
    return inputDate instanceof Date && !isNaN(inputDate);
}
console.log("is input date valid? :"+isValidDate(inputDate));