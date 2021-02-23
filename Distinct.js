function solution(A) {
    let newArr = new Set();
    for (let i = 0; i < A.length; i++) {
        newArr.add(A[i]);
    }
    //console.log(newArr);
    return newArr.size;
}
console.log(solution([2, 2, 1, 3, 1, 1]));
