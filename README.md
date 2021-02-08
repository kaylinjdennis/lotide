# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaylinjdennis/lotide`

**Require it:**

`const _ = require('@kaylinjdennis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of an array
* `tail(array)`: returns a new array of all but the first element of given array
* `middle(array)`: returns an array of the middle element(s) of a given array
* `assertArraysEqual(arr1, arr2)`: asserts that two given arrays are equal
* `assertEqual(actual, expected)`: asserts that two values are equal
* `assertObjectsEqual(actual, expected)`: asserts that two objects are equal
* `countLetters(str)`: returns an object of the number of times each letter in a string appears
* `countOnly(allItems, itemsToCount)`: returns an object containing the number of times items specified to be counted appear in the given array
* `eqArrays(arr1, arr2)`: checks whether or not two arrays are equal
* `eqObjects(obj1, obj2)`: checks whether or not two objects are equal
* `findKey(object, callback)`: returns key described by calllback function
* `findKeyByValue(object, value)`: returns key with specified value
* `letterPositions(sentence)`: returns object of what positions each letter in a string was found at
* `map(array, callback)`: returns an array that has had the callback function called on each element
* `takeUntil(array, callback)`: returns an array of all elements in the given array until the callback function returns true
* `without(source, itemsToRemove)`: returns an array with specified items removed