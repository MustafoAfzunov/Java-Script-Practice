function flattenArray() {
    let input = prompt("Enter a nested array (e.g., [1,[2,[3,4],5]]): ");
    let nestedArray = JSON.parse(input);
    let flattened = nestedArray.flat(Infinity);
    console.log("Flattened array:", flattened);
}

flattenArray();
