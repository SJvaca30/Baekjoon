function solution(n, m) {
  if (m > n) return 0; // m > n인 경우는 0으로 처리

  let result = 1;
  for (let i = 1; i <= m; i++) {
    result *= n - i + 1; // n - i + 1부터 n까지 곱하기
    result /= i; // 1부터 i까지 나누기
  }

  return result;
}
