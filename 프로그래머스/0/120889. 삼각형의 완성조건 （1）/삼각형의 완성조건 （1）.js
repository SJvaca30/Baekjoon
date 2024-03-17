function solution(sides) {
    let maxNum = Math.max(...sides);
    let sum = sides.reduce( (acc, curr) => curr+acc,0 ) - maxNum
    let result = maxNum < sum ?  1 :  2;
    return result;
}

