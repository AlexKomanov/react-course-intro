'use strict';

const obj = {
  name: 'James',
  last: 'Bond',
  id: '007',
  films: ['Dr. No', 'From Russia with Love', 'GoldFinger'],
  actor: {
    one: 'Shon Connery',
    second: 'Rojer Moor',
  },
};

const {
  name,
  last,
  id,
  films: [first, , third],
} = obj;

//Additional options
const {
  last: surname, //changes the parameter name
  id: secretId = '005',
  actor: { one: firstActor = 'Daniel Kreig', second },
} = obj;

// using a function

const showAgent = ({ last, actor: { one }, films }) => {
  console.log(last);
  console.log(one);
  console.log(films);
};

showAgent(obj);
