function solution(S) {
    S = S.split("");
    let arr = [];
    for (let i = 0; i < S.length; i++) {
        let symbol = S[i];
        if (symbol == "{" || symbol == "(" || symbol == "[") {
            arr.push(symbol);
        } else if (symbol == "}" || symbol == ")" || symbol == "]") {
            let pair = arr.pop() + symbol;
            if (pair != "{}" && pair != "()" && pair != "[]") {
                return 0;
            }
        } else {
            return 0;
        }
    }
    if (arr.length > 0) {
        return 0;
    }
    return 1;
}

console.log(solution("{[()[]()]}"));
