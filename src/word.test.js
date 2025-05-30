const Worldverify = require("./worldverify");

describe("test type of word in system", () => {
  let verifier = null;

  beforeEach(() => {
    const options = {
      isLowerCase: true,
      isPoints: true,
    };

    verifier = new Worldverify(options);
  });

  it("should return true for a simple palindrome", () => {
    expect(verifier.isPalindrome("arara")).toBe(true);
  });

  it("should return false for a non-palindrome word", () => {
    expect(verifier.isPalindrome("chatgpt")).toBe(false);
  });

  it("should return true for a palindrome with mixed case", () => {
    expect(verifier.isPalindrome("Arara")).toBe(true);
  });

  it("should return true for a palindrome phrase ignoring spaces", () => {
    expect(verifier.isPalindrome("a man a plan a canal panama")).toBe(true);
  });

  it("should return false for a phrase that is not palindrome", () => {
    expect(verifier.isPalindrome("this is not a palindrome")).toBe(false);
  });

  it("should return true for a single letter", () => {
    expect(verifier.isPalindrome("a")).toBe(true);
  });

  it("should return true for an empty string", () => {
    expect(verifier.isPalindrome("")).toBe(true);
  });

  it("should return true for palindrome with punctuation ignored", () => {
    expect(verifier.isPalindrome("Madam, I'm Adam")).toBe(true);
  });

});

describe("vowels in word", () => {
  let verifier = null;

  beforeEach(() => {
    const options = {
      isLowerCase: true,
    };

    verifier = new Worldverify(options);
  });

  
  it("should return the number of vowels in a normal word", () => {
    expect(verifier.countVowels("arara")).toBe(3);
  });

  it("should return 0 for a word without vowels", () => {
    expect(verifier.countVowels("xkcd")).toBe(0);
  });

  it("should count vowels in a word with mixed case", () => {
    expect(verifier.countVowels("ArArA")).toBe(3);
  });

  it("should return 0 for an empty string", () => {
    expect(verifier.countVowels("")).toBe(0);
  });

  it("should count vowels ignoring punctuation if isPoints is true", () => {
    expect(verifier.countVowels("A.r,a.r,a")).toBe(3);
  });

  it("should count vowels in a phrase with spaces and punctuation", () => {
    expect(verifier.countVowels("A man, a plan, a canal: Panama")).toBe(10);
  });

  it("should handle string with only vowels", () => {
    expect(verifier.countVowels("aeiou")).toBe(5);
  });

  it("should handle string with repeated vowels", () => {
    expect(verifier.countVowels("aaaa")).toBe(4);
  });
});