function solutionS(A) {
    A.sort(function (a, b) {
        return a - b;
    });

    let option1 = A[0] * A[1] * A[A.length - 1];
    //console.log("AAA :", A[0], A[1], A[A.length - 1]);

    let option2 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    //console.log("AAA :", A[A.length - 1], A[A.length - 2], A[A.length - 3]);

    return Math.max(option1, option2);
}

///////////////////////////////////////////
//without sorting

function solution(A) {
    //N is an integer within the range [3..100,000];
    if (A.length == 3) {
        return A[0] * A[1] * A[2];
    }
    //each element of array A is an integer within the range [−1,000..1,000].
    let n1 = -1001;
    let n2 = -1001;
    let n3 = -1001;
    let p1 = 1001;
    let p2 = 1001;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > n1) {
            n3 = n2;
            n2 = n1;
            n1 = A[i];
        } else if (A[i] > n2) {
            n3 = n2;
            n2 = A[i];
        } else if (A[i] > n3) {
            n3 = A[i];
        }
        if (A[i] < p1) {
            p2 = p1;
            p1 = A[i];
        } else if (A[i] < p2) {
            p2 = A[i];
        }
    }

    option1 = n1 * n2 * n3;
    option2 = n1 * p1 * p2;
    // console.log("option1, option2 :", option1, option2);
    return Math.max(option1, option2);
}
console.log(solution([-3, 1, 2, -2, 5, 6]));
