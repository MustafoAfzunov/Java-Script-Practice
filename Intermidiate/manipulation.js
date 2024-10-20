function objectManipulation() {
    let obj = {};

    // Add properties
    obj.name = prompt("Enter a name: ");
    obj.age = parseInt(prompt("Enter an age: "));
    
    // Update a property
    obj.age = parseInt(prompt("Update age: "));
    
    // Remove a property
    delete obj.name;
    
    console.log("Updated object:", obj);
}

objectManipulation();
