// Code wars Kata8 Solutions

// N-th Power

// You are given an array with positive numbers and a non-negative number N.
// You should find the N-th power of the element in the array with the index N.

function index(array, n) {
  return array.length - 1 < n ? -1 : Math.pow(array[n], n);
}
console.log(index([1, 2, 3, 4], 2));
