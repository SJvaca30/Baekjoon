function solution(picture, k) {
    return picture.flatMap(line => Array(k).fill(line.split('').map(char => char.repeat(k)).join('')));
}