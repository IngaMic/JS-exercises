function solution(A) {
    let value;
    let ind;
    A.sort(function (a, b) {
        return a - b;
    });
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        value = A[0];
        if (A[1] == value) {
            A.splice(0, 1);
            ind = A.indexOf(value);

            if (A.indexOf(value) !== -1) {
                A.splice(0, 1);
            }
        }
    }
    return value;
}
console.log(
    "solution :",
    solution([9, 1.2, 3, 1, 8, 1, 8, 1, 6, 7, 1, 1.2, 3, 9, 7])
);
