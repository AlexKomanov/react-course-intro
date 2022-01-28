'use strict';

const arr = [1, 2, 3];

const [x, y, z] = arr;

// Additional options
const [x, , z] = arr;
const [x, y, z = 15] = arr;
const [x, ...newArr] = arr;
