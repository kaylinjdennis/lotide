const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns an object', () => {
    const counted = countLetters('Hello World');
    assert.isObject(counted);
  });
  it('returns correct values when passed "hello"', () => {
    const counted = countLetters('hello');
    assert.strictEqual(counted.h, 1);
    assert.strictEqual(counted.e, 1);
    assert.strictEqual(counted.l, 2);
    assert.strictEqual(counted.o, 1);
  });
});