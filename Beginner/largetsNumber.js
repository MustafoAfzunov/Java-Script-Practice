function findLargestNumber(arr) {
    return Math.max(...arr);
}

let arr = prompt("Enter numbers separated by space: ").split(" ").map(Number);
console.log("Largest number:", findLargestNumber(arr));
