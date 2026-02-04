/// we use optional chaining and nullish coalescing operator to handle undefined or null values in objects.

std={
    name:"Dimpu",
    age:20,
}
console.log(std.name)
console.log(std.age)
console.log(std.address?.city) // optional chaining
console.log(std.address?.street??"not available") // nullish coalescing