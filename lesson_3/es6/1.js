'use strict';

var a = 5;
let b = 10;
const c = 35;

{
  var z = 15;
  //   let z = 25; // <- Can be accessed just inside entire block.
}

console.log(z);
