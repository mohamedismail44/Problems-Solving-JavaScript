// Code wars Kata8 Solutions

// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x) {
  return x.reduce((acc, currentValue) => acc * currentValue);
}

console.log(grow([1, 2, 3, 4]));
