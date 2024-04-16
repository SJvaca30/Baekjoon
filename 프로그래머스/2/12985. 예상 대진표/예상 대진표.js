function solution(N, A, B, round = 1) {
    if (Math.ceil(A / 2) === Math.ceil(B / 2)) {
        return round;
    } else {
        return solution(N, Math.ceil(A / 2), Math.ceil(B / 2), round + 1);
    }
}