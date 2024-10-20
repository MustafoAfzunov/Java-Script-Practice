function calculator(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operation";
    }
}

let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let operation = prompt("Enter operation (+, -, *, /): ");
console.log("Result:", calculator(a, b, operation));
