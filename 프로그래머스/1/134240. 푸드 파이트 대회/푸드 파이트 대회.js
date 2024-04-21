// 푸드 파이트 대회의 음식 배치를 계산하는 함수
function solution(food) {
  // 결과를 저장할 문자열 초기화
  let result = "";

  // 음식 배열의 첫 번째 요소부터 중간까지 반복
  for (let i = 1; i < food.length; i++) {
    // 각 음식의 절반을 결과 문자열에 추가
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      result += i.toString();
    }
  }

  // 중간에 물을 추가
  result += "0";

  // 음식 배열의 마지막 요소부터 중간까지 역순으로 반복
  for (let i = food.length - 1; i > 0; i--) {
    // 각 음식의 절반을 결과 문자열에 추가
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      result += i.toString();
    }
  }

  // 결과 문자열 반환
  return result;
}
