// Code wars Kata8 Solutions

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x
    .map((n) => Number(n))
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sumMix([3, "9", 5, "10", "13", 5]));
