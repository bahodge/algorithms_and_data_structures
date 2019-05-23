"use strict;";

// O(1)
const addUpTo = n => (n * (n + 1)) / 2;

const startTime = Date.now();
console.log(addUpTo(100000000));
const endTime = Date.now();
time = endTime - startTime;
console.log(time / 1000);
