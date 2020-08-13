(function () {
    var headlines = $("#headlines");
    var left = headlines.offset().left;
    // console.log(left);
    var s = $("a");
    var first = s[0];
    // console.log(first.offsetWidth);
    var myReq;

    for (var i = 0; i < s.length; i++) {
        s[i].addEventListener("mouseenter", function (e) {
            $(e.target).css("color", "indigo");
            $(e.target).css("textDecoration", "underline");
            s = $("a");
        });
        s[i].addEventListener("mouseleave", function (e) {
            $(e.target).css("color", "black");
            $(e.target).css("textDecoration", "none");
            s = $("a");
        });
    }

    function moveHeadlines() {
        left--;
        if (left <= -first.offsetWidth) {
            left += first.offsetWidth;
            headlines.append(first);
        }
        headlines.css("left", left);
        myReq = requestAnimationFrame(moveHeadlines);
        return moveHeadlines;
    }
    headlines.on("mouseenter", function () {
        cancelAnimationFrame(myReq);
    });
    headlines.on("mouseleave", function () {
        requestAnimationFrame(moveHeadlines);
    });
    moveHeadlines();
})();

// BONUS:
// not working properly - jumps in

(function () {
    var newHeadlines = $("#newHeadlines");
    // console.log(newHeadlines);
    var right = newHeadlines.offset().left;
    // console.log(right);
    var a = $("#new");
    var one = a[0];
    var myReq1;

    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("mouseenter", function (e) {
            $(e.target).css("color", "indigo");
            $(e.target).css("text-decoration", "underline");
            a = $("#new");
        });
        a[i].addEventListener("mouseleave", function (e) {
            $(e.target).css("color", "darkslategrey");
            $(e.target).css("text-decoration", "none");
            a = $("#new");
        });
    }

    function moveHeadlines() {
        right--;

        if (right <= -one.offsetWidth) {
            right += one.offsetWidth;
            newHeadlines.append(one);
        }

        newHeadlines.css("right", right);
        myReq1 = requestAnimationFrame(moveHeadlines);
        return moveHeadlines;
    }
    newHeadlines.on("mouseenter", function () {
        cancelAnimationFrame(myReq1);
    });
    newHeadlines.on("mouseleave", function () {
        requestAnimationFrame(moveHeadlines);
    });

    moveHeadlines();
})();
