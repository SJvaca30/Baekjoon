function solution(n) {
  let binaryStr = n.toString(2);
  let countOne = binaryStr.split('1').length - 1;

  for (let i = n + 1; i <= 1000000; i++) {
    let binaryStr2 = i.toString(2);
    let countOne2 = binaryStr2.split('1').length - 1;

    if (countOne2 === countOne) {
      return parseInt(binaryStr2, 2);
    }
  }

  return -1;
}
