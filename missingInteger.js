function solution(A) {
    A.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= 0) {
            return 1;
        } else if (A[i] + 1 !== A[i + 1] && A[i] !== A[i + 1]) {
            return A[i] + 1;
        }
    }
}

console.log(solution([1, 3, 6, 5, 1, 4, 1, 7, 9, 2]));
