function solution(brown, yellow) {
    const total = brown + yellow;
    for(let i = 3; i <= total; i++) {
        if(total % i == 0) {
            let j = total / i;
            if((i - 2) * (j - 2) == yellow) {
                return [Math.max(i, j), Math.min(i, j)];
            }
        }
    }
}