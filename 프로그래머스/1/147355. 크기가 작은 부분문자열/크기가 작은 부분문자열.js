function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;
  const pNum = parseInt(p);
  let count = 0;

  for (let i = 0; i <= tLen - pLen; i++) {
    const subStr = t.substring(i, i + pLen);
    const subNum = parseInt(subStr);

    if (subNum <= pNum) {
      count++;
    }
  }

  return count;
}
