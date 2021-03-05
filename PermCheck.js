function solution(A) {
    A.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < A.length; i++) {
        //sequence containing each element !from 1! to N once
        if (A[i] != i + 1) {
            return 0;
        }
    }
    return 1;
}

console.log(solution([4, 1, 5, 3, 2]));
