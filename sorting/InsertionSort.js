const insertionSort = arr => {
  console.log("Sorting: ", arr);
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

const list1 = [1, 60, 3, 35, 20];
const list2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(insertionSort(list1));
console.log(insertionSort(list2));
