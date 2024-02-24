// Code wars Kata8 Solutions

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
}

console.log(digitize(123456789));
