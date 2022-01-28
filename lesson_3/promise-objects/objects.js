'use strict';

const firstName = 'James';
const lastName = 'Bond';
const propsValue = 'age';

const objOld = {
  firstName: firstName,
  lastName: lastName,
  sayHello: function () {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
  },
};

objOld[propsValue] = 55;

console.log(objOld);
objOld.sayHello();

const objNew = {
  firstName,
  lastName,
  sayHello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
  [propsValue]: 55,
};

objNew.sayHello();
console.log(objNew);
