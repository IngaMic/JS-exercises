function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sorted = A.sort();
    let result;
    for (let i = 0; i < sorted.length; i++) {
        let first = A[i];
        let second = A[i+1]
        if(first === second){
            i++
        } else {
            result = first;
        }
    }
    return result;
}
console.log(
    "solution :",
    solution([9, 1.2, 3, 1, 8, 1, 8, 1, 6, 7, 1, 1.2, 3, 9, 7])
);
