function factorial(n: number): number {
  let fact: number = 1;
  while (n > 0) {
    fact *= n--;
  }
  return fact;
}

console.log(factorial(5));
