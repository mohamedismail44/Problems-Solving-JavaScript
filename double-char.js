// Code wars Kata8 Solutions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}

console.log(doubleChar("ahmed"));
