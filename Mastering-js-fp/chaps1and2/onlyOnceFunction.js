'use strict'

const once = f => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    }
  };
};

const squeak = a => console.log(a + ' squeak!!');
squeak('one');
squeak('two');
squeak('three');

const squeakOnce = once(squeak);
squeakOnce('Only once');
squeakOnce('Only once 2');
squeakOnce('Only once 3');

// Upgrading the once function to do another thing after the first try

const once2 = (f, g = () => { console.log('do nothing') }) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
      g(...args);
    }
  };
}