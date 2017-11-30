'use strict';

function insertDash(num) {
   var strNum = num.toString(); // convert num to string
   for (var i = 0; i < strNum.length-1; i++) { // loop through up to the last pair
     if(parseInt(strNum.charAt(i)) % 2 !== 0 && parseInt(strNum.charAt(i+1)) % 2 !== 0) { //Test if both at the characters are even numbers by dividing by 2 and returning the remainder
     strNum = insertChar(strNum, '-', i+1); // Use the new created function to insert
     i++ // Moves up index because the dash adds one to the index
     }
   }
   return strNum; //return altered string
}

function insertChar(strToChange, charToIns, indexToIns) { // function to insert a char at given index
  var beg = strToChange.slice(0, indexToIns); // slice beginning off
  var end = strToChange.slice(indexToIns, strToChange.length); //slice end off
  return beg + charToIns + end; // combine new string and return
}
