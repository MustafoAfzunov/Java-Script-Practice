function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

let arr = prompt("Enter numbers separated by space: ").split(" ").map(Number);
console.log("Sum of elements:", sumArray(arr));
