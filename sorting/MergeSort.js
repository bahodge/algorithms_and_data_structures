const mergeSort = array => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
};

const merge = (left, right) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
};

const array1 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

// const list1 = [1, 60, 3, 35, 20];
// const list2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
