function isNice(arr){
  let states = [];
  for (let i = 0; i < arr.length; i++) {
    states.push('false');
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] - 1 || arr[i] === arr[j] + 1) states[i] = 'true';
    }
  }
  for (let k = 0; k < states.length; k++) if (states[k] === 'false') return false;
  return states.length !== 0 ? true : false;
}
