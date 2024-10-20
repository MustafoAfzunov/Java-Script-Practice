function validateEmail() {
    let email = prompt("Enter an email address: ");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Is valid email:", regex.test(email));
}

validateEmail();
