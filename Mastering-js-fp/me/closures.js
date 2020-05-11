function newCounter() {
  let count = 0;
  return function () {
    count ++;
    return count;
  };
}

const nc = newCounter();
console.log(nc());
console.log(nc());
console.log(nc());

function shortNewCounter() {
  let count = 0;
  return () => count++;
}

const snc = shortNewCounter();
console.log(snc());
console.log(snc());
console.log(snc());
console.log(snc());
console.log(snc());