'use strict';

const theName = 'Jhon';
const arrStr = ['Hello World', 'Hello ' + theName + '!', 'How Are You'].join(
  '\n'
);

console.log(arrStr);

const tempStr = `Hello World!
Hello ${theName}!
How Are You?`;

console.log(tempStr);
