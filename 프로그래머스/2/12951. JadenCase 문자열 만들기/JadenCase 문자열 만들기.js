function solution(s) {
  // 단어를 분리합니다.
  const words = s.split(' ');

  // 각 단어를 JadenCase로 변환합니다.
  const jadenCaseWords = words.map((word) => {
    const firstChar = word.charAt(0).toUpperCase();
    const restChars = word.slice(1, word.length).toLowerCase();
    return firstChar + restChars;
  });

  // 변환된 단어를 다시 공백으로 연결합니다.
  return jadenCaseWords.join(' ');
}
