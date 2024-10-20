function checkAnagram() {
    let str1 = prompt("Enter first string: ");
    let str2 = prompt("Enter second string: ");

    function normalize(str) {
        return str.toLowerCase().split("").sort().join("");
    }

    console.log("Are anagrams:", normalize(str1) === normalize(str2));
}

checkAnagram();
