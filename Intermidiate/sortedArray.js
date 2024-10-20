function sortArray() {
    let input = prompt("Enter numbers separated by commas: ");
    let arr = input.split(",").map(Number);
    arr.sort((a, b) => a - b);
    console.log("Sorted array:", arr);
}

sortArray();
