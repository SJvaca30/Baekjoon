function isCorrectBracket(s) {
  let leftCount = 0;
  let rightCount = 0;

  for (const char of s) {
    if (char === '(') {
      leftCount++;
    } else if (char === ')') {
      rightCount++;
    }

    if (rightCount > leftCount) {
      return false;
    }
  }

  return leftCount === rightCount;
}

function solution(s) {
  return isCorrectBracket(s);
}
