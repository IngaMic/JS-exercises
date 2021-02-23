function solution(A, K) {
    let last = A.length - 1;

    for (let i = 0; i < K; i++) {
        let lastNum = A[last];
        console.log(lastNum);
        A.pop();

        A.unshift(lastNum);
    }
    return A;
}
console.log(solution([3, 8, 9, 7, 6], 3));
