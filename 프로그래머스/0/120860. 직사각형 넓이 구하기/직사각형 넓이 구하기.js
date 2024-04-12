
function solution(dots) {
    let x = dots.map(dot => dot[0]);
    let y = dots.map(dot => dot[1]);

    let length = Math.max(...x) - Math.min(...x);
    let width = Math.max(...y) - Math.min(...y);

    return length * width;
}