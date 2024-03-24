function solution(s) {
  let count = 0; // 제거된 0 개수
  let depth = 0; // 이진 변환 횟수

  function convert(str) {
    // 1. 종료 조건
    if (str === "1") return;

    // 2. 0 제거 및 길이 계산
    const newStr = str.replace(/0/g, "");
    const length = newStr.length;

    // 3. 0 개수 카운팅
    count += str.length - length;

    // 4. 재귀 호출
    depth++;
    convert(length.toString(2));
  }

  convert(s);

  return [depth, count];
}
