function solution(ineq, eq, n, m) {
  // <
  if (ineq === "<") {
    // <=
    if (eq === "=") {
      return n <= m ? 1 : 0;
           // <!
    } else if (eq === "!") {
      return n < m ? 1 : 0;
    }
  // >
  } else if (ineq === ">") {
    // >=
    if (eq === "=") {
      return n >= m ? 1 : 0;
           // >!
    } else if (eq === "!") {
      return n > m ? 1 : 0;
    }
  }

  // ineq 또는 eq가 유효하지 않은 경우
  return 0;
}