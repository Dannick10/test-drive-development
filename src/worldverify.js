class Worldverify {
  constructor(options = {}) {
    this.isLowerCase = options.isLowerCase || false;
    this.isUpperCase = options.isUpperCase || false;
    this.isPoints = options.isPoints || false;
  }

  isPalindrome(word) {
    let inversedWord = word.split("").reverse().join("");
    return this.optionsWord(word) === this.optionsWord(inversedWord);
  }

  countVowels(words) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    let treatedWord = this.optionsWord(words);

    for (let char of treatedWord) {
        if (vowels.has(char)) {
          count++;
        }
      }

    return count;
  }

  optionsWord(word) {
    let treatedWord = word;

    if (this.isLowerCase) {
      treatedWord = treatedWord.toLowerCase();
    }

    if (this.isUpperCase) {
      treatedWord = treatedWord.toUpperCase();
    }

    if (this.isPoints) {
      treatedWord = treatedWord.replace(/[^a-zA-Z0-9]/g, "");
    }

    return treatedWord;
  }
}

module.exports = Worldverify;
