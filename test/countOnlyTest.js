const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {
  it('returns an object', () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.isObject(result);
  });
  it('returns correct number of each value in the array that was supposed to be counted', () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
    assert.strictEqual(result["Karima"], undefined);
    assert.strictEqual(result["Fang"], 2);
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});