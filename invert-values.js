// Code wars Kata8 Solutions

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
//  and the negatives become positives.

function invert(array) {
  return array.map((x) => x * -1);
}

console.log(invert([1, 2, 3, 4, -5]));
