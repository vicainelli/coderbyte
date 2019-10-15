const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const vogals = 'aeiou'.split('')

function LetterChanges(str) {
  str.toLowerCase()
  const arrStr = str.split('')
  const newStr = []
  // Replace letters
  arrStr.map(item => {
    if( alphabet.find(letter => letter === item) ) {
      let newIndex = item == 'z' ? -1 : alphabet.indexOf(item)
      newStr.push(alphabet[newIndex+1])
    } else {
      newStr.push(item)
    }
  })
  // Captalize vogals
  const final = newStr.map(item => {
    if(vogals.includes(item)) return item.toUpperCase()
    return item
  })

  // code goes here
  return final.join('');

}

LetterChanges("hello*3") //?
// → Ifmmp*3
LetterChanges("fun times!") //?
// → gvO Ujnft!