function solution(S, K) {
    //If there is no such substring, your function should return −1.
    if (S.length <= K || K == 0) {
        return -1;
    }
    let result;
    let distinct_char_count = 0;
    let seen_chars = new Set();
    console.log(S.length);
    let candidate = "";
    let remaining_string = "";
    let log = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] !== S[i + 1]) {
            log.push(i + 1);
        }
        if (!seen_chars.has(S[i])) {
            seen_chars.add(S[i]);
            distinct_char_count++;
        }

        console.log("counter log", log);
        if (distinct_char_count > K) {
            console.log("I'm here");
            candidate = candidate + S[i];
            console.log("candidate", candidate);
            remaining_string = S.split(candidate).pop();
            console.log("remaining", remaining_string);
        }
    }
    return result;
}

console.log(solution("aacbca", 2));
