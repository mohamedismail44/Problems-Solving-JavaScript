// Code wars Kata8 Solutions

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  "Abba";
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("Hello"));
