function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

let num = parseInt(prompt("Enter a number: "));
console.log("The number is:", isEvenOrOdd(num));
