function deepClone() {
    let input = prompt("Enter an object in JSON format (e.g., {\"name\":\"John\",\"address\":{\"city\":\"New York\"}}): ");
    let obj = JSON.parse(input);
    let clonedObj = JSON.parse(JSON.stringify(obj));

    console.log("Original object:", obj);
    console.log("Cloned object:", clonedObj);
}

deepClone();
