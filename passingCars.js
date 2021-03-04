function solution(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            for (let j = i; j < A.length; j++) {
                if (A[i] !== A[j]) {
                    count++;
                }
            }
        }
    }
    if (count > 1000000000) {
        return -1;
    }
    return count;
}

console.log(solution([0, 1, 0, 1, 0, 1, 1]));
