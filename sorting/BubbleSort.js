"use strict";

const sort = array => {
  let noSwaps;

  for (let i = 0; i < array.length; i++) {
    noSwaps = true;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

const array1 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

// const array1 = [1, 60, 3, 35, 20];
// const array2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(sort(array1));
console.log(sort(array2));
