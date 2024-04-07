// n명의 사람들이 끝말잇기를 하는 함수
function solution(n, words) {
    // 이미 말한 단어를 저장하는 집합
    const saidWords = new Set();
    let prevWord = words[0];
    saidWords.add(prevWord);

    // 단어 배열을 반복
    for (let i = 1; i < words.length; i++) {
        // 만약 단어가 집합에 있거나 이전 단어의 마지막 문자와 현재 단어의 첫 문자가 같지 않다면
        if (saidWords.has(words[i]) || prevWord[prevWord.length - 1] !== words[i][0]) {
            // 사람 번호와 차례를 반환
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 단어를 집합에 추가
        saidWords.add(words[i]);
        prevWord = words[i];
    }

    // 아무도 탈락하지 않는다면, [0, 0]을 반환
    return [0, 0];
}