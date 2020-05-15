const callNTimes = (f, n) => {
  return (...args) => {
    if (n !== 0) {
      n--;
      f(...args);
    }
  };
}

let sayA = () => console.log('A');
let fiveTimes = callNTimes(sayA, 5);
fiveTimes();
fiveTimes();
fiveTimes();
fiveTimes();
fiveTimes();
fiveTimes();
fiveTimes();
