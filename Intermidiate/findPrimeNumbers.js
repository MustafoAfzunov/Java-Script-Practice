function findPrimeNumbers() {
    let limit = parseInt(prompt("Enter the upper limit: "));

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    console.log("Prime numbers up to", limit, ":", primes);
}

findPrimeNumbers();
