function factorial(n) {
    let result = n,
    i = n - 1;
  for (i; i > 1; --i) {
    result *= i;
  }
  return result ||= 1;
}