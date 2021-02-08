const middle = function(array) {
  let newArr = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArr.push(array[(array.length / 2) - 1]);
      newArr.push(array[array.length / 2]);
    } else {
      newArr.push(array[Math.floor(array.length / 2)]);
    }
  }
  return newArr;
};

module.exports = middle;