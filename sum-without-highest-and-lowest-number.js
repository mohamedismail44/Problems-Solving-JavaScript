// Code wars Kata8 Solutions

// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array

function sumWithoutTheHeighestAndLowestNumber(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
console.log(
  sumWithoutTheHeighestAndLowestNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])
);
