const LetterCapitalize = str =>str.split(' ').map(w =>  w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

LetterCapitalize('hellow world') //?
// → 78