function solution(A) {
    if (A.length < 3) {
        return 0;
    }
    let P;
    let Q;
    let R;
    A.sort(function (a, b) {
        return a - b;
    });
    console.log(A);
    for (let i = 0; i < A.length - 2; i++) {
        if (A[i + 2] - A[i + 1] < A[i]) {
            return 1;
        }
    }
    return 0;
}
console.log(solution([10, 2, 5, 1, 8, 20]));
