function formatWords(words){
  if (!words) return '';
  words = words.filter(word => word.length > 0);
  return words.slice(0,-2).join(', ')
  + (words.length > 2 ? ', ' : '')
  + words.slice(-2).join(' and ');
}
