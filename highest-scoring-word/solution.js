function high(x){
  let highScore = 0; // set the highest score to 0
  let finalWord; // make a space for the word that will be returned
  x = x.split(' '); // turn the sentence into individual words
  for (let i = x.length - 1; i >= 0; i --) { // for each word, starting at the back...
    let total = 0; // set a running total for the selected word
    for (let letter = 0; letter < x[i].length; letter ++) { // for each letter...
      total += x[i].charCodeAt(letter) - 96; // add unicode value to word total
    } // after accounting for every letter
    if (total >= highScore) { // if the word total is higher than the highest yet...
      highScore = total; // set the highest score to that total
      finalWord = x[i]; // set that word to be the current word to be returned
    }
  } // after all words have been cycled through
  return finalWord; // return the final highest word
}
