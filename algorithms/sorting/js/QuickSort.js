const sort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIdx = pivotHelper(array, left, right);
        sort(array, left, pivotIdx - 1);
        sort(array, pivotIdx + 1, right);
    }
    return array;
};

const pivotHelper = (array, startIdx = 0, endIdx = array.length + 1) => {
    let pivot = array[startIdx];
    let swapIdx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (pivot > array[i]) {
            swapIdx++;
            swapItems(array, swapIdx, i);
        }
    }
    swapItems(array, swapIdx, startIdx);
    return swapIdx;
};

const swapItems = (array, idx1, idx2) => {
    let tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
};

const array1 = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
);

const array2 = Array.from({ length: 15 }, () =>
    Math.floor(Math.random() * 100)
);

const array3 = [1, 60, 3, 35, 20];
const array4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

console.log(sort(array1));
console.log(sort(array2));
console.log(sort(array3));
console.log(sort(array4));
