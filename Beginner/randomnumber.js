function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let start = parseInt(prompt("Enter the start of range: "));
let end = parseInt(prompt("Enter the end of range: "));
console.log("Random number:", generateRandomNumber(start, end));
