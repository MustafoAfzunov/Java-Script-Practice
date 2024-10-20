const pipe = (...functions) => (input) =>
    functions.reduce((acc, fn) => fn(acc), input);
  
  // Example usage
  const add2 = (x) => x + 2;
  const multiplyBy3 = (x) => x * 3;
  
  const result = pipe(add2, multiplyBy3)(5); // (5 + 2) * 3 = 21
  console.log(result);  // Output: 21
  