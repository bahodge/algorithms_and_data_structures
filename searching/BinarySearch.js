"use strict";

const list = [...Array(20).keys()];

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  let stepsToFind = 0;
  while (arr[middle] !== elem && start <= end) {
    stepsToFind += 1;
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  console.log(`Steps To Find: ${stepsToFind}`);
  return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch(list, 13));
console.log(binarySearch(list, 2));
