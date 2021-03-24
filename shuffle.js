function solution(A) {
    let output = "";
    const numString = A.toString();
    for (let i = 0; i < numString.length; i++) {
        if (i % 2 == 0) {
            output = output + numString[Math.floor(i / 2)];
        } else {
            output =
                output + numString[numString.length - Math.floor(i / 2 + 1)];
        }
    }
    const result = parseInt(output, A.length);
    return result;
}

// console.log(solution(123456))
// console.log(solution(130));
