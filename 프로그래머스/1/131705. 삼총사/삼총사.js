function solution(numbers) {
  return numbers.reduce((count, num1, index1) => {
    for (let index2 = index1 + 1; index2 < numbers.length; index2++) {
      for (let index3 = index2 + 1; index3 < numbers.length; index3++) {
        if (num1 + numbers[index2] + numbers[index3] === 0) {
          count++;
        }
      }
    }
    return count;
  }, 0);
}