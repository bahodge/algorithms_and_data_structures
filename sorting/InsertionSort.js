const insertionSort = array => {
  console.log("Sorting: ", array);
  for (var i = 1; i < array.length; i++) {
    var currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};

const array1 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

// const array1 = [1, 60, 3, 35, 20];
// const array2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(insertionSort(array1));
console.log(insertionSort(array2));
