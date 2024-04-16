function solution(array, commands) {
    let results = [];
    for (let command of commands) {
        let [i, j, k] = command;
        let sliced = array.slice(i-1, j);
        sliced.sort((a, b) => a - b);
        results.push(sliced[k-1]);
    }
    return results;
}