let em={
    name:"John Doe",
    age:30,
    city:"New York"
}
console.log(em.name); // Accessing property using dot notation  
console.log(em['age']); // Accessing property using bracket notation

// Modifying properties
em.age=31;
em['city']="Los Angeles";
console.log(em);

// Adding new properties
em.country="USA";
em['profession']="Engineer";
console.log(em);
// Deleting properties
delete em.city;
console.log(em);

// seal the object (by using this we can not add or delete any property but can modify existing properties)
Object.seal(em);
em.name="vamshi"; // This will change the name property
delete em.profession; // This will not delete the profession property
console.log(em);


// freeze the object (by using this we can not do any modification to the object)
Object.freeze(em);
em.age=32; // This will not change the age property
console.log(em);

// only get the keys of the object
console.log(Object.keys(em));
// only get the values of the object
console.log(Object.values(em));
// get the entries of the object
console.log(Object.entries(em));

// check if the property exists in the object
console.log('name' in em); // true
console.log('city' in em); // false