"use strict;";

const same = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    count = frequencyCounter1[num ** 2] || 0;
    frequencyCounter1[num ** 2] = count + 1;
  }
  for (let num of arr2) {
    count = frequencyCounter2[num] || 0;
    frequencyCounter2[num] = count + 1;
  }

  for (let key in frequencyCounter2) {
    if (frequencyCounter2[key] != frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [9, 4, 1]));
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([5, 10], [25, 100, 10]));
