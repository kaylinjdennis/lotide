const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2);
assertEqual(result1[0], "Lighthouse");
assertEqual(result1[1], "Labs");

const words = ['Hello', 'World', 'Goodbye'];
tail(words);
assertEqual(words.length, 3);

const result2 = tail([5]);
assertEqual(result2.length, 0);

const result3 = tail([]);
assertEqual(result3.length, 0);