function solution(s) {
    let last_occurrence = {};
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c in last_occurrence) {
            result.push(i - last_occurrence[c]);
        } else {
            result.push(-1);
        }
        last_occurrence[c] = i;
    }
    return result;
}