function reverseString(s) {
    return s.split("").reverse().join("");
}

let s = prompt("Enter a string: ");
console.log("Reversed String:", reverseString(s));
