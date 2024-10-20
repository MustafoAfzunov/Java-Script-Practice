function checkSubstring() {
    let str = prompt("Enter the main string: ");
    let subStr = prompt("Enter the substring: ");
    console.log("Is substring present:", str.includes(subStr));
}

checkSubstring();
