function solution(A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
        if (!arr[A[i]]) {
            arr[A[i]] = 1;
        } else {
            arr[A[i]]++;
        }
        if (arr[A[i]] > A.length / 2) {
            // the function may return 0, 2, 4, 6 or 7:
            return i;
        }
    }
    return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
