"use strict;";

const same = (arr1, arr2) => {
  comparisonArray = [];
  for(let i = 0; i < arr1.length; i++) {
    comparisonArray.push(arr1[i] * arr1[i]);
  }

  console.log(comparisonArray)
  console.log(arr2)

  return comparisonArray == arr2;
};

console.log(same([1, 2, 3], [1, 4, 9]));
