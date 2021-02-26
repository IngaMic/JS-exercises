function solution(X, A) {
    let setOfUnique = new Set();
    for (let i = 0; i < A.length; i++) {
        if (A[i] < X || A[i] === X) {
            setOfUnique.add(A[i]);
            //each element of array A is an integer within the range [1..X]
            //means no bigger than X
            if (setOfUnique.size === X) {
                return i;
            }
        }
    }
    return -1;
}
console.log(solution(5, [1, 3, 1, 3, 4, 3, 2, 3, 5, 4]));
