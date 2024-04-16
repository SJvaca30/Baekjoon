function solution(n, arr1, arr2) {
    let ARR1 =  arr1.map( el => {
        return Number(el.toString(2));
    } )
    let ARR2 =  arr2.map( el => {
        return Number(el.toString(2));
    } )
    
    let arr3 = [];
    let ARR3 = [];
    for ( let i = 0; i < n; i++ ){
        arr3.push((ARR1[i]+ARR2[i]).toString().padStart(n, '0'));
    }
    for ( let i = 0; i < n; i++ ){
        ARR3.push(arr3[i].split("").map( el => {
            if (el !== "0"){
                return "#";
            } else {
                return " ";
            }
        }).join(""))
    }

    return ARR3
}

                    // .padStart(n, '0')
// 1. arr1, arr2 배열의 원소를 각각 2진수로 변환한다.
// 2. arr1, arr2 배열의 원소의 원소(2진수)끼리 더해서 arr3을 만든다.
// 3. arr3 배열의 원소의 원소(2진수)의 각 숫자가 1이상이면 #을, 0이면 " "을 반환한다. 
