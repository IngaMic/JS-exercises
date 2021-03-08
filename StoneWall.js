function solution(H) {
    let arr = [H[0]];
    let block = 0;
    // H[0] is the height of the wall's left end
    // and H[N−1] is the height of the wall's right end
    for (let i = 1; i < H.length; i++) {
        if (H[i] < arr[arr.length - 1]) {
            block++;
            arr.pop();
            while (arr.length && arr[arr.length - 1] >= H[i]) {
                if (arr[arr.length - 1] > H[i]) {
                    block++;
                    arr.pop();
                } else if (arr[arr.length - 1] === H[i]) {
                    arr.pop();
                }
            }
            arr.push(H[i]);
        } else if (H[i] > arr[arr.length - 1]) {
            arr.push(H[i]);
        }
    }
    return block + arr.length;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
