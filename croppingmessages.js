function solution(message, K) {
    const lng = message.length;
    if (lng < K) {
        return message;
    }
    const trimmed = message.substring(0, K + 1);
    const i = trimmed.lastIndexOf(" ");
    const result = trimmed.substring(0, i);
    return result;
}
// console.log(solution("Easy like Sunday Morning", 10));
// console.log(solution("Sunday Morning", 7));
