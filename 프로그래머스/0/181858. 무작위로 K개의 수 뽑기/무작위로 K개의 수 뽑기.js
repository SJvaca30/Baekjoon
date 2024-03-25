function solution(arr, k) {
  const result = new Array(k).fill(-1);
  const seen = {};
  for (const num of arr) {
    seen[num] = false;
  }

  for (const num of arr) {
    if (seen[num]) {
      continue;
    }

    seen[num] = true;
    result[result.findIndex(el => el === -1)] = num;
  }

  return result;
}
