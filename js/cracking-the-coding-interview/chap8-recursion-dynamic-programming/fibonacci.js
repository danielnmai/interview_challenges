function fib(n) {

  const memo = new Array(n + 1).fill(0);

  function fibWithMemo(i) {
    if(i == 0 || i === 1) return i;
    
    if(memo[i] === 0) {
      memo[i] = fibWithMemo(i - 1) + fibWithMemo(i - 2);
    }

    return memo[i];
  
  }
  return fibWithMemo(n);
}

console.log(fib(50));
