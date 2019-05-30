"use strict;";

const factorial = num => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return console.log(total);
};

factorial(10);
factorial(50);
