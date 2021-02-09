const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true when passed equal arrays of numbers', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('returns false when passed [1, 2, 3] and [3, 2, 1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it('returns true when passed equal arrays of strings', () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });
  it('returns true when passed ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2', 3]));
  });
});