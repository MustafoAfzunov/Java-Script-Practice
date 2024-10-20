function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
console.log("Temperature in Fahrenheit:", celsiusToFahrenheit(celsius));
