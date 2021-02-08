const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [3, 7, 5, 13, 10, 8];
const results2 = map(numbers, number => number * number);
assertArraysEqual(results2, [9, 49, 25, 169, 100, 64]);

const arr = ['hello', 7, true, undefined, [1, 2, 3]];
const results3 = map(arr, element => typeof element);
assertArraysEqual(results3, ['string', 'number', 'boolean', 'undefined', 'object']);

module.exports = map;