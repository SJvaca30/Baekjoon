// 유클리드 호제법으로 최대공약수 a구하기
function gcd(a, b) {
  if (b) {
    return gcd(b, a % b);
  } else {
    return a;
  }
}

// 최소공배수: 두 수의 곱을 최대공약수로 나눈거
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}
