"use strict";

const array = [1, 60, 3, 35, 20];

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(array));
