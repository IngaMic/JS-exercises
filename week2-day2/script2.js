// task 3
// Make a page that has on it an element that is 100px by 100px in size and has a solid
// black border. When the user mouses down on this box, its background should change to a
// randomly selected color. When the user mouses up on it, its background should change to
// another randomly selected color.

(function () {
    var box = document.querySelector(".box");

    function a() {
        return Math.floor(Math.random() * 101);
    }
    function b() {
        return Math.floor(Math.random() * 101);
    }
    function c() {
        return Math.floor(Math.random() * 101);
    }

    box.addEventListener("mousedown", function () {
        box.style.backgroundColor = "rgb(" + a() + "," + b() + "," + c() + ")";
    });
    box.addEventListener("mouseup", function () {
        box.style.backgroundColor = "rgb(" + a() + "," + b() + "," + c() + ")";
    });
}
)();

// tast 4
// Make a page that has on it an element that is 200px by 200px in size and has a solid background color.
// Nest within that element another element that is 50px by 50px in size and has a different solid
// background color. When the user clicks on the outer element its background color should change
// to a randomly selected color. However, if the user clicks on the inner element, the inner element's
// background color should change to a randomly selected background color but the outer element's
// background color should not change at all.

(function () {
    var first = document.querySelector(".first");
    var second = document.querySelector(".second");

    function a() {
        return Math.floor(Math.random() * 101);
    }
    function b() {
        return Math.floor(Math.random() * 101);
    }
    function c() {
        return Math.floor(Math.random() * 101);
    }

    first.addEventListener("click", function () {
        first.style.backgroundColor = "rgb(" + a() + "," + b() + "," + c() + ")";
    });
    second.addEventListener("click", function (e) {
        second.style.backgroundColor = "rgb(" + a() + "," + b() + "," + c() + ")";
        // need to stop propagation for this event
        e.stopPropagation();
    });
})();