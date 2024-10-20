function intersectionArrays() {
    let input1 = prompt("Enter first array of numbers (comma-separated): ");
    let input2 = prompt("Enter second array of numbers (comma-separated): ");
    
    let arr1 = input1.split(",").map(Number);
    let arr2 = input2.split(",").map(Number);
    
    let intersection = arr1.filter(value => arr2.includes(value));
    console.log("Intersection:", intersection);
}

intersectionArrays();
