function capitalize(s,arr){
  let letters = s.split('');
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) letters[i] = letters[i].toUpperCase();
    }
  }
  return letters.join('');
};
