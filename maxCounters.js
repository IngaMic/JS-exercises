//lesson 4: not sure about solution

function solution(N, A) {
    let max = 0;
    let maxCounter = 0;
    let counters = Array(N).fill(max);

    for (let operation of A) {
        if (operation <= N && operation >= 1) {
            maxCounter = 0;
            if (++counters[operation - 1] > max) {
                max = counters[operation - 1];
            }
        } else if (operation === N + 1 && maxCounter === 0) {
            maxCounter = 1;
            for (let i = 0; i < counters.length; i++) {
                counters[i] = max;
            }
        }
    }
    return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
