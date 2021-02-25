function solution(X, Y, D) {
    let result = 0;
    if (X == Y || X > Y) {
        return result;
    } else {
        while (X < Y) {
            result++;
            X = X + D;
        }
    }
    return result;
}
console.log(solution(10, 85, 30));
