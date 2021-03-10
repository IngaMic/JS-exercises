function solution(A) {
    let leftSum = 0;
    let rightSum = 0;
    let sumAll = 0;
    let differences = [];
    //condition: N is an integer within the range [2..100,000];
    //so the smallest A.length = 2
    if (A.length == 2) {
        return Math.abs(A[0] - A[1]);
    } else {
        for (let i = 0; i < A.length; i++) {
            sumAll = sumAll + A[i];
        }
        for (let j = 1; j < A.length - 1; j++) {
            leftSum = leftSum + A[j - 1];
            rightSum = sumAll - leftSum;
            // console.log("left and right :", leftSum, rightSum);
            differences.push(Math.abs(leftSum - rightSum));
            // console.log("differences :", differences);
        }
    }
    differences.sort(function (a, b) {
        return a - b;
    });
    return differences[0];
}
console.log(solution([3, 1, 2, 4, 3]));
