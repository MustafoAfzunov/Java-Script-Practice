function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let arr = prompt("Enter numbers separated by space: ").split(" ").map(Number);
console.log("Array without duplicates:", removeDuplicates(arr));
