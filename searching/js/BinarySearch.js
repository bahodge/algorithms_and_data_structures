const search = (array, element) => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== element && start <= end) {
    if (element < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === element ? middle : -1;
};

const array1 = [...Array(20).keys()];
const array2 = [...Array(1000000).keys()];
console.log(search(array1, 3));
console.log(search(array1, 22));
console.log(search(array2, 15832));
