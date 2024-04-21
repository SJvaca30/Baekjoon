function solution(food) {
    let result = '';
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            result += i.toString();
        }
    }
    result += '0';
    for (let i = food.length - 1; i > 0; i--) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            result += i.toString();
        }
    }
    return result;
}