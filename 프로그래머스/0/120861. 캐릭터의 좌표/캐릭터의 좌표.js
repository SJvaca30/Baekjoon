function solution(keyinput, board) {
    let position = [0, 0];
    let maxMove = [parseInt(board[0]/2), parseInt(board[1]/2)];
    keyinput.forEach(el => {
        if (el === "up" && position[1] < maxMove[1]) position[1] += 1;
        if (el === "down" && position[1] > -maxMove[1]) position[1] -= 1;
        if (el === "right" && position[0] < maxMove[0]) position[0] += 1;
        if (el === "left" && position[0] > -maxMove[0]) position[0] -= 1;
    })
    return position;
}


// 위  [0, 1]
// 아래 [0, -1]
// 오른쪽 [1, 0]
// 왼쪽 [-1, 0]
