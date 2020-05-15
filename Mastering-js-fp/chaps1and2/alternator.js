const alternator = (f, g) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
      done = false;
      g(...args);
    }
  };
}

let A = () => console.log('A');
let B = () => console.log('B');
let alt = alternator(A,B);
alt();
alt();
alt();
alt();
alt();
