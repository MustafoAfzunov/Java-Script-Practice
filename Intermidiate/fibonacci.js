function generateFibonacci() {
    let n = parseInt(prompt("Enter the number of Fibonacci numbers to generate: "));
    let fib = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    console.log("Fibonacci sequence:", fib.slice(0, n));
}

generateFibonacci();
