function getUniqueValues() {
    let input = prompt("Enter numbers separated by commas: ");
    let arr = input.split(",").map(Number);
    let uniqueValues = [...new Set(arr)];
    console.log("Unique values:", uniqueValues);
}

getUniqueValues();
