// task 1
// Make a page that has on it an element that is 100px by 100px in size,
// has absolute positioning, and has a solid background color.Add an event
// handler that makes this box center itself directly under the user's mouse
// pointer as it is moved across the screen.

(function () {
    var elem = document.querySelector(".sq");
    // console.log(elem);
    document.addEventListener("mousemove",
        function (e) {
            var x = e.clientX / 2;
            var y = e.clientY / 2;
            elem.style.left = x + "px";
            elem.style.top = y + "px";
        });

})();
// unfortunately not CENTERING itself under the user's mouse:/


// task 2
// Make a page that has a <textarea> element on it. As the user types visible
// characters into this field, the characters should be replaced with the characters
// in the corresponding position in the Gettysburg Address.
// (Note - you can get and set the text in a <textarea> through its value property.)

(function () {
    var txt = document.querySelector("#text");
    // console.log(txt);
    var address = "Address Delivered at the Dedication of the Cemetery at Gettysburg. Abraham Lincoln, November 19, 1863. Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";

    txt.addEventListener("input", function (e) {
        var s = address.slice(0, e.target.value.length);
        e.target.value = s;
        return s;
    })
})();

