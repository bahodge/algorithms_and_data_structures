"use strict;";

const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(10));
console.log(factorial(50));
