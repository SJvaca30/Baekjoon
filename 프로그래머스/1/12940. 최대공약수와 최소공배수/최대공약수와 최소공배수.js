function solution(n, m) {

    function gcd(n, m) {
      while (m) {
        [n, m] = [m, n % m];
      }
      return n;
    }
    let a = gcd(n, m)
    let b = (n * m) / a
    return [a, b]
}
