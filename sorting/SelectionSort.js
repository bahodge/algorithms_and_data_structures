"use strict";

const sort = array => {
  const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(array, i, lowest);
  }

  return array;
};

const array1 = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * 100)
);

const array3 = [1, 60, 3, 35, 20];
const array4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(sort(array1));
console.log(sort(array2));
console.log(sort(array3));
console.log(sort(array4));
