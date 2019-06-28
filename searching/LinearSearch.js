"use strict";

const list = [...Array(20).keys()];
let steps = 0;

const linearSearch = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    steps += 1;
    if (array[i] === element) return i;
  }
  return -1;
};

console.log("Looking for: 3");
console.log(linearSearch(list, 3));
console.log(`Took ${steps} to find`);

console.log("Looking for: 18");
console.log(linearSearch(list, 18));
console.log(`Took ${steps} to find`);
