function factorial(balls) {
 if (balls === 0) return 1;
 return balls * factorial(balls - 1);
}

function solution(balls, share) {
 if (share > balls) return 0;

 return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}
