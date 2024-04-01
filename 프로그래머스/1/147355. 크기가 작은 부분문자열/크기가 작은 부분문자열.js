// function solution(t, p) {
//   const tLen = t.length;
//   const pLen = p.length;
//   const pNum = parseInt(p);
//   let count = 0;

//   for (let i = 0; i <= tLen - pLen; i++) {
//     const subStr = t.substring(i, i + pLen);


//     if (subNum <= pNum) {
//       count++;
//     }
//   }

//   return count;
// }

//https://g.co/gemini/share/235e8fa2bc4b

function solution(t, p) {
    let temp = "";
    let answer = 0;
    let tL = t.length
    let pL = p.length
    for( let i = 0; i < (tL-pL+1); i++) {
        temp = Number(t.slice(i,i+pL));
        if (temp <= Number(p)) {
            answer += 1
        }
    }
    return answer
}