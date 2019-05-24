"use strict;";

const slidingWindow = (arr, set) => {
  if (arr.length < set) {
    return 0;
  }
  let max = 0;
  let temp = 0;

  for (let i = 0; i < set; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = set; i < arr.length; i++) {
    temp = temp - arr[i - set] + arr[i];
    max = Math.max(max, temp);
    console.log(temp, max);
  }

  return max;
};

console.log(slidingWindow([1, 2, 3, 4, 5, 2, 3, 4], 4));
