// Code wars Kata8 Solutions

// Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
//  If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  "use strict";
  if (numbers.length < 0) {
    return 0;
  }
  return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(sum([2, 3, 5, -1]));
