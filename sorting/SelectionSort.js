"use strict";

const selectionSort = array => {
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

const array1 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

// const array1 = [0, 1, 5, 3, 4, 1, 2];

console.log(selectionSort(array1));
console.log(selectionSort(array2));
