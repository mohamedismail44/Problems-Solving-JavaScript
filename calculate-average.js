// Code wars Kata8 Solutions

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  return array.reduce((acc, current) => acc + current, 0) / array.length;
}

console.log(find_average([2, 3, 4, 5]));
