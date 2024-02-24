// Code wars Kata8 Solutions

// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

var summation = function (num) {
  return Array(num)
    .fill(true)
    .reduce((acc, curretValue, index) => acc + index + 1, 0);
};

console.log(summation(10));
