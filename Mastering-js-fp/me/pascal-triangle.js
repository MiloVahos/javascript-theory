for ( let n = 0; n < 20; n++ ) { // Pascal triangle for powers 0 - 9
  let Xk = 1;
  let Xk_1 = 1;
  process.stdout.write(`${Xk} `);
  if( n > 0) {
    for( let k = 1; k <= n; k++) {
      Xk = (Xk_1 * ( n - k + 1 ))/k;
      Xk_1 = Xk;
      process.stdout.write(`${Xk} `);
    }
  }
  process.stdout.write('\n');
}