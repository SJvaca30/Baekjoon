function solution(s) {
  // lastPos 객체는 각 문자의 마지막 위치를 추적합니다.
  let lastPos = {};
  // result 배열은 각 문자의 마지막 위치와 현재 위치 사이의 거리를 저장합니다.
  let result = [];

  // 문자열 s를 순회합니다.
  for (let i = 0; i < s.length; i++) {
    // 만약 현재 문자가 이전에 나타난 적이 있다면,
    if (s[i] in lastPos) {
      // 현재 위치와 마지막 위치 사이의 거리를 result 배열에 추가합니다.
      result.push(i - lastPos[s[i]]);
    } else {
      // 만약 현재 문자가 처음 나타나는 경우, -1을 result 배열에 추가합니다.
      result.push(-1);
    }
    // 현재 문자의 마지막 위치를 현재 위치로 업데이트합니다.
    lastPos[s[i]] = i;
  }

  // result 배열을 반환합니다.
  return result;
}