'use strict';

const pow = function (a) {
  return a ** 2;
};

const powArrow = (a) => a ** 2; //Arrow function returns the a ** 2 without using return operation;

console.log(pow(4));
console.log(powArrow(4));

const multy = (x = 2, y = 10) => x * y; //Default values

console.log(multy(4));
console.log(multy());
