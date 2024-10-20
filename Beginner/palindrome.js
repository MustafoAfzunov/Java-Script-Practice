function isPalindrome(s) {
    return s === s.split("").reverse().join("");
}

let s = prompt("Enter a string: ");
console.log("Is palindrome:", isPalindrome(s));
