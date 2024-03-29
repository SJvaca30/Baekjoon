// 자연수 n의 다음 큰 숫자를 찾는 함수
function solution(n) {
  // n을 2진수 문자열로 변환
  let binaryStr = n.toString(2);
  // 2진수 문자열에서 '1'의 개수를 카운트
  let countOne = binaryStr.split('1').length - 1;

  // n+1부터 1000000까지 탐색
  for (let i = n + 1; i <= 1000000; i++) {
    // i를 2진수 문자열로 변환
    let binaryStr2 = i.toString(2);
    // 2진수 문자열에서 '1'의 개수를 카운트
    let countOne2 = binaryStr2.split('1').length - 1;

    // n과 2진수로 변환했을 때 1의 개수가 같으면
    if (countOne2 === countOne) {
      // 2진수 문자열을 10진수로 변환하여 반환
      return parseInt(binaryStr2, 2);
    }
  }

  // 조건을 만족하는 숫자가 없으면 -1 반환
  return -1;
}
