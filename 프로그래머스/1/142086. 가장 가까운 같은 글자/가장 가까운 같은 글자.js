function solution(s) {
  // 결과를 저장할 빈 배열을 초기화합니다.
  const result = [];
  // 각 문자의 마지막 인덱스를 저장할 빈 객체를 초기화합니다.
  const lastSeen = {};

  // 문자열 s를 왼쪽에서 오른쪽으로 순회합니다.
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // 만약 c가 lastSeen에 있다면, result에 i - lastSeen[c]를 추가합니다.
    if (c in lastSeen) {
      result.push(i - lastSeen[c]);
    }
    // 그렇지 않다면, result에 -1을 추가합니다.
    else {
      result.push(-1);
    }

    // lastSeen[c]를 i로 업데이트합니다.
    lastSeen[c] = i;
  }

  // 결과를 반환합니다.
  return result;
}