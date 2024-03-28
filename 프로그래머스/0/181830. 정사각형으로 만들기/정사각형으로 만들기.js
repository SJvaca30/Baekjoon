function solution(arr) {
    if ( arr.length > arr[0].length) {
        let a = arr.reduce((acc, curr) => {
            let newArray = [...curr, ...Array(arr.length-arr[0].length).fill(0)];
            return [...acc, newArray];
        }, [])
        return a;
    };
    
    if ( arr.length < arr[0].length) {
        let a = [...arr];
        for( let i = 1; i <= arr[0].length-arr.length; i++) {
            a.push(Array(arr[0].length).fill(0))
        }
        return a;
    }
    
    if ( arr.length === arr[0].length) {
        return arr;
    }
}

