function findLongestWord(string = "") {
  // Write code under this line
  let LongestWord = "";

  const words = string.split(" ");

  for (const word of words) {
    if (word.length > LongestWord.length) {
      LongestWord = word;
    }
  }

  return LongestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
