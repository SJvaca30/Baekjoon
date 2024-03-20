function solution(arr) {
  let prev = arr[0];
  let result = [prev];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== prev) {
      result.push(arr[i]);
      prev = arr[i];
    }
  }

  return result;
}