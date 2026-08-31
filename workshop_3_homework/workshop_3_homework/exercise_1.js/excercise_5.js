let word = prompt("enter a word").trim().toLocaleLowerCase();
let vowelcount = 0;
for (i=0; i < word.length; i++) {
    if ( word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u"
  ) {
        vowelCount += 1;
    }
}

console.log(`The word contains ${vowelCount} vowels.`);
console.log(`The word has ${word.length} characters.`);