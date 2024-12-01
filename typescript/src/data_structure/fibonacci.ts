function fibonacci(n: number) {
  const fib: number[] = [1, 2];
  for (let i: number = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10));
