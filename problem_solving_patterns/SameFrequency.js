const sameFrequency = (x, y) => {
  if (x === y) return true;
  let frequency1 = buildFrequency(x);
  let frequency2 = buildFrequency(y);

  for (let key in frequency1) {
    if (frequency2[key] === undefined) return false;
    if (frequency2[key] != frequency1[key]) return false;
  }

  return true;
};

const buildFrequency = num => {
  let frequency = {};
  const stringNum = num.toString().split("");
  for (let n of stringNum) {
    if (frequency[n] === undefined) {
      frequency[n] = 1;
    } else {
      frequency[n] += 1;
    }
  }
  return frequency;
};

console.log(sameFrequency(123, 123));
console.log(sameFrequency(321, 123));
console.log(sameFrequency(3211, 123));
