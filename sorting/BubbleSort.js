"use strict";

const array1 = [1, 60, 3, 35, 20];
const array2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

const bubbleSort = arr => {
  let noSwaps;
  let stepCount = 1;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (var j = 0; j < arr.length; j++) {
      console.log(`Iterations: ${stepCount}`);
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      stepCount++;
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort(array1));
console.log("Done");
console.log(bubbleSort(array2));
