function solution(A) {
    let nextInd = 0;
    // two-dimensional array    // result in string
    let result = A[0][0].toString();
    //has to reach bottom right, so directions right and down:
    let right;
    let down;
    let nextRight;
    let nextdown;

    for (let i = 0; i < A.length; i++) {
        let row = A[i];
        for (let j = 0; j < row.length; j++) {
            right = row[nextInd + 1];
            nextRight = row[nextInd + 2];
            if (i + 2 < A.length) {
                down = A[i + 1][nextInd];
                if (i + 2 < A.length) {
                    nextdown = A[i + 2][nextInd];
                }
            } else {
                for (let k = nextInd + 1; k < row.length; k++) {
                    result = result + row[k].toString();
                }
                break;
            }
            if (
                (down == right && nextRight > nextdown) ||
                (right > down && nextInd + 1 <= row.length)
            ) {
                result = result + right.toString();
                nextInd++;
            } else {
                result = result + down.toString();
                break;
            }
        }
    }
    return result;
}

console.log(
    solution([
        [9, 9, 7],
        [9, 7, 2],
        [6, 9, 5],
        [9, 1, 2],
    ])
);
console.log(
    solution([
        [9, 9, 1, 9, 9],
        [1, 9, 1, 9, 9],
        [9, 9, 9, 1, 9],
        [9, 1, 9, 9, 1],
        [9, 9, 1, 9, 9],
        [9, 9, 9, 8, 1],
    ])
);
