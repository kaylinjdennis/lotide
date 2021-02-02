const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('💚💚💚 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('💔💔💔 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

// Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

assertEqual('Hello', 'Hello');
assertEqual('Hello', 'hello');
assertEqual(7, 15);
assertEqual(4, 4);