// Code wars Kata8 Solutions

// When provided with a letter, return its position in the alphabet.

function position(letter) {
  const alphpet = "abcdefghijklmnopqrstuvwxyz";

  return `Position of alphabet: ${alphpet.indexOf(letter) + 1}`;
}
console.log(position("c"));
