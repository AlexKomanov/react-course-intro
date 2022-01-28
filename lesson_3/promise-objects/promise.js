'use strict';

const sleepFunction = (timeToWait) =>
  new Promise((resolve, reject) => setTimeout(resolve, timeToWait));

sleepFunction(4000)
  .then(() => {
    return 'Data was recieved';
  })
  .then((data) => {
    console.log(data);
    throw Error('The data is BROKEN!');
    return 'Data was structured';
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
