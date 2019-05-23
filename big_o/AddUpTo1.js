"use strict;";

// O(n)
const addUpTo = n => {
  running_total = 0;
  for (let i = 1; i <= n; i++) {
    running_total += i;
  }
  return running_total;
};

const startTime = Date.now();
console.log(addUpTo(100000000));
const endTime = Date.now();
time = endTime - startTime;
console.log(time / 1000);
