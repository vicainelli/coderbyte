
function LongestWord(sen) {
  const stringArray = sen.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord;
}

LongestWord("fun&!! time") //?
// → time
LongestWord("I love dogs") //?
// → love