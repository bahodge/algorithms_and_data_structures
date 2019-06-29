const search = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return -1;
};

const array1 = [...Array(20).keys()];
const array2 = [...Array(1000000).keys()];
console.log(search(array1, 3));
console.log(search(array1, 22));
console.log(search(array2, 15832));
