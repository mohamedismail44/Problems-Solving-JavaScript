// Code wars Kata8 Solutions

// You get an array of numbers, return the sum of all of the positives ones.

function sumOfPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}

console.log(sumOfPositive([1, -3, 5, 9]));
