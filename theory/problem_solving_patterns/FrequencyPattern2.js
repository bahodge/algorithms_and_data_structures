"use strict;";

const same = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] == null) {
      return false;
    }
    if (frequencyCounter1[key ** 2] != frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [9, 4, 1]));
