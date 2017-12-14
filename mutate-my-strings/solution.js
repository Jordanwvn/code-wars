function mutateMyStrings(stringOne, stringTwo){
  let one = stringOne.split(''), two = stringTwo.split('');
  let endString = stringOne.concat('\n');
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      one[i] = two[i];
      endString = endString.concat(`${one.join('')}\n`);
    }
  }
  return endString;
}
