function solution(S) {
    let score = 0;
    for (let i = 0; i < S.length; i++) {
        switch (S[i]) {
            case "(":
                score++;
                break;
            case ")":
                score--;
                break;
        }
        if (score < 0) {
            return 0;
        }
    }
    if (score === 0) {
        return 1;
    }
    return 0;
}

console.log(solution("(()())"));
