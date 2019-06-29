const mergeSort = array => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
};

const merge = (array1, array2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }
  return results;
};

const list1 = [1, 60, 3, 35, 20];
const list2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(mergeSort(list1));
console.log(mergeSort(list2));

// const sortedArray1 = [1, 3, 5];
// const sortedArray2 = [2, 4, 6];

// console.log(merge(sortedArray1, sortedArray2));
