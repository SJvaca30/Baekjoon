function solution(array, commands) {
  let results = [];

  for (let command of commands) {
    // 구조분해할당으로 각각 선언
    let [i, j, k] = command;

    // 잘라내기
    let cut = array.slice(i - 1, j);
    cut.sort((a, b) => a - b);

    results.push(cut[k - 1]);
  }

  // 결과를 반환합니다.
  return results;
}