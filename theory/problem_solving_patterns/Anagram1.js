"use strict;";

const validAnagram = (str1, str2) => {
    if (!compareLengths(str1, str2)) {
      return false;
    }
    let frequency1 = buildFrequency(str1);
    let frequency2 = buildFrequency(str2);
  
    if (!compareKeys(frequency1, frequency2)) return false;
  
    for (let key in frequency1) {
      if (frequency1[key] != frequency2[key]) return false;
    }
    return true;
  };
  
  const compareLengths = (str1, str2) => str1.length == str2.length;
  
  const buildFrequency = str => {
    let frequency = {};
    let splitStr = str.split("");
    for (let char of splitStr) {
      if (frequency[char]) {
        frequency[char] += 1;
      } else {
        frequency[char] = 1;
      }
    }
    return frequency;
  };
  
  const compareKeys = (frequency1, frequency2) => {
    let keys = Object.keys(frequency1);
    for (let k of keys) {
      if (frequency2[k] === undefined) return false;
    }
    return true;
  };
console.log(validAnagram("cat", "doggo"));
console.log(validAnagram("cat", "dog"));
console.log(validAnagram("god", "dog"));
