function solution(N) {
    let maxGap = 0;
    let newMaxGap = 0;
    let bin = N.toString(2);
    console.log("bin : ", bin);
    //highest index
    let i = bin.length - 1;
    for (i; i >= 0; i--) {
        if (bin.charAt(i) != "0") {
            break;
        }
    }

    for (let j = i - 1; j >= 0; j--) {
        if (bin.charAt(j) == "0") {
            newMaxGap++;
        } else {
            if (newMaxGap > maxGap) {
                maxGap = newMaxGap;
            }
            //reseting
            newMaxGap = 0;
        }
    }
    return maxGap;
}

console.log(solution(8562));
