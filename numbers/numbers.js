(function () {
    var deNu = [
        "ein",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn",
    ];
    var given;

    $(document).ready(function () {
        $("#button").on("click", function () {
            function askForNumber() {
                // $(".answer").empty();
                var num = prompt("Please enter a number between 1 and 10");
                if (num >= 1 && num <= 10 && num == parseInt(num)) {
                    return num;
                }

                throw new Error("Bad number");
            }
            function translateNumberToGerman(index) {
                index--;
                var answer = deNu[index];
                $(".answer").text(answer);
            }

            try {
                given = askForNumber();
                translateNumberToGerman(given);
            } catch (e) {
                $(".answer").text(e);
            }
        });
    });
})();
