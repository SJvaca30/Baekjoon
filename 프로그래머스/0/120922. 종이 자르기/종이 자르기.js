function solution(M, N) {
    let tmp = [];
    M === 1 && N === 1 ?  answer = 0 : "";
    
    tmp = [M, N].sort((a,b) => a-b);
    
    
    return (tmp[0]-1) + ((tmp[1]-1) * tmp[0])
}

// 2 2 : 3

// 2: 1
// 3: 2 2

// 2: 1
// 4: 3 3

// 2: 1
// 5: 4 4

// 3: 2
// 3: 2 2 2

// 4: 3
// 7: 6 6 6 6