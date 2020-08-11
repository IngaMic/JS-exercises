//bonus, in process:)

var big = document.getElementById("big");
var b = big.getContext("2d");

var small = document.getElementById("small");
var ctx = small.getContext("2d");
b.beginPath();
b.fillStyle = "turquoise";
b.fillRect(0, 0, big.width, big.height);
// ctx.beginPath();
// ctx.fillStyle = "yellow";
// ctx.fillRect(0, 0, small.width, small.height);
//head
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
//activating the map
ctx.stroke();
//body
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 100);
ctx.lineTo(50, 220);
ctx.closePath();
ctx.stroke();
//leftHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 120);
ctx.lineTo(0, 220);
ctx.closePath();
ctx.stroke();
//rightHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 120);
ctx.lineTo(100, 220);
ctx.closePath();
ctx.stroke();
//leftLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 220);
ctx.lineTo(0, 330);
ctx.closePath();
ctx.stroke();
//rightLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 220);
ctx.lineTo(100, 330);
ctx.closePath();
ctx.stroke();

var dx = 0;
var dy = 0;

// big.drawImage(small, x,);

b.drawImage(small, dx, dy, 100, 320);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
        dx -= 5;
    } else if (event.keyCode === 38) {
        dy -= 5;
        // console.log(x, y);
    } else if (event.keyCode === 39) {
        dx += 5;
    } else if (event.keyCode === 40) {
        dy += 5;
    }
    b.clearRect(0, 0, 600, 600);
    b.drawImage(small, dx, dy, 100, 320);

});
// big.clearRect(0, 0, 0, 0);