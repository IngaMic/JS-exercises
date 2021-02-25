function solution(A, B) {
    let alive = 0;
    //0 represents upstream
    //1 represents downstream
    let upstream = [];
    let downStream = [];

    for (let i = 0; i < A.length; i++) {
        if (B[i] === 0) {
            while (downStream.length > 0) {
                let fish = downStream.pop();
                if (fish > A[i]) {
                    downStream.push(fish);
                    break;
                }
            }
            if (downStream.length === 0) {
                upstream.push(A[i]);
            }
        } else {
            downStream.push(A[i]);
        }
    }
    return downStream.length + upstream.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
