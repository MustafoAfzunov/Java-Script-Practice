function countVowels(s) {
    let vowels = "aeiouAEIOU";
    return s.split("").filter(char => vowels.includes(char)).length;
}

let s = prompt("Enter a string: ");
console.log("Number of vowels:", countVowels(s));
