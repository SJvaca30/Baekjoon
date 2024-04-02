function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}


// 1. [i] !== [i+1]
// i = 1
// a, a

// 2. [i-1], [i+2]를 제거
