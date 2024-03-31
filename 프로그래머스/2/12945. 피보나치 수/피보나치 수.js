function solution(n) {
  // 메모이제이션 테이블 생성
  const memo = new Array(n + 1).fill(-1);

  // 0번째와 1번째 피보나치 수 저장
  memo[0] = 0;
  memo[1] = 1;

  // 2번째부터 n번째까지 피보나치 수 계산
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }

  // n번째 피보나치 수 리턴
  return memo[n];
}

// 테스트 코드
const n1 = 3;
const result1 = solution(n1);
console.log(result1); // 2

const n2 = 5;
const result2 = solution(n2);
console.log(result2); // 5
