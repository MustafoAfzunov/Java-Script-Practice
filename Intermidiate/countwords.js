function countWordOccurrences() {
    let str = prompt("Enter a sentence: ");
    let words = str.toLowerCase().split(/\s+/);
    let wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    console.log("Word occurrences:", wordCount);
}

countWordOccurrences();
