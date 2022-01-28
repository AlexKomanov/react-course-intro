'use strict';

const foo = (a, b, ...args) => {
  console.log(args);
};

foo(1, 2, 3, 4, 5, 6, 7);
