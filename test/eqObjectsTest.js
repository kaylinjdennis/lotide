const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when passed { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.isTrue((eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" })));
  });
  it('returns false when passed { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    assert.isFalse((eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })));
  });
  it('returns true when passed { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    assert.isTrue((eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })));
  });
  it('returns false when passed { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    assert.isFalse((eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })));
  });
});