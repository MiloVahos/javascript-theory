// Example of recusion for calc the factorial of a number
function fact(n) {
  return (n < 0) ? null : ( ( n !== 0 ) ? n * fact(n - 1) : 1 );
}
console.log(fact(8));

// Climbing factorital
// Same factorial but starting in 1 till n
function climbingFactorial(n, cont) {
  let count = (cont) ? cont : 1;
  if ( count === n ){
    return n;
  }
  return count * climbingFactorial(n, count+1);
}
console.log(climbingFactorial(8));