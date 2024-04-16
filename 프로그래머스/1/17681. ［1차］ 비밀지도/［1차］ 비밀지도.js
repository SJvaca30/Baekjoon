function solution(n, arr1, arr2) {
  let ARR1 = arr1.map((el) => {
    return Number(el.toString(2));
  });
  let ARR2 = arr2.map((el) => {
    return Number(el.toString(2));
  });

  let ARR3 = [];
  let result = [];
  for (let i = 0; i < n; i++) {
    ARR3.push((ARR1[i] + ARR2[i]).toString().padStart(n, "0"));
  }

  for (let i = 0; i < n; i++) {
    result.push(
      ARR3[i]
        .split("")
        .map((el) => {
          if (el !== "0") {
            return "#";
          } else {
            return " ";
          }
        })
        .join("")
    );
  }

  return result;
}
