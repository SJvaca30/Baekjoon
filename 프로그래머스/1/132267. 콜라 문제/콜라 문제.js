function solution(a, b, n) {
    let total = 0;
    while (n >= a) {
        let bottles = Math.floor(n / a);
        total += bottles * b;
        n = n % a + bottles * b;
    }
    return total;
}