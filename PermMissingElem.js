function solution(A) {
    A.sort(function (a, b) {
        return a - b;
    });
    let result = A[0];
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        console.log("A[i] + 1 :", A[i] + 1);
        console.log("A[i + 1] :", A[i + 1]);
        if (A[i] + 1 == A[i + 1]) {
            console.log(A[i] + 1);
            result = A[i] + 1;
        } else {
            return result + 1;
        }
    }
}
console.log(solution([7, 4, 2, 5, 3, 8, 6, 10, 9, 12]));
