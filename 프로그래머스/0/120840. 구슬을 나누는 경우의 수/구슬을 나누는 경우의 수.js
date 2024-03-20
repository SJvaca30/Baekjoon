function solution(n, m) {
  if (n < m) return 0;
  if (n === m || m === 0) return 1;
  let result = 1;
  for (let i = 0; i < m; i++) {
    result *= n - i;
    result /= i + 1;
  }
  return result;
}