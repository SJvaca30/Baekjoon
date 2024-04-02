function solution(sizes) {
    // 각 원소를 정렬
    sizes = sizes.map(size => size.sort((a, b) => a - b));

    // 각 원소의 첫 번째 요소 중 가장 큰 값 찾기
    let maxFirst = Math.max(...sizes.map(size => size[0]));

    // 각 원소의 두 번째 요소 중 가장 큰 값 찾기
    let maxSecond = Math.max(...sizes.map(size => size[1]));

    // 두 가장 큰 값을 곱하여 결과 반환
    return maxFirst * maxSecond;
}




// 1. 각 원소들을 정렬
// 2. 각 원소들의 0 index에서 제일 큰 것 뽑아
// 3. 각 원소들의 1 index에서 제일 작은 것 뽑아
// 4. 둘이 곱한 것을 return 