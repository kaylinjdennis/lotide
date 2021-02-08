const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  let keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  a: 1,
  b: 2,
  c: 3,
  d: 4
}, x => x === 3), 'c');

assertEqual(findKey({
  a: 1,
  b: 2,
  c: 3,
  d: 4
}, x => x === 7), undefined);

module.exports = findKey;