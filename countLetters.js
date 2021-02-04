const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  for (let char of str) {
    if (char !== ' ') {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

let counted = countLetters('Hello World');

assertEqual(counted.l, 3);
assertEqual(counted.o, 2);
assertEqual(counted.e, 1);