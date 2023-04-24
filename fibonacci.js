function fibs(n) {
  let fib = [];

  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else if (n >= 3) {
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  } else {
    return [];
  }
}

function fibsRec(num, seq = [0, 1]) {
  if (seq.length >= num) {
    return seq.slice(0, num);
  }

  let newNum = seq.at(-1) + seq.at(-2);
  seq.push(newNum);
  return fibsRec(num, seq);
}
