const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] when passed ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('does not change original array', () => {
    const words = ['Hello', 'World', 'Goodbye'];
    tail(words);
    assert.deepEqual(words, ['Hello', 'World', 'Goodbye']);
  });
  it('returns empty array if passed array of less than two elements', () => {
    assert.deepEqual(tail([5]), []);
    assert.deepEqual(tail([]), []);
  });
});