// Code wars Kata8 Solutions

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((number) => number * x);
}
console.log(countBy(2, 5));
