function capitalizeWords() {
    let sentence = prompt("Enter a sentence: ");
    let capitalized = sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    console.log("Capitalized sentence:", capitalized);
}

capitalizeWords();
