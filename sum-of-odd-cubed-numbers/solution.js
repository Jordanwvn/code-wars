function cubeOdd(arr) {
  return arr.length === 0 // if the array is empty..
  || arr.filter(x => x % 2 === 1 || x % 2 === -1).length === 0 ? 0 // or there are no odds, return 0
  : arr.filter(x => typeof x !== 'number').length > 0 ? undefined // if there are non-numbers, return undefined
  : arr // otherwise, return the array, once you:
    .map(x => x * x * x) // cube every item
    .filter(x => x % 2 === 1 || x % 2 === -1) // filter out the even numbers
    .reduce( (acc, curr) => acc + curr); // return only the sum
}
