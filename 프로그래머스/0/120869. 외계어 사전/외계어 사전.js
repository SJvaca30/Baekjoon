function solution(spell, dic) {
    let tempSp = spell.sort().join("");
    let temp = 0;
    dic.forEach((el) => {
        let tempDi = el.split("").sort().join("");
        tempSp === tempDi ? temp = 1 : "";
    })
    return temp === 1 ? 1 : 2;
}



// function solution(spell, dic) {
//     let result = "";
//     dic.forEach((el1) => {
//         let temp = 0;
//         if (el1.length === spell.length ) {
//             el1.split("").forEach((el2) => {
//                 for ( let i = 0; i < spell.length; i++ ) {
//                     if (spell[i] === el2) {
//                         temp += 1
//                     }
//                     console.log(spell[i], el2, temp)
//                 }
//             })
//         }
//         if ( temp === spell.length ) {
//             result = 1
//         } else {
//             result = 2
//         }
//     })
//     return result
// }




// *검증과정*
// 1. dic 쪼개기
// 2. spell과 dic 각각 맞춰보기
// 2-1. spell이 더 긴 경우
//     -> break
// 2-2. dic가 더 긴 경우 ⭐️⭐️⭐️⭐️⭐️
//     -> break
// 3. 

// *방법1*
// sort로 dic를 정렬 후 spell과 ===를 한다.
// 이 방법은 이 문제에서만 쓸 수 있다.

// *방법2*
// spell과 dic의 index를 각각 비교한다.
// 이 방법은 여러 상황에서도 다양하게 응용이 가능하다. 
